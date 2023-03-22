import classNames from 'classnames/bind';
import styles from './Slide.module.scss';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
const cx = classNames.bind(styles);

const spanStyle = {
    padding: '200px',
    color: '#000000',
};

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '500px',
};
const slideImages = [
    {
        url: 'https://www.galaxycine.vn/media/2023/2/17/1042x347_1676605190470.jpg',
    },
    {
        url: '	https://www.galaxycine.vn/media/2023/3/3/1042x347-1_1677813237498.jpg',
    },
    {
        url: '	https://www.galaxycine.vn/media/2023/3/1/1042x347_1677644344277.jpg',
    },
];

function Slidee() {
    return (
        <div className={cx('container_home ')}>
            <div className={cx('slide')}>
                <Slide>
                    {slideImages.map((slideImage, index) => (
                        <div key={index}>
                            <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
                                <span style={spanStyle}>{slideImage.caption}</span>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
        </div>
    );
}

export default Slidee;
