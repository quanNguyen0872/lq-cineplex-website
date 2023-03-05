import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Menu, { MenuItem } from './Menu';
import { menuItems } from './Menu/menuItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';

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
                <div className={cx('logo')}>
                    <a href="/">
                        L&Q <br />
                        Cineplex
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
                {/* Button Sign in - Sign up */}
            </div>
        </header>
    );
}

export default Header;