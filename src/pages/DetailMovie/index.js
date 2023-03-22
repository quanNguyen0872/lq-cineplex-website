import { Autocomplete, TextField } from '@mui/material';
import Card from '~/layouts/components/Card';
import classNames from 'classnames';
import Button from '~/layouts/components/Button';
import ListRap from '~/layouts/components/ListRap';
import Picker from '~/layouts/components/Picker';
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
];
function DetailMovie() {
    const cardMovie = [
        {
            image: '	https://cdn.galaxycine.vn/media/2023/2/17/antman-3-2_1676601186349.jpg',
        },
    ];
    const renderListMovie = () => {
        return cardInfo.map((item, index) => {
            return <Card key={index} dataMovie={item} />;
        });
    };
    const listDanhMuc = ['TP Hồ Chí Minh', 'Hà Nội', 'Quảng Bình', 'Bình Định'];
    const listRap = ['L&Q Cineplex Quang Trung', 'Rạp Hồ Tây', 'Rạp Trường Chinh', 'Rạp Lý Tự Trọng'];
    return (
        <div className={cx('')}>
            <a className={cx('text-lq-white ml-32 pt-5')} href="">
                AVATAR: THE WAY OF WATER
            </a>
            <div className={cx('flex p-24 ml-48')}>
                <img src={cardMovie[0].image} alt="poster" className={cx('w-[300px]  object-cover rounded-md')} />
                <div className={cx('ml-64 ')}>
                    <p className={cx('text-lq-white ml-32 text-5xl')}>AVATAR: THE WAY OF WATER</p>
                    <p className={cx('text-lq-white text-3xl pt-5')}>
                        Nội dung : Những trích đoạn đầu tiên hé lộ diễn biến cuộc chiến tiếp theo giữa loài người và bộ
                        tộc người Na’vi ...
                    </p>
                    <p className={cx('text-lq-white text-3xl pt-5')}>Đạo diễn : James Cameron</p>
                    <p className={cx('text-lq-white text-3xl pt-5')}>Diễn viên : James Cameron</p>
                    <p className={cx('text-lq-white text-3xl pt-5')}>Thể loại : Hành động </p>
                    <p className={cx('text-lq-white text-3xl pt-5')}>Đạo diễn : James Cameron</p>
                    <p className={cx('text-lq-white text-3xl pt-5')}>Thời lượng : 100p</p>
                    <div className={cx('ml-80 pt-14')}>
                        <Button
                            className={cx(
                                'text-black  hover:bg-lq-white  bg-red-600  w-72 h-16 justify-center text-3xl font-bold',
                            )}
                        >
                            Đặt vé
                        </Button>
                    </div>
                </div>
            </div>
            <div className={cx('ml-60 pt-10 text-red-600 text-5xl ')}>
                Lịch chiếu
                <div className={cx('w-32 h-1 bg-red-600 ')}></div>
            </div>
            <div className={cx('flex ml-96 pt-20')}>
                <div className={cx('font-bold h-[50px] rounded-xl')}>
                    <Autocomplete
                        className={cx('text-2xl bg-white rounded-xl ')}
                        sx={{ width: 250, height: 50.5, mb: 2, border: '1px solid white' }}
                        options={listDanhMuc.map((item) => item)}
                        size="medium"
                        renderInput={(params) => <TextField {...params} label="Tỉnh/Thành phố" />}
                    />
                </div>
                <div className={cx('bg-white ml-56 w-96 h-20 rounded-xl')}>
                    <Picker />
                </div>
                <div className={cx('font-bold h-[50px] ml-56')}>
                    <Autocomplete
                        className={cx('text-2xl bg-white rounded-xl')}
                        sx={{ width: 250, height: 50.5, mb: 2 }}
                        options={listRap.map((item) => item)}
                        size="medium"
                        renderInput={(params) => <TextField {...params} label="Tất cả các rạp" />}
                    />
                </div>
            </div>

            <div className={cx('pt-11 justify-between ml-80')}>
                <div className={cx('w-[1100px] bg-red-600 h-1 ')}></div>
            </div>
            <ListRap />

            <div className={cx('justify-between')}>
                <div className={cx(' ml-60 pt-10 text-red-600 text-5xl ')}>
                    Phim Hot
                    <div className={cx('w-52 h-1 bg-red-600 ')}></div>
                </div>
                <div className={cx('pl-[200px] pr-[200px] ')}>
                    <div className={cx('flex flex-wrap justify-between')}>{renderListMovie()}</div>
                </div>
            </div>
        </div>
    );
}

export default DetailMovie;
