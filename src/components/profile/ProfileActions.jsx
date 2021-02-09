import { Button } from '@chakra-ui/react';
import styles from './profileactions.module.sass';

function ProfileActions() {
    return (
        <div className={styles['profile-actions']}>
            <Button className={styles['btn-add']} size="lg">
                Add friend
            </Button>
            <Button className={styles['btn-send']} size="lg">
                Send message
            </Button>
        </div>
    );
}

export default ProfileActions;
