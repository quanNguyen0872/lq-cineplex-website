import classNames from 'classnames';
import Card from '~/layouts/components/Card';
import Button from '~/layouts/components/Button';
import { AiOutlineArrowRight } from 'react-icons/ai';
const cx = classNames;
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
function Movie() {
    const renderListMovie = () => {
        return cardInfo.map((item, index) => {
            return <Card key={index} dataMovie={item} />;
        });
    };
    return (
        <div className={cx('')}>
            <div className={cx('ml-60 pt-10 text-red-600 text-5xl ')}>
                Phim đang chiếu
                <div className={cx('w-52 h-1 bg-red-600 ')}></div>
            </div>
            <div className={cx('pl-[200px] pr-[200px] ')}>
                <div className={cx('flex flex-wrap justify-between')}>{renderListMovie()}</div>
            </div>
            <div className={cx('flex justify-end pb-32 mr-32')}>
                <Button
                    className={cx(
                        'text-black  hover:bg-red-600  bg-lq-white w-72 h-16 justify-center text-2xl font-bold',
                    )}
                >
                    Xem thêm <AiOutlineArrowRight />
                </Button>
            </div>
        </div>
    );
}

export default Movie;
