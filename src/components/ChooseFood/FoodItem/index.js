import classNames from 'classnames/bind';
import styles from './FoodItem.module.scss';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Button from '~/layouts/components/Button';
import { useStore, actions } from '~/store';

const cx = classNames.bind(styles);

function FoodItem({ food }) {
    const [state, dispath] = useStore();
    const { selectedFoods } = state;

    const getFoodQuantity = (id) => {
        const quantity = selectedFoods.find((foodItem) => foodItem.food.id === id)?.quantity;
        if (quantity === undefined) {
            return 0;
        }
        return quantity;
    };

    const handleAddFood = () => {
        const id = food.id;
        const quantity = getFoodQuantity(id);
        if (quantity === 0) {
            //food is not in cart
            dispath(actions.addFood([...selectedFoods, { food: food, quantity: 1 }]));
        } else {
            // food is in cart
            dispath(
                actions.addFood(
                    selectedFoods.map((foodItem) =>
                        foodItem.food.id === id ? { ...foodItem, quantity: foodItem.quantity + 1 } : foodItem,
                    ),
                ),
            );
        }
    };

    const handleRemoveFood = () => {
        const id = food.id;
        const quantity = getFoodQuantity(id);
        if (quantity === 1) {
            removeFoodById(id);
        } else {
            dispath(
                actions.addFood(
                    selectedFoods.map((foodItem) =>
                        foodItem.food.id === id ? { ...foodItem, quantity: foodItem.quantity - 1 } : foodItem,
                    ),
                ),
            );
        }
    };

    const removeFoodById = (id) => {
        const arrayFoods = selectedFoods;
        const index = arrayFoods.findIndex((x) => x.food.id === id);
        arrayFoods.splice(index, 1);
        dispath(actions.addFood([...arrayFoods]));
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('img-food')}>
                <img src={food.img} alt="FoodImage" />
            </div>
            <div className={cx('title')}>{food.title}</div>
            <div className={cx('cost')}>{food.cost} đ</div>
            <div className={cx('quantity-wrapper')}>
                <Button onClick={handleRemoveFood}>
                    <RemoveCircleOutlineIcon sx={{ fontSize: 25 }} />
                </Button>
                <div className={cx('quantity')}>{getFoodQuantity(food.id)}</div>
                <Button onClick={handleAddFood}>
                    <AddCircleOutlineIcon sx={{ fontSize: 25 }} />
                </Button>
            </div>
        </div>
    );
}

export default FoodItem;
