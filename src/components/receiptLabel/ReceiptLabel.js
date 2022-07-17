import ReceiptLabelStyled from "./ReceiptLabel.styles";

const ReceiptLabel = (props) => {
    return (
        <ReceiptLabelStyled
            width={props.width}
            column={props.column}
            align={props.align}
        >
            {props.children}
        </ReceiptLabelStyled>
    );
};

export default ReceiptLabel;
