import CardStyled from './Card.styles';

const Card = (props) => {
    return (
        <CardStyled 
            width={props.width} 
            height={props.height}
            flex={props.flex} 
            column={props.column}
            justify={props.justify}
            align={props.align}
            mode={props.mode}
        >
            {props.children}
        </CardStyled>
    )
};

export default Card;
