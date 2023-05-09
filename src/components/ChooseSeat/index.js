import './styles.css';
import React, { useContext } from 'react';
import clsx from 'clsx';
import { CinemaContext } from '~/store/Context';

function ChooseSeat({ movie }) {
    const { selectedSeats, setSelectedSeats } = useContext(CinemaContext);

    return (
        <div className="container">
            <Cinema
                movie={movie}
                selectedSeats={selectedSeats}
                onSelectedSeatsChange={(selectedSeats) => setSelectedSeats(selectedSeats)}
            />

            <div className="line"></div>

            <ShowCase />

            <div className="info">
                Bạn đã chọn <span className="count">{selectedSeats.length}</span> ghế với tổng tiền là{' '}
                <span className="total">{selectedSeats.length * movie.price} vnd</span>
            </div>
        </div>
    );
}

function ShowCase() {
    return (
        <ul className="showCase">
            <li>
                <span className="seat" /> <div>Ghế trống</div>
            </li>
            <li>
                <span className="seat selected" /> <div>Ghế đang chọn</div>
            </li>
            <li>
                <span className="seat occupied" /> <div>Ghế đã bán</div>
            </li>
        </ul>
    );
}

function SeatLabel() {
    var A = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    var B = [1, 2, 3, 4, 5, 6, 7, 8];
    var labels = [];
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            let result = A[i] + B[j];
            labels.push(result);
        }
    }
    return labels;
}

const seats = Array.from({ length: 6 * 8 }, (_, i) => SeatLabel()[i]);

function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
    function handleSelectedState(seat) {
        const isSelected = selectedSeats.includes(seat);
        if (isSelected) {
            onSelectedSeatsChange(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
        } else {
            onSelectedSeatsChange([...selectedSeats, seat]);
        }
    }

    return (
        <div className="cinema">
            <div className="screen">Screen</div>

            <div className="seats">
                {seats.map((seat, index) => {
                    const isSelected = selectedSeats.includes(seat);
                    const isOccupied = movie.occupied.includes(seat);

                    return (
                        <span
                            tabIndex="0"
                            key={index}
                            className={clsx('seat', isSelected && 'selected', isOccupied && 'occupied')}
                            onClick={isOccupied ? null : () => handleSelectedState(seat)}
                            onKeyPress={
                                isOccupied
                                    ? null
                                    : (e) => {
                                          if (e.key === 'Enter') {
                                              handleSelectedState(seat);
                                          }
                                      }
                            }
                        >
                            <div className="label">{seat}</div>
                        </span>
                    );
                })}
            </div>
        </div>
    );
}

export default ChooseSeat;
