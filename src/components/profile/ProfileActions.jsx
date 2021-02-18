import { Button } from '@chakra-ui/react';
import styles from './profileactions.module.sass';

function ProfileActions({own}) {
    return (
        <div className={styles['profile-actions']}>
            {
                !own && (
                    <div>
                        <Button className={styles['btn-primary']} size="lg">
                            Add friend
                        </Button>
                        <Button className={styles['btn-secondary']} size="lg">
                            Send message
                        </Button>
                    </div>
                )
            }

            {
                own && (
                    <div>
                        <Button className={styles['btn-primary']} size="lg">
                            New post
                        </Button>
                        <Button className={styles['btn-secondari']} size="lg">
                            Update profile
                        </Button>
                    </div>
                )
            }
        </div>
    );
}

export default ProfileActions;
