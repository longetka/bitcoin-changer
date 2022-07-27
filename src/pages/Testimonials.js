import { 
    Wrapper, 
    Card, 
    Title, 
    Picture, 
    CardHeader,
    CardTextBlock
} from '../components/index';
import userAvatar from '../assets/images/icons/user-testis-avatar.png';
import testisData from '../data/testisData';

const Testimonials = (props) => {
    const renderTestis = testisData.map((item, index) => {
        return (
            <Card 
                width='45%'
                flex
                column
                key={index}
            >
                <CardHeader>
                    <Picture src={userAvatar} alt='user avatar'/>
                    <Title text={item.userName}/>
                </CardHeader>
                <CardTextBlock>
                    <p>{item.text}</p>
                </CardTextBlock>
            </Card>

        )
    })
    return (
        <Wrapper 
            width='100%' 
            flex 
            wrap 
            justify='center'
            mode='container'
        >
            {renderTestis}
        </Wrapper>
    );
};

export default Testimonials;
