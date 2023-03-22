import classNames from 'classnames/bind';
import Button from '~/layouts/components/Button';
import styles from './SeatCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function SeatCard({ seat, price }) {
    return (
        <div className={cx('ticket-seat-card')}>
            <div className={cx('ticket-number-seat', 'ticket-seat-card-item')}>{seat}</div>
            <div className={cx('ticket-room-wrapper', 'ticket-seat-card-item')}>
                <div>Phòng</div>
                <div>1</div>
            </div>
            <div className={cx('ticket-room-wrapper', 'ticket-seat-card-item')}>
                <div>Hàng</div>
                <div>{[...seat][0]}</div>
            </div>
            <div className={cx('ticket-room-wrapper', 'ticket-seat-card-item')}>
                <div>Ghế</div>
                <div>{[...seat][1]}</div>
            </div>
            <div className={cx('ticket-seat-card-item')}>{price}</div>
            <Button className={cx('ticket-seat-card-item')}>
                <FontAwesomeIcon icon={faCircleXmark} fontSize="25" />
            </Button>
        </div>
    );
}

export default SeatCard;
