import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Box, Button, Input, InputGroup, Checkbox } from '@chakra-ui/react';

import { login } from '../../redux/actions/sessionActions';
import styles from './auth.module.sass';

var email, password;
var errorStateValue, errorStateUpdate;

function checkBefore() {
    if (!email || email === '') errorStateUpdate("Email can't be empty.");
    else if (!password || password === '')
        errorStateUpdate("Password can't be empty.");
    else return true;
}

function tryLogin(history) {
    errorStateUpdate(null);
    if (!checkBefore()) return;

    // eslint-disable-next-line no-undef
    grecaptcha.ready(function () {
        // eslint-disable-next-line no-undef
        grecaptcha
            .execute('6LccE00aAAAAAPQoyNh23LoAaCzzsF-YDj8IkgTw', {
                action: 'submit',
            })
            .then(function (token) {
                sendLoginRequest(token, history);
            });
    });
}

async function sendLoginRequest(recaptcha, history) {
    await login({ email, password }, history).catch((e) => {
        errorStateUpdate(e);
    });
}

function LoginForm({ history }) {
    [errorStateValue, errorStateUpdate] = useState(null);

    return (
        <Box className={styles['form']}>
            {errorStateValue != null && (
                <InputGroup className={styles['input-group']}>
                    <span className={styles['response-error']}>
                        <b>Error:</b> {errorStateValue}
                    </span>
                </InputGroup>
            )}

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
                <Checkbox />
                <span className={styles['checkbox-label']}>
                    Keep logged in.
                </span>
                <Link to="/">
                    <span className={styles['text-right']}>
                        Forgotten password?
                    </span>
                </Link>
            </InputGroup>

            <InputGroup className={styles['input-group']}>
                <Button
                    onClick={() => tryLogin(history)}
                    className="btn btn-primary"
                >
                    Login
                </Button>
            </InputGroup>
        </Box>
    );
}

export default LoginForm;
