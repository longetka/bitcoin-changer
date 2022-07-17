import { useState, useEffect } from 'react';
import CountDownStyled from './CountDown.styles';
import { getRemainingTimeUntilMsTimestamp } from './utils/CountDownUtils';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00'
};

const CountDown = ({countDownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countDownTimestampMs);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [countDownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    };

    return (
        <CountDownStyled>
            {remainingTime.minutes} : {remainingTime.seconds}
        </CountDownStyled>
    );
};

export default CountDown;
