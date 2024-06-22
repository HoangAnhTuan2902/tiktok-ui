import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEllipsis } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItems() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/7350010064607903776~c5_300x300.webp?lk3s=a5d48078&nonce=97182&refresh_token=926d798b2b5f86d12aab014a903eacd9&x-expires=1719241200&x-signature=%2BkaaBma3KQca1DjwCV7W9Bi2FoA%3D&shp=a5d48078&shcp=c1333099"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
            <FontAwesomeIcon className={cx('options')} icon={faEllipsis} />
        </div>
    );
}

export default AccountItems;
