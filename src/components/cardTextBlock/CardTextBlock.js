import CardTextBlockStyled from "./CardTextBlock.styles";

const CardTextBlock = (props) => {
    return (
        <CardTextBlockStyled>
            {props.children}
        </CardTextBlockStyled>
    );
};

export default CardTextBlock;
