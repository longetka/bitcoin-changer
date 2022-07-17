import NoteStyled from './Note.styles';
import { Link } from 'react-router-dom';

const Note = (props) => {
    return (
        <NoteStyled>
            {props.text} <Link to={props.to}>{props.linkText}</Link>
        </NoteStyled>
    )
}

export default Note;
