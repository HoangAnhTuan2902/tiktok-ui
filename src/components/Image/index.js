import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallBack: customFallBack = images.noImage, ...props }, ref) => {
    const [fallBack, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallBack);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallBack || src}
            alt={alt}
            ref={ref}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
