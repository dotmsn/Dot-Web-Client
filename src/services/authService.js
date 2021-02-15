import fetch from 'isomorphic-unfetch';
import { commitMutation } from 'react-relay';
import { createUserMutation, confirmUserMutation } from '../graphql';

import { initEnvironment } from '../relay/environment';

const environment = initEnvironment();

export const verifyAccount = (token) => {
    return new Promise((resolve, reject) => {
        commitMutation(environment, {
            mutation: confirmUserMutation,
            variables: { token },
            onCompleted: resolve,
            onError: reject
        })
    })
};

export const register = (payload) => {
    return new Promise((resolve, reject) => {
        commitMutation(environment, {
            mutation: createUserMutation,
            variables: payload,
            onCompleted: resolve,
            onError: reject,
        });
    });
};

export const login = (payload) => {
    return new Promise(async (resolve, reject) => {
        const request = await fetch('http://localhost:4000/auth/login', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await request.json();

        if (request.status !== 200 && request.status !== 201) {
            const error =
                data.message === 'Unauthorized'
                    ? 'Invalid login credentials'
                    : data.message;
            reject(error);
        } else {
            resolve(data);
        }
    });
};

export const logout = () => {
    return new Promise((resolve) => setTimeout(resolve, 1000));
};

export const validate = (token) => {
    return new Promise(async (resolve) => {
        const request = await fetch(
            'http://localhost:4000/auth/validate?token=' + token,
        );
        const data = await request.json();
        resolve(data.valid);
    });
};
