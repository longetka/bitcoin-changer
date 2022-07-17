import ContainerStyle from './Container.styles';

const Container = (props) => {
    return (
        <ContainerStyle height={props.height} padding={props.padding}>
            {props.children}
        </ContainerStyle>
    );
};

export default Container;
