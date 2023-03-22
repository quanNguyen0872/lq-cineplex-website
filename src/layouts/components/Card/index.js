import classNames from 'classnames';
import Button from '~/layouts/components/Button';
import config from '~/config';
const cx = classNames;

function Card({ dataMovie }) {
    return (
        <Button to={config.routes.chitiet} className={cx('flex flex-col items-center w-80 m-4 ')}>
            <img src={dataMovie.image} alt="poster" className={cx('w-full h-[300px] object-cover rounded-md')} />
            <div className={cx('break-words text-lq-white ')}> {dataMovie.title} </div>
        </Button>
    );
}

export default Card;
