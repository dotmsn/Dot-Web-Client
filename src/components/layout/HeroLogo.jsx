import styles from './herologo.module.sass';

function HeroLogo({ filter = 'normal', pos, size = '100%', src, alt }) {
    return (
        <div pos={pos} className={styles['hero-logo']}>
            <img
                className={styles[filter]}
                src={src}
                alt={alt}
                width={size}
                height={size}
                loading="lazy"
            />
        </div>
    );
}

export default HeroLogo;
