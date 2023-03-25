import classNames from 'classnames/bind';
import styles from './ChooseFood.module.scss';
import Food1 from '~/assets/Food1.png';
import Food2 from '~/assets/Food2.png';
import Food3 from '~/assets/Food3.png';
import Food4 from '~/assets/Food4.png';
import Food5 from '~/assets/Food5.png';
import Food6 from '~/assets/Food6.png';
import FoodItem from './FoodItem';

const cx = classNames.bind(styles);

const foods = [
    { id: 1, img: Food1, title: 'Combo 1 Big', cost: 35000 },
    { id: 2, img: Food2, title: 'Combo 2 Big', cost: 45000 },
    { id: 3, img: Food3, title: 'Combo 3 Big', cost: 55000 },
    { id: 4, img: Food4, title: 'Combo 4 Big', cost: 65000 },
    { id: 5, img: Food5, title: 'Combo 5 Big', cost: 75000 },
    { id: 6, img: Food6, title: 'Combo 6 Big', cost: 85000 },
];

function ChooseFood() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <div>Chọn bắp nước</div>
                <div className={cx('title-line')}></div>
            </div>
            <div className={cx('list-card')}>
                {foods.map((food, index) => {
                    return <FoodItem key={index} food={food} />;
                })}
            </div>
        </div>
    );
}

export default ChooseFood;
