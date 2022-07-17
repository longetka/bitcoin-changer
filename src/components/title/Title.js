import TitleStyled from './Title.styles';

const Title = (props) => {
    return (
        <TitleStyled padding={props.padding} textCenter={props.textCenter}>
            {props.text}
        </TitleStyled>
    );
};

export default Title;
