import { 
    Wrapper, 
    Card, 
    Title, 
    Subtitle, 
    ReceiptLabel,
    Picture,
    Input,
    CountDown,
    Button
} from '../components/index';
import bankIcon from '../assets/images/icons/sber-icon.png';
import cryptoCurrencyIcon from '../assets/images/icons/btc-icon.png';
import qrcodeIcon from '../assets/images/pic/qrcode.png';

const PayConfirm = () => {
    return (
        <Wrapper>
            <Card flex column justify='center80%' align='center'>
                <Title 
                    text='Оплата заявки № 280522' 
                    padding='18px 0px 25px 0px' 
                />
                <Subtitle 
                    text='Вы производите обмен:' 
                    padding='0px 0px 25px 0px'
                />
                <Wrapper flex width='90%'>
                    <ReceiptLabel width='70%' row align='center'>
                        <Picture src={bankIcon} alt='sber-icon' />
                        <Subtitle text='Сбербанк' />
                        <Input placeholder='1000' disabled width='90%' />
                    </ReceiptLabel>
                    <ReceiptLabel width='70%' row align='center'>
                        <Picture src={cryptoCurrencyIcon} alt='bitcoin-icon' />
                        <Subtitle text='Bitcoin' />
                        <Input placeholder='0,0002378' disabled width='90%' />
                    </ReceiptLabel>
                </Wrapper>
                <Wrapper width='90%' flex justify='stretch'>
                    <Wrapper width='100%' >
                        <ReceiptLabel width='100%' column align='baseline'>
                            <Subtitle 
                                text='Реквизиты для оплаты:' 
                                padding='0px 0px 20px 0px'
                            />
                            <Subtitle text='№ карты' />
                            <Input placeholder='2200 0000 4000 1000' disabled width='90%'/>
                        </ReceiptLabel>
                        <ReceiptLabel>
                            <Subtitle text='Сумма:' />
                            <Input placeholder='1000' disabled width='90%' />
                        </ReceiptLabel>
                    </Wrapper>
                    <ReceiptLabel width='100%' column >
                        <Subtitle 
                            text='QR-код (адрес криптовалюты)' 
                            padding='0px 0px 20px 0px'
                        />
                        <Picture 
                            src={qrcodeIcon} 
                            alt='qrcode' 
                            setWidth='160px'
                            setHeight='160px'
                        />
                    </ReceiptLabel>
                </Wrapper>
                <CountDown countDownTimestampMs='3600000' />
                <Button 
                    name='Обменять' 
                    margin='10px 0px 25px 0px'
                    padding='10px 57px'
                />
            </Card>
        </Wrapper>
    );
};

export default PayConfirm;
