import { Picture, ListItem, InputRadio } from '../index';
import OptionStyled from './Option.styles';

const Option = (props) => {
    return (
        <ListItem>
            <InputRadio 
                type='radio' 
                value={props.text} 
                name={props.name}
                id={`${props.for}${props.name}`}
                mode={props.mode}
            />
        <OptionStyled 
            htmlFor={`${props.for}${props.name}`}
            gap='15px'
        >
                <Picture 
                    src={props.src} 
                    alt={props.alt}
                />
                <span>{props.text}</span>
            </OptionStyled>
        </ListItem>
    );
};

export default Option;
