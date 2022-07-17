import SubtitleStyled from './Subtitle.styles';

const Subtitle = (props) => {
    return (
        <SubtitleStyled padding={props.padding}>
            {props.text}
        </SubtitleStyled>
    );
};

export default Subtitle;
