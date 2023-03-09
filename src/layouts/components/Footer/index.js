import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { BsFacebook, BsGithub, BsYoutube } from 'react-icons/bs';

import { FaMapMarkerAlt } from 'react-icons/fa';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <a href="/">
                        L&Q <br />
                        Cineplex
                    </a>
                </div>
                <div className={cx('row')}>
                    <div className={cx('col-4 ')}>
                        <p className="fw-bold text-white ">Giới thiệu</p>

                        <span className=" " onClick={'/'}>
                            <AiOutlineDoubleRight />
                            Về công ty
                        </span>
                        <br />
                        <span className=" " onClick={'/'}>
                            <AiOutlineDoubleRight />
                            Về quy chế
                        </span>
                        <br />
                        <span className="text-white " onClick={'/'}>
                            <AiOutlineDoubleRight />
                            Về chính sách bảo mật{' '}
                        </span>
                    </div>
                    <div className={cx('col-4 ')}>
                        <p className="fw-bold  text-white">Hỗ trợ</p>
                        <span className="text-white " onClick={'/'}>
                            <AiOutlineDoubleRight />
                            Đăng ký tài khoản
                        </span>
                        <br />
                        <span className="text-white " onClick={'/'}>
                            <AiOutlineDoubleRight />
                            Về rạp / Giá vé
                        </span>
                    </div>
                    <div className={cx('col-4 ')}>
                        <p className="fw-bold text-white">Kết nối</p>

                        <span className="h5" href="/" style={{ fontSize: '50px', color: '#0080ff' }}>
                            <BsFacebook />
                        </span>
                        <span className=" " href="/" style={{ fontSize: '50px', color: '#ffffff' }}>
                            <BsGithub />
                        </span>
                        <span className="text-danger" href="/" style={{ fontSize: '50px' }}>
                            <BsYoutube />
                        </span>
                    </div>
                </div>
            </div>
            <div className={cx('line')}></div>
            <div className={cx('diachi')}>
                <a className="text-danger" href="/" style={{ fontSize: '20px' }}>
                    <FaMapMarkerAlt />
                </a>
                12 Nguyễn Văn Bảo - phường 4 - Gò Vấp - TP Hồ Chí Minh
            </div>
        </div>
    );
}

export default Footer;
