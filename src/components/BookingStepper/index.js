import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Stepper, StepLabel, Button, Step } from '@mui/material';
import { styled } from '@mui/material/styles';
import ChairIcon from '@mui/icons-material/Chair';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import PaymentIcon from '@mui/icons-material/Payment';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import ChooseSeat from '../ChooseSeat';
import ChooseFood from '../ChooseFood';
import { useStore, actions } from '~/store';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: '#C92522',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: '#C92522',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#615E5E',
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#615E5E',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        backgroundColor: '#C92522',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
        backgroundColor: '#C92522',
    }),
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <ChairIcon sx={{ fontSize: 25 }} />,
        2: <FastfoodIcon sx={{ fontSize: 25 }} />,
        3: <PaymentIcon sx={{ fontSize: 25 }} />,
        4: <ConfirmationNumberIcon sx={{ fontSize: 25 }} />,
    };

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};

const steps = ['Chọn ghế', 'Chọn bắp nước', 'Thanh Toán', 'Vé của bạn'];

function BookingStepper({ movie }) {
    const [state, dispath] = useStore();
    const { activeStep } = state;

    const handleReset = () => {
        dispath(actions.setActiveStep(0));
    };

    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <>
                        <ChooseSeat movie={movie} />
                    </>
                );
            case 1:
                return (
                    <>
                        <ChooseFood />
                    </>
                );
            case 2:
                return <>Thanh Toán</>;
            case 3:
                return <>Vé của bạn</>;
            default:
                return 'Unknown step';
        }
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                {steps.map((label, index) => {
                    const stepProps = {};

                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel StepIconComponent={ColorlibStepIcon}>
                                <Box className="labelStepper" sx={{ fontSize: 18, color: '#F4E5D7' }}>
                                    {label}
                                </Box>
                            </StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {/* Button */}
            {activeStep === steps.length - 1 ? (
                <React.Fragment>
                    <Box sx={{ mt: 5, mb: 1 }}></Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset} sx={{ fontSize: 18, color: '#C92522', border: 'solid' }}>
                            Trang chủ
                        </Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }} component={'span'}>
                        {getStepContent(activeStep)}
                    </Typography>
                </React.Fragment>
            )}
        </Box>
    );
}

export default BookingStepper;
