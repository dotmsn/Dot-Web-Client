import React, { useState } from 'react';

import { Box, Button, Input, InputGroup } from '@chakra-ui/react';

import { register } from '../../services/authService';

import styles from './auth.module.sass';

var username, email, password, confirmPassword;
var errorStateValue, errorStateUpdate;
var successStateUpdate, successStateValue;
function checkBefore() {
    if (!username || username === '')
        errorStateUpdate("Username can't be empty.");
    else if (!email || email === '') errorStateUpdate("Email can't be empty.");
    else if (!password || password === '')
        errorStateUpdate("Password can't be empty.");
    else if (confirmPassword !== password)
        errorStateUpdate("Password confirmation doesn't match.");
    else return true;
}

function tryRegisterAccount(history) {
    errorStateUpdate(null);
    successStateUpdate(null);

    if (!checkBefore()) return;

    // eslint-disable-next-line no-undef
    grecaptcha.ready(function () {
        // eslint-disable-next-line no-undef
        grecaptcha
            .execute('6LccE00aAAAAAPQoyNh23LoAaCzzsF-YDj8IkgTw', {
                action: 'submit',
            })
            .then(function (token) {
                window.localStorage.setItem('captcha', token);
                registerAccount(history);
            });
    });
}

async function registerAccount(history) {
    const args = {
        payload: {
            username,
            email,
            password,
        },
    };

    const data = await register(args).catch((err) => {
        console.error(err);
        const message = err.source ? err.source.errors[0].message : err.message;
        errorStateUpdate(message);
        return null;
    });

    if (data) {
        successStateUpdate('Registered successfully, redirecting...');
        setTimeout(() => {
            history.push('/login');
        }, 1000);
    }
}

function RegisterForm(props) {
    [errorStateValue, errorStateUpdate] = useState(null);
    [successStateValue, successStateUpdate] = useState(null);

    const { history } = props;

    return (
        <Box className={styles['form']}>
            {errorStateValue != null && (
                <InputGroup className={styles['input-group']}>
                    <span className={styles['response-error']}>
                        <b>Error:</b> {errorStateValue}
                    </span>
                </InputGroup>
            )}

            {successStateValue != null && (
                <InputGroup className={styles['input-group']}>
                    <span className={styles['response-success']}>
                        <b>Success:</b> {successStateValue}
                    </span>
                </InputGroup>
            )}

            <InputGroup className={styles['input-group']}>
                <Input
                    className={styles['input']}
                    placeholder="Username"
                    type="text"
                    onChange={(e) => (username = e.target.value)}
                />
            </InputGroup>

            <InputGroup className={styles['input-group']}>
                <Input
                    className={styles['input']}
                    placeholder="Email address"
                    type="email"
                    onChange={(e) => (email = e.target.value)}
                />
            </InputGroup>

            <InputGroup className={styles['input-group']}>
                <Input
                    className={styles['input']}
                    placeholder="Password"
                    type="password"
                    onChange={(e) => (password = e.target.value)}
                />
            </InputGroup>

            <InputGroup className={styles['input-group']}>
                <Input
                    className={styles['input']}
                    placeholder="Confirm Password"
                    type="password"
                    onChange={(e) => (confirmPassword = e.target.value)}
                />
            </InputGroup>

            <InputGroup className={styles['input-group']}>
                <Button
                    onClick={() => tryRegisterAccount(history)}
                    className="btn btn-primary"
                >
                    Register
                </Button>
            </InputGroup>
        </Box>
    );
}

export default RegisterForm;
