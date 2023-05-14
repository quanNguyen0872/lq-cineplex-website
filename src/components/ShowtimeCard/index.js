import moment from 'moment';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import config from '~/config';
import LichChieuService from '~/services/lichchieuService';
import classNames from 'classnames/bind';
import styles from './ShowtimeCard.module.scss';
import { Button } from '@mui/material';

const cx = classNames.bind(styles);

function ShowtimeCard({ marap, tenrap, maphim, ngaychieu }) {
    const [dsLichChieu, setDsLichChieu] = useState([]);

    // Load danh sach lich chieu
    useEffect(() => {
        const fetchApiLichChieu = async () => {
            await LichChieuService.getDsLichChieuPhimRapNgayChieu(maphim, marap, ngaychieu).then((res) => {
                setDsLichChieu(res);
            });
        };
        fetchApiLichChieu();
    }, [maphim, marap, ngaychieu]);

    return (
        <>
            {dsLichChieu.length !== 0 ? (
                <div className={cx('mb-5')}>
                    <div className={cx('w-fit pl-5 pr-10 py-2 bg-[#a11e1b] text-[#fff] text-xl')}>{tenrap}</div>
                    <div className={cx('flex py-10 px-5')} style={{ border: '2px solid #cccccc' }}>
                        {dsLichChieu.map((lichchieu) => {
                            const gioBatDau = moment(lichchieu.gioBatDau, 'HH:mm:ss').format('HH:mm');
                            return (
                                <div key={lichchieu.id}>
                                    <Link to={config.routes.datve} state={lichchieu} className={cx('mr-5')}>
                                        <Button
                                            sx={{
                                                fontSize: '18px',
                                                color: '#cccccc',
                                                borderColor: '#cccccc',
                                                borderWidth: '2px',
                                                '&:hover': {
                                                    borderColor: '#c92522',
                                                    color: '#c92522',
                                                    borderWidth: '2px',
                                                },
                                            }}
                                            variant="outlined"
                                        >
                                            {gioBatDau}
                                        </Button>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}

export default ShowtimeCard;
