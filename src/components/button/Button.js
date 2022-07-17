import ButtonStyled from './Button.styled';

const Button = (props) => {
    return (
        <ButtonStyled
            margin={props.margin}
            padding={props.padding}
        >
            {props.name}
        </ButtonStyled>
    );
};

export default Button;
