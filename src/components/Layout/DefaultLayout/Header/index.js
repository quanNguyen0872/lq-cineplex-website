import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                {/* Nav */}
                {/* Search */}
                {/* Button Sign in - Sign up */}
            </div>
        </header>
    );
}

export default Header;
