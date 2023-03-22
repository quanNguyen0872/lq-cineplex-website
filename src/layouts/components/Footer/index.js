import classNames from 'classnames/bind';

import { AiOutlineDoubleRight } from 'react-icons/ai';
import { BsFacebook, BsGithub, BsYoutube } from 'react-icons/bs';
import logo from '~/layouts/asset/logo.png';
import { FaMapMarkerAlt } from 'react-icons/fa';
const cx = classNames;

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('bg-[#0d0e13] flex')}>
                <div className={cx(' ')}>
                    <a href="/" className={cx('')}>
                        <img
                            src={logo}
                            className={cx('w-full h-[200px] object-cover rounded-md')}
                            alt="logo-cineplex"
                        />
                    </a>
                </div>
                <div className={cx('flex')}>
                    <div className={cx(' ')}>
                        <p className={cx('ml-20 pt-14 text-4xl text-white font-bold')}>Giới thiệu</p>

                        <a className={cx(' flex ml-32 pt-8')} href="/">
                            <AiOutlineDoubleRight />
                            Về công ty
                        </a>

                        <a className=" flex ml-32 " href="/">
                            <AiOutlineDoubleRight />
                            Về quy chế
                        </a>

                        <a className=" flex ml-32  " href="/">
                            <AiOutlineDoubleRight />
                            Về chính sách bảo mật{' '}
                        </a>
                    </div>
                    <div className={cx('ml-24')}>
                        <p className={cx('ml-20 pt-14 text-4xl text-white font-bold')}>Hỗ trợ</p>

                        <a className={cx(' flex ml-32 pt-8')} href="/">
                            <AiOutlineDoubleRight />
                            Đăng ký tài khoản
                        </a>

                        <a className=" flex ml-32 " href="/">
                            <AiOutlineDoubleRight />
                            Về rạp / Giá vé
                        </a>
                    </div>

                    <div className={cx('ml-24 ')}>
                        <p className={cx('ml-20 pt-14 text-4xl text-white font-bold')}>Giới thiệu</p>
                        <div className={cx('flex')}>
                            <a
                                className={cx(' flex ml-32 pt-8')}
                                href="/"
                                style={{ fontSize: '50px', color: '#0080ff' }}
                            >
                                <BsFacebook />
                            </a>

                            <a className=" ml-8 pt-8  color-[#0080ff]" href="/" style={{ fontSize: '50px' }}>
                                <BsGithub />
                            </a>

                            <a className={cx('ml-8 pt-8')} href="/" style={{ fontSize: '50px', color: ' #ff0000' }}>
                                <BsYoutube />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('w-full h-1 text-lq-white')}></div>
            <div className={cx('flex bg-[#0d0e13] h-16 pt-3 text-white ')}>
                <a className={cx('text-red-600')} href="/" style={{ fontSize: '24px', color: ' #ff0000' }}>
                    <FaMapMarkerAlt />
                </a>
                12 Nguyễn Văn Bảo - phường 4 - Gò Vấp - TP Hồ Chí Minh
            </div>
        </div>
    );
}

export default Footer;
