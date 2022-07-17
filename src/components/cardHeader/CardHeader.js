import CardHeaderStyled from './CardHeader.styles';

const CardHeader = (props) => {
    return (
        <CardHeaderStyled>
            {props.children}
        </CardHeaderStyled>
    );
};

export default CardHeader;
