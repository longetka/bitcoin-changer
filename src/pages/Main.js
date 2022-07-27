import { 
    Container, 
    Wrapper, 
    Card, 
    Title, 
    Input, 
    Select,
    Picture,
    Note,
    Button
} from '../components/index';
import sentOptions from '../data/sentOptions'; 
import receiveOptions from '../data/receiveOptions';
import iconChange from '../assets/images/icons/icon-change.png';

const Main = () => {
    return (
        <Container>
            <Wrapper width="100%" flex mode='container' >
                <Card 
                    width='33%'
                    height='580px'
                    flex
                    column
                    mode='card'
                >
                    <Title text='Отдаете'/>
                    <Input placeholder="Введите сумму" />
                    <Select options={sentOptions} />
                </Card>
                <Card
                    width='33%'
                    height='580px'
                    flex
                    column
                    mode='card'
                >
                    <Title text='Получаете' />
                    <Input placeholder='000' disabled />
                    <Select options={receiveOptions} />
                </Card>
                <Card 
                    width='33%' 
                    flex 
                    column 
                    height='580px'
                    mode='card'
                >
                    <Title text='Ввод данных' />
                    <Input placeholder='' disabled />
                    <Picture
                        src={iconChange}
                        alt='change'
                        setWidth='35px'
                        setHeight='35px'
                        align='center'
                        zIndex='1'
                        margin='-30px 0px'
                    />
                    <Input placeholder='' disabled mode='bottom'/>
                    <Input placeholder='Ф.И.О. владельца карты' mode='column'/>
                    <Input placeholder='Номер карты Сбербанка' mode='column'/>
                    <Input placeholder="Кошелек QIWI '+7900...'" mode='column'/>
                    <Input placeholder='Email' mode='column'/>
                    <Note 
                        text={`Нажимая на кнопку "Перейти к оплате" я принимаю`}
                        to='/rules'
                        linkText='правила обмена'
                    />
                    <Button 
                        name='Перейти к оплате' 
                        margin='20px 0px' 
                        padding='12px 50px'
                    />
                </Card>
            </Wrapper>
        </Container>
    )
};

export default Main;
