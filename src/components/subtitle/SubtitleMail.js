import SubtitleStyled from './Subtitle.styles';

const SubtitleMail = (props) => {
    return (
        <SubtitleStyled>
            <span>
                {props.text}  
                <a href={`mailto: ${props.address}`}>{props.address}</a>
            </span>
        </SubtitleStyled>
    );
};

export default SubtitleMail;
