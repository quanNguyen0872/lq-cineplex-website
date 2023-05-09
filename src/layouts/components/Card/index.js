import classNames from 'classnames/bind';
import styles from './Card.module.scss';
import config from '~/config';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Card({ data }) {
    return (
        <Link to={config.routes.chitiet}>
            <div className={cx('column')}>
                <div className={cx('card')}>
                    <img
                        src={data.image}
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        alt="movie-poster"
                    />
                    <h2 style={{ fontSize: '16px', marginTop: '15px' }}>{data.title}</h2>
                </div>
            </div>
        </Link>
    );
}

export default Card;
