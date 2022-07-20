import WrapperMainStyles from './WrapperMain.styles';

const WrapperMain = (props) => {
    return (
        <WrapperMainStyles
            flex={props.flex}
            column={props.column}
            wrap={props.wrap}
            justify={props.justify}
            align={props.align}
            gap={props.gap}
            mt={props.mt}
            mb={props.mb}
        >{props.children}</WrapperMainStyles>
    )
}

export default WrapperMain;
