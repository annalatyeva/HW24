import './WordCard.css';

import KnowButton from './KnowButton';
import EditWordButton from './EditWordButton';
import DontKnowButton from './DontKnowButton';


function WordCard () {
    return (
    <div className='WordCardConteiner'>
        <div className="word-card">
            <div className='word-type'><a href="#">conjunction</a></div>
            <div className='word-style'>although</div>
            <div className='transcription-style'>[ɔːlˈðəʊ]</div>
            <div>несмотря на то что</div>
        </div>
        <div className='button-conteiner'>
            <KnowButton></KnowButton>
            <EditWordButton></EditWordButton>
            <DontKnowButton></DontKnowButton>
        </div>
    </div>
    );
}

export default WordCard;