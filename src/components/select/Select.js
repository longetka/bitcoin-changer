import { List, Option } from '../index';

const Select = (props) => {
    const renderOptions = props.options.map((item, index) => {
        return (
            <Option 
                for={index}
                mode={item.name}
                text={item.text} 
                alt={item.text}
                src={item.icon}
                name={item.name}
                key={index} 
            />
        )
    });

    return (
        <List mode='card' type="none" flex column bg='#FFFFFF' borderR='10px'>
            {renderOptions}
        </List>
    );
};

export default Select;
