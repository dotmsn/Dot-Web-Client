import { Button } from "@chakra-ui/button";
import { useState, useEffect, Fragment } from "react";
import { sendConfirmEmail } from "../../services/authService";

var buttonStatus, updateButtonStatus;

function sendConfirmMail () {
    sendConfirmEmail().then(() => {
        updateButtonStatus(5 * 60);
    }).catch((e) => {
        const err = e.source.errors[0];
        if (err) {
            const msg = err.message;
            const time = msg.split("Wait (")[1];

            if (time) {
                const seconds = time.split(")")[0].split(".")[0]
                updateButtonStatus(parseInt(seconds));
            }
        }
    })
}

export default function SendMailButton () {
    [buttonStatus, updateButtonStatus] = useState(0);

    useEffect(() => {
        setInterval(() => {
            if (buttonStatus > 0) {
                updateButtonStatus(buttonStatus - 1);
            }
        }, 1000);
    }, []);

    return (
        <Fragment>
            {
                buttonStatus === 0 &&
                <Button onClick={sendConfirmMail} className="btn btn-primary">
                    Re-send confirm email
                </Button>
            }

            {
                buttonStatus !== 0 &&
                <Button className="btn">
                    Wait {buttonStatus} seconds
                </Button>
            }
        </Fragment>
    )
}