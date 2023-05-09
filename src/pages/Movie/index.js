import Card from '~/layouts/components/Card';
import PropTypes from 'prop-types';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const cardInfo = [
    {
        image: 'https://www.galaxycine.vn/media/2023/3/3/450x300_1677813532298.jpg',
        title: 'SIÊU LỪA SIÊU LẦY',
    },
    {
        image: 'https://cdn.galaxycine.vn/media/2023/3/6/450x300-1_1678072225628.jpg',
        title: 'CUỘC CHIẾN THỜI TIỀN SỬ',
    },
    {
        image: 'https://cdn.galaxycine.vn/media/2023/2/17/antman-3-5_1676600944892.jpg',
        title: 'NGƯỜI KIẾN VÀ CHIẾN BINH ONG',
    },
    {
        image: 'https://cdn.galaxycine.vn/media/2023/2/14/450x300_1676362573876.jpg            ',
        title: 'MISSING',
    },
    {
        image: 'https://cdn.galaxycine.vn/media/2023/2/17/450x300-chuot_1676619353890.jpg            ',
        title: 'CHUỘT NHÍ VÀ SỨ MỆNH CỦA ...',
        text: 'kkkk',
    },
    {
        image: 'https://www.galaxycine.vn/media/2023/3/3/450x300_1677813532298.jpg',
        title: 'Siêu lừa gặp siêu lầy',
    },
    {
        image: 'https://www.galaxycine.vn/media/2023/3/3/450x300_1677813532298.jpg',
        title: 'Siêu lừa gặp siêu lầy',
    },
    {
        image: 'https://www.galaxycine.vn/media/2023/3/3/450x300_1677813532298.jpg',
        title: 'Siêu lừa gặp siêu lầy',
        text: 'kkkk',
    },
    {
        image: 'https://www.galaxycine.vn/media/2023/3/3/450x300_1677813532298.jpg',
        title: 'SIÊU LỪA SIÊU LẦY',
    },
    {
        image: 'https://cdn.galaxycine.vn/media/2023/3/6/450x300-1_1678072225628.jpg',
        title: 'CUỘC CHIẾN THỜI TIỀN SỬ',
    },
    {
        image: 'https://cdn.galaxycine.vn/media/2023/2/17/antman-3-5_1676600944892.jpg',
        title: 'NGƯỜI KIẾN VÀ CHIẾN BINH ONG',
    },
    {
        image: 'https://cdn.galaxycine.vn/media/2023/2/14/450x300_1676362573876.jpg            ',
        title: 'MISSING',
    },
    {
        image: 'https://cdn.galaxycine.vn/media/2023/2/17/450x300-chuot_1676619353890.jpg            ',
        title: 'CHUỘT NHÍ VÀ SỨ MỆNH CỦA ...',
        text: 'kkkk',
    },
    {
        image: 'https://www.galaxycine.vn/media/2023/3/3/450x300_1677813532298.jpg',
        title: 'Siêu lừa gặp siêu lầy',
    },
    {
        image: 'https://www.galaxycine.vn/media/2023/3/3/450x300_1677813532298.jpg',
        title: 'Siêu lừa gặp siêu lầy',
    },
    {
        image: 'https://www.galaxycine.vn/media/2023/3/3/450x300_1677813532298.jpg',
        title: 'Siêu lừa gặp siêu lầy',
        text: 'kkkk',
    },
];
function Movie() {
    const [value, setValue] = useState(0);

    const handleChange = (_, newValue) => {
        setValue(newValue);
    };

    const renderListMovie = () => {
        return cardInfo.map((item, index) => {
            return <Card key={index} data={item} />;
        });
    };

    return (
        <div>
            <div className="w-full mt-4">
                <div className="w-full mx-14">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: '#C92522',
                            },
                        }}
                        sx={{
                            '& button': { color: '#fff', fontSize: '18px' },
                            '& button.Mui-selected': { color: '#C92522' },
                        }}
                    >
                        <Tab label="Phim đang chiếu" {...a11yProps(0)} />
                        <Tab label="Phim sắp chiếu" {...a11yProps(1)} />
                    </Tabs>
                </div>
                <TabPanel value={value} index={0}>
                    <div className="flex flex-col">
                        <div>{renderListMovie()}</div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Phim sắp chiếu
                </TabPanel>
            </div>
        </div>
    );
}

export default Movie;
