import { verifyAccount } from '../services/authService';
import { useState, useEffect } from "react";
import queryString from 'query-string';

import EmptyPanel from "../components/layout/EmptyPanel";

var errorStateValue, setErrorState;
var successStateValue, setSuccessState;
var noticeStateValue, setNoticeState;

async function verifyAcc (token) {
    const result = await verifyAccount(token).catch((e) => {
        const { errors}  = e.source;
        if (errors) {
            setErrorState(errors[0].message);
        } else {
            setErrorState(e.message);
        }
        

        return null;
    })

    if (result) {
        setSuccessState("Has sido verificado correctamente!")
    }
}

export default function Verify({history, location}) {
    const { token } = queryString.parse(location.search);

    [errorStateValue, setErrorState] = useState(null);
    [successStateValue, setSuccessState] = useState(null);
    [noticeStateValue, setNoticeState] = useState(false);

    useEffect(() => {
        if (token)
            verifyAcc(token);
        else
            setNoticeState(true)
    }, []);

    return (
        <div>
            {
                errorStateValue &&
                (
                    <EmptyPanel title="Error while verifying" subtitle={errorStateValue} icon="/icons/error.svg"/>
                )
            }

            {
                successStateValue &&
                (
                    <EmptyPanel history={history} redirect="/" title="Verified Successfully" subtitle="Redirecting to the main site..." icon="/icons/check.svg"/>
                )
            }

            {
                noticeStateValue === true && (
                    <EmptyPanel title="Check your mail" subtitle="We sent the verification token" icon="/icons/mails.svg" />
                )
            }
        </div>
    );
}
