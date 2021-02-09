import { Avatar } from '@chakra-ui/react';
import styles from './profile.module.sass';

function Profile({ username, displayname, status }) {
    return (
        <div className={styles['profile-container']}>
            <div className={styles['details-container']}>
                <Avatar />
                <div className={styles['details']}>
                    <strong className={styles['displayname']}>
                        {displayname}
                    </strong>
                    <span className={styles['username']}>@{username}</span>
                </div>
            </div>

            <div className={styles['status']}>
                <p>{status}</p>
            </div>
        </div>
    );
}

export default Profile;
