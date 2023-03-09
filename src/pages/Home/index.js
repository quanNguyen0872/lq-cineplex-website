import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Slide from '~/layouts/components/Slide';

import Button from '~/layouts/components/Button';
import Card from '~/layouts/components/Card';

const cx = classNames.bind(styles);

const cardInfo = [
    {
        image: 'https://www.galaxycine.vn/media/2023/3/3/450x300_1677813532298.jpg',
        title: 'SIÊU LỪA SIÊU LẦY',
    },
    {
        image: 'https://cdn.galaxycine.vn/media/2023/3/6/450x300-1_1678072225628.jpg',
        title: 'CUỘC CHIẾN THỜI TIỀN SỬ',
    },
    {
        image: 'https://cdn.galaxycine.vn/media/2023/2/17/antman-3-5_1676600944892.jpg',
        title: 'NGƯỜI KIẾN VÀ CHIẾN BINH ONG',
    },
    {
        image: 'https://cdn.galaxycine.vn/media/2023/2/14/450x300_1676362573876.jpg            ',
        title: 'MISSING',
    },
    {
        image: 'https://cdn.galaxycine.vn/media/2023/2/17/450x300-chuot_1676619353890.jpg            ',
        title: 'CHUỘT NHÍ VÀ SỨ MỆNH CỦA ...',
        text: 'kkkk',
    },
    {
        image: 'https://www.galaxycine.vn/media/2023/3/3/450x300_1677813532298.jpg',
        title: 'Siêu lừa gặp siêu lầy',
    },
    {
        image: 'https://www.galaxycine.vn/media/2023/3/3/450x300_1677813532298.jpg',
        title: 'Siêu lừa gặp siêu lầy',
    },
    {
        image: 'https://www.galaxycine.vn/media/2023/3/3/450x300_1677813532298.jpg',
        title: 'Siêu lừa gặp siêu lầy',
        text: 'kkkk',
    },
];
const cardSukien = [
    {
        image: 'https://cdn.galaxycine.vn/media/2022/12/10/combo-u22-digital-300x450-1667285239633_1670637604853.jpg',
    },
    {
        image: 'https://cdn.galaxycine.vn/media/2023/3/1/nta-t3-digital-300x450_1677659306345.jpg',
    },
    {
        image: 'https://cdn.galaxycine.vn/media/2023/2/16/glx-q1-1200x1800_1676516168305.jpg',
    },
    {
        image: 'https://cdn.galaxycine.vn/media/2023/1/17/bangqltv-2023-digital-1200x1800_1673940943642.jpg',
    },
];
function Home() {
    const renderListMovie = () => {
        return cardInfo.map((item, index) => {
            return <Card key={index} dataMovie={item} />;
        });
    };
    const renderListSukie = () => {
        return cardSukien.map((item, index) => {
            return <Card key={index} dataMovie={item} />;
        });
    };

    return (
        <div className={cx('container_home ')}>
            <div className={cx('slide')}>
                <Slide />
            </div>
            <div className={cx('flex justify-center pt-5')}>
                <Button
                    className={cx(
                        'text-black  hover:bg-red-600  bg-lq-white w-72 h-16 justify-center text-2xl font-bold',
                    )}
                >
                    Phim đang chiếu
                </Button>
                <Button
                    className={cx(
                        'text-black  hover:bg-red-600  bg-lq-white w-72 h-16 justify-center text-2xl font-bold',
                    )}
                >
                    Phim đang chiếu
                </Button>
            </div>

            <div className={cx('pl-[200px] pr-[200px] ')}>
                <div className={cx('flex flex-wrap justify-between')}>{renderListMovie()}</div>
            </div>
            <span className={cx('textsukien')}>Sự kiện</span>
            <div className={cx('pl-[200px] pr-[200px] ')}>
                <div className={cx('flex flex-wrap justify-between')}>{renderListSukie()}</div>
            </div>
        </div>
    );
}

export default Home;
