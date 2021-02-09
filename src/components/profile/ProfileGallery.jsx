import styles from './profile.module.sass';
import GalleryItem from './GalleryItem';

function ProfileGallery() {
    return (
        <div className={styles['profile-gallery']}>
            <GalleryItem src="/test.jpg" />
            <GalleryItem src="/test2.png" />
            <GalleryItem src="/test3.gif" />
            <GalleryItem src="/test4.jpg" />
        </div>
    );
}

export default ProfileGallery;
