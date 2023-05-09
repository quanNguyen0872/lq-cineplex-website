import React, { useContext, useState } from 'react';
import classNames from 'classnames/bind';
import config from '~/config';
import styles from './TicketBooking.module.scss';
import { Breadcrumbs, Link, Box, Typography, TextField, IconButton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ClearIcon from '@mui/icons-material/Clear';
import BookingStepper from '~/components/BookingStepper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import Button from '~/layouts/components/Button';
import SeatCard from '~/components/SeatCard';
import FoodCard from '~/components/FoodCard';
import { CinemaContext } from '~/store/Context';

const cx = classNames.bind(styles);

const movie = {
    name: 'AVATAR: THE WAY OF WATER',
    price: 85000,
    occupied: ['C5', 'C6', 'D7', 'A2', 'A3', 'B1'],
};

function TicketBooking() {
    const { selectedSeats, activeStep, setActiveStep, selectedFoods } = useContext(CinemaContext);

    const [activeVourcher, setActiceVourcher] = useState(0);
    const [valueTextField, setValueTextField] = useState('');

    const handleShowInputVourcher = () => {
        setActiceVourcher(1);
    };

    const handleClearTextField = () => {
        setValueTextField('');
    };

    const handleNext = () => {
        setActiveStep(activeStep + 1);
        // dispath(actions.setActiveStep(activeStep + 1));
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
        // dispath(actions.setActiveStep(activeStep - 1));
    };

    const handleSkip = () => {
        setActiveStep(activeStep + 2);
        // dispath(actions.setActiveStep(activeStep + 2));
    };

    // const handleReset = () => {
    //     dispath(actions.setActiveStep(0));
    // };

    function showButton() {
        if (activeStep === 0) {
            return (
                <>
                    <button className={cx('button')} onClick={handleSkip}>
                        Thanh Toán
                    </button>
                    <button className={cx('button', 'button-next')} onClick={handleNext}>
                        Tiếp Tục
                    </button>
                </>
            );
        } else if (activeStep === 1) {
            return (
                <>
                    <button className={cx('button')} onClick={handleBack}>
                        Trở về
                    </button>
                    <button className={cx('button', 'button-next')} onClick={handleNext}>
                        Tiếp tục
                    </button>
                </>
            );
        } else {
            return (
                <>
                    <button className={cx('button')} onClick={handleBack}>
                        Trở về
                    </button>
                    <button className={cx('button', 'button-next')} onClick={handleNext}>
                        Thanh Toán
                    </button>
                </>
            );
        }
    }

    function getTotalCostFood(array) {
        let totalCost = 0;
        array.forEach(function (value) {
            totalCost += value.food.cost * value.quantity;
        });
        return totalCost;
    }

    return (
        <div className={cx('container')}>
            {/* Breadcrumb */}
            {/* <div className={cx('breadcrumb')}>
                <div className={cx('item-wrapper')}>
                    <Link className={cx('breadcrumb-item')} to={config.routes.phim}>
                        Phim
                    </Link>
                </div>
                <div className={cx('item-wrapper')}>
                    <Link className={cx('breadcrumb-item')} to="#">
                        Phim đang chiếu
                    </Link>
                </div>
                <div className={cx('item-wrapper')}>
                    <Link className={cx('breadcrumb-item')} to="#">
                        Avatar: The way of water
                    </Link>
                </div>
                <div className={cx('item-wrapper')}>
                    <Link className={cx('breadcrumb-item')} to="#">
                        Đặt vé
                    </Link>
                </div>
            </div> */}
            <div className={cx('breadcrumb')}>
                <Box m={2}>
                    <Breadcrumbs
                        aria-label="breadcrumb"
                        separator={<NavigateNextIcon sx={{ fontSize: 25 }} />}
                        color="#fef7f7"
                    >
                        <Link underline="hover" fontSize={18} href={config.routes.phim}>
                            Phim
                        </Link>
                        <Typography fontSize={18}>Phim đang chiếu</Typography>
                        <Typography fontSize={18}>Avatar: The way of water</Typography>
                        <Typography fontSize={18}>Đặt vé</Typography>
                    </Breadcrumbs>
                </Box>
            </div>
            {/* Content */}
            <div className={cx('ticketBooking-content row')}>
                {activeStep !== 3 ? (
                    <>
                        {/* Ticket Booking Left */}
                        <div className={cx('ticketBooking-left col-8')}>
                            <div>
                                <BookingStepper movie={movie} />
                            </div>
                        </div>
                        {/* Ticket Booking Right */}
                        <div className={cx('ticketBooking-right col-4')}>
                            <div className={cx('ticket-info')}>
                                <div className={cx('ticket-info-top')}>
                                    <div className={cx('movie-title')}>{movie.name}</div>
                                    <div className={cx('cinema-name')}>L&Q Cineplex Quang Trung</div>
                                    <div className={cx('ticket-time')}>Suất chiếu: 20:00 | Thứ hai, 14/03/2023</div>
                                    <div className={cx('ticket-line')}></div>
                                </div>

                                <div className={cx('ticket-info-between')}>
                                    <div className={cx('ticket-text')}>Vé</div>
                                    <div className={cx('ticket-total')}>
                                        {selectedSeats.length} vé, {selectedSeats.length * 85000}đ
                                    </div>
                                </div>
                                {selectedSeats.map((seat, index) => {
                                    return <SeatCard key={index} seat={seat} price={movie.price} />;
                                })}
                                <div className={cx('ticket-info-between')}>
                                    <div className={cx('ticket-text')}>Bắp & Nước</div>
                                    <div className={cx('ticket-total')}>
                                        {selectedFoods.length} combo, {getTotalCostFood(selectedFoods)} đ
                                    </div>
                                </div>
                                {selectedFoods.map((foodItem, index) => {
                                    return <FoodCard key={index} foodItem={foodItem} />;
                                })}
                                <div className={cx('ticket-vouchers')}>
                                    {activeVourcher === 0 ? (
                                        <div className={cx('d-flex align-items-center')}>
                                            <Button onClick={handleShowInputVourcher}>
                                                <FontAwesomeIcon icon={faPlusSquare} fontSize="25" />
                                            </Button>
                                            <span>Vouchers | Mã giảm giá</span>
                                        </div>
                                    ) : (
                                        <div className={cx('d-flex justify-content-between')}>
                                            <TextField
                                                value={valueTextField}
                                                variant="outlined"
                                                onChange={(newValue) => {
                                                    setValueTextField(newValue.target.value);
                                                }}
                                                InputProps={{
                                                    endAdornment: (
                                                        <IconButton
                                                            onClick={handleClearTextField}
                                                            sx={{ visibility: valueTextField ? 'visible' : 'hidden' }}
                                                        >
                                                            <ClearIcon />
                                                        </IconButton>
                                                    ),
                                                }}
                                                placeholder="Nhập mã Vourcher"
                                                inputProps={{
                                                    style: { fontSize: 15, padding: 10 },
                                                }}
                                                sx={{
                                                    '& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root': {
                                                        padding: 0,
                                                    },
                                                    width: 250,
                                                }}
                                            />

                                            <button className={cx('button-vourcher')}>Áp dụng</button>
                                        </div>
                                    )}
                                </div>

                                <div className={cx('ticket-info-bottom')}>
                                    <div className={cx('line-bottom')}>
                                        <div className={cx('ticket-line')}></div>
                                    </div>
                                    <div className={cx('total-amount')}>
                                        <div>Tổng cộng:</div>
                                        <div>{selectedSeats.length * 85000 + getTotalCostFood(selectedFoods)} đ</div>
                                    </div>
                                    <div className={cx('group-button')}>{showButton()}</div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div>
                        <BookingStepper movie={movie} />
                    </div>
                )}
            </div>
            <div></div>
        </div>
    );
}

export default TicketBooking;
