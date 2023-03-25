import classNames from 'classnames/bind';
import Button from '~/layouts/components/Button';
import styles from './FoodCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function FoodCard({ foodItem }) {
    return (
        <div className={cx('food-card')}>
            <div className={cx('food-card-item')}>
                <img className={cx('food-img')} src={foodItem.food.img} alt="FoodImage" />
            </div>
            <div className={cx('food-wrapper', 'food-card-item')}>
                <div className={cx('food-title')}>{foodItem.food.title}</div>
                <div>
                    {foodItem.quantity} * {foodItem.food.cost} đ
                </div>
            </div>
            <div className={cx('food-card-item')}>{foodItem.food.cost * foodItem.quantity} đ</div>
            <Button className={cx('food-card-item')}>
                <FontAwesomeIcon icon={faCircleXmark} fontSize="25" />
            </Button>
        </div>
    );
}

export default FoodCard;
