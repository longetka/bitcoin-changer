import PictureStyle from './Picture.styles';

const Picture = (props) => {
    return (
        <PictureStyle 
            src={props.src} 
            alt={props.alt} 
            width={props.setWidth}
            height={props.setHeight}
            align={props.align}
            zIndex={props.zIndex}
            margin={props.margin}
        />
    );
};

export default Picture;
