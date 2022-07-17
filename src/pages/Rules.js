import { 
    Card, 
    Title, 
    Container, 
    Wrapper, 
    List,
    ListItem
} from '../components/index';
import rulesData from '../data/rulesData';

const Rules = () => {
    const renderRules = rulesData.map((item, index) => {
        return <ListItem key={index} padding='20px'>{item}</ListItem>
    });
    return (
        <Container>
            <Wrapper width='100%'>
                <Card
                    width='100%'
                    height='580px'
                    flex
                    column
                >
                    <Title 
                        text='Правила обмена' 
                        textCenter 
                        padding='0px 0px 20px 0px'
                    />
                    <List 
                        mode='card' 
                        type='none' 
                        flex 
                        column 
                        bg='#FFFFFF' 
                        borderR='10px'
                    >
                        {renderRules}
                    </List>
                </Card>
            </Wrapper>
        </Container>
    );
};

export default Rules;
