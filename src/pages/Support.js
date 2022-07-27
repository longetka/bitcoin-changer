import { 
    WrapperMain, 
    Title,
    Subtitle,
    SubtitleMail
} from '../components/index';
import supportData from '../data/supportData';

const Support = (props) => {
	return (
        <WrapperMain width='80%' flex column align='flex-start'>
            <Title text={supportData.title} textCenter width='100%'/>
            <Subtitle 
                padding='10px 0px'
                text={supportData.text} 
            />
            <SubtitleMail 
                padding='10px 0px'
                text={supportData.mail.text}
                address={supportData.mail.address}
            />
            <Subtitle 
                text={`${supportData.workingHours.text} с ${supportData.workingHours.from} до ${supportData.workingHours.to}` }
                padding='10px 0px'
            />
        </WrapperMain>
	);
};

export default Support;
