import './WordCard.css';

import {useState} from 'react';

import KnowButton from './KnowButton';
import EditWordButton from './EditWordButton';
import DontKnowButton from './DontKnowButton';


function WordCard () {
    let [translated, setIsEdit] = useState(false);
    const showTranslate = () => {
        setIsEdit(!translated);
    };


    return (
    <div className='WordCardConteiner'>
        <div className="word-card">
            <div className='word-type'><a href="#">conjunction</a></div>
            <div className='word-style'>although</div>
            <div className='transcription-style'>[ɔːlˈðəʊ]</div>
            {translated 
            ? <div className='translate-style'>несмотря на то что</div>
            : <button className='show-translate' onClick={showTranslate}>Показать перевод</button>}
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