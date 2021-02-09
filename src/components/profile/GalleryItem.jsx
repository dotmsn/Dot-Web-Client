import styles from './profile.module.sass';

function GalleryItem({ src }) {
    const style = {
        backgroundImage: `url('${src}')`,
    };
    const ext = src.split('.')[src.split('.').length - 1];

    return (
        <div style={style} className={styles['gallery-item']}>
            <div className={styles['item-badge']}>{ext.toUpperCase()}</div>
        </div>
    );
}

export default GalleryItem;
