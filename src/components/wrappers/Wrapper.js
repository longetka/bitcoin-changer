import WrapperStyles from './Wrapper.styles';

const Wrapper = (props) => {
    return (
        <WrapperStyles
            width={props.width}
            flex={props.flex}
            column={props.column}
            wrap={props.wrap}
            justify={props.justify}
            align={props.align}
            mode={props.mode}
            mt={props.mt}
            mb={props.mb}
        >{props.children}</WrapperStyles>
    )
}

export default Wrapper;
