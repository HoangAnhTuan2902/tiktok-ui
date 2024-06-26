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
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7cbae74b44c64fb0d6407d8e88f5a8b2.jpeg?lk3s=a5d48078&nonce=14304&refresh_token=3c855abfc8eec3fcc6622f4afda5d21a&x-expires=1719576000&x-signature=TSW8tTGscOHuSTrMiPZS7PjiEc0%3D&shp=a5d48078&shcp=b59d6b55"
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
