import KhachHangService from '~/services/khachHangService';
import { CinemaContext } from './Context';
import { useEffect, useState } from 'react';

function Provider({ children }) {
    const [user, setUser] = useState(null);
    const [dsphim, setdsphim] = useState([]);
    const [dsRap, setDsRap] = useState([]);
    const [dsPhongChieu, setDsPhongChieu] = useState([]);
    const [dsLichChieu, setDsLichChieu] = useState([]);
    const [activeStep, setActiveStep] = useState(0);

    const [dsDichVu, setDsDichVu] = useState([]);
    const [selectedDichVu, setSelectedDichVu] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);

    const [openModalDangKy, setOpenModalDangKy] = useState(false);
    const [openModalDangNhap, setOpenModalDangNhap] = useState(false);
    const [openModalForgetPass, setOpenModalForgetPass] = useState(false);

    // Get User Profile
    useEffect(() => {
        const fetchApi = async () => {
            const user = JSON.parse(localStorage.getItem('user'));
            const res = await KhachHangService.getUser(user && user.email);
            setUser(res);
        };
        fetchApi();
    }, []);

    return (
        <CinemaContext.Provider
            value={{
                user,
                dsphim,
                setdsphim,
                dsRap,
                setDsRap,
                dsPhongChieu,
                setDsPhongChieu,
                dsLichChieu,
                setDsLichChieu,
                dsDichVu,
                setDsDichVu,

                selectedSeats,
                setSelectedSeats,
                activeStep,
                setActiveStep,
                selectedDichVu,
                setSelectedDichVu,

                openModalDangKy,
                setOpenModalDangKy,
                openModalDangNhap,
                setOpenModalDangNhap,
                openModalForgetPass,
                setOpenModalForgetPass,
            }}
        >
            {children}
        </CinemaContext.Provider>
    );
}

export default Provider;
