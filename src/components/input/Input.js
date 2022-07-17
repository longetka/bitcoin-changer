import InputStyled from './Input.styles';

const Input = (props) => {
    return (
        <InputStyled 
            type={props.type}
            width={props.width}
            placeholder={props.placeholder}  
            value={props.value}
            name={props.name}
            disabled={props.disabled ? true : false}
            mode={props.mode}
        />
    );
};

export default Input;
