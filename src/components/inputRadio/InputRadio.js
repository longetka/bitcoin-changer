import InputRadioStyled from './InputRadio.styles';

const InputRadio = (props) => {

    return (
        <InputRadioStyled
            id={props.id}
            type={props.type}
            value={props.value}
            name={props.name}
            mode={props.mode}
        />
    );
};

export default InputRadio;
