import './WordList.css';
import WordListItem from './WordListItem';
import {Words} from './Words.js'


function WordList() {
    return (
        <table>
          <thead>
            <tr><th>Слово</th><th>Транскрипция</th><th>Перевод</th><th></th></tr>
          </thead>
          <tbody>
            {Words.map((word) => {
              return <WordListItem 
              english={word.english}
              transcription={word.transcription}
              russian={word.russian}
              isEdit={word.isEdit}>
              </WordListItem>
            }
          )}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="4">Количество слов: {Words.length}</th>
            </tr>
          </tfoot>
        </table>
    );
  }
  
  export default WordList;