import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Menu, { MenuItem } from './Menu';
import { menuItems } from './Menu/menuItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
import Button from '~/layouts/components/Button';
import logo from '~/layouts/asset/logo.png';
const cx = classNames.bind(styles);

function Header() {
    const [searchValue, setSearchValue] = useState('');
    const [setSearchResult] = useState([]);

    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx(' ')}>
                    <a href="/" className={cx('')}>
                        <img src={logo} className={cx('w-full h-[120px] object-cover rounded-md ml-5')} />
                    </a>
                </div>
                {/* Nav */}
                <div className={cx('nav')}>
                    <Menu>
                        {menuItems.map((menu, index) => {
                            return <MenuItem items={menu} key={index} />;
                        })}
                    </Menu>
                </div>
                {/* Search */}
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Tìm phim, diễn viên,..."
                        spellCheck={false}
                        onChange={handleChange}
                    />
                    {!!searchValue && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('sigin')}>
                    <div className={cx('flex mr-8')}>
                        <Button
                            className={cx(
                                'text-black  hover:bg-red-600  bg-lq-white w-36 h-16  text-2xl font-bold justify-center',
                            )}
                        >
                            Đăng ký
                        </Button>
                        <Button
                            className={cx(
                                'text-black  hover:bg-red-600  bg-lq-white w-36 h-16 text-2xl font-bold justify-center ',
                            )}
                        >
                            Đăng nhập
                        </Button>
                    </div>
                </div>
                {/* Button Sign in - Sign up */}
            </div>
        </header>
    );
}

export default Header;
