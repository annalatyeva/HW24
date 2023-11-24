import './WordList.css';
import {Words} from './Words.js'
import {useState} from 'react';

let editButton = require("../../assets/edit-button.png");
let deleteButton = require("../../assets/delete-button.png")
let saveButton = require("../../assets/save-button.png");
let cancelButton = require("../../assets/cancel-button.png");


function WordList() {
  const [words, setWords] = useState(Words);
  const [editedWords, setEditedWords] = useState([]);

  // Включение/ отключение режима редактирования слова
  function changeEdit(index) {
    const nextWords = words.map((word, i) => {
      if (i === index) {
        return {
          ...word,
          isEdit: !word.isEdit,
        };
      } else {
        return {
          ...word,
          isEdit: false,
        };
      }
    });
    setWords(nextWords);
    setEditedWords([]);
  }

  // Удаление слова
  const deleteWord = (index) => {
    setWords(words.filter((word, i) => i !== index));
  };

  // Редактирование слова
  function editWord(index) {
    const nextWords = words.map((word, i) => {
      if (i === index) {
        return {
          ...word,
          english: editedWords[index]?.english || word.english,
          transcription: editedWords[index]?.transcription || word.transcription,
          russian: editedWords[index]?.russian || word.russian,
          isEdit: false,
        };
      } else {
        return word;
      }
    });
    setWords(nextWords);
    setEditedWords([]);
  }
  const saveEditedWord = (index) => {
    editWord(index);
  };

  return (
    <table>
      <thead>
        <tr><th>Слово</th><th>Транскрипция</th><th>Перевод</th><th></th></tr>
      </thead>

      <tbody>
        {words.map((word, i) => 
          (<>
            {word.isEdit 
              ? <tr className="input-tr">
                <td>
                  <input
                    type="text"
                    value={editedWords[i]?.english || word.english}
                    onChange={(e) => {
                      const newEditedWords = [...editedWords];
                      newEditedWords[i] = {
                        ...newEditedWords[i],
                        english: e.target.value,
                      };
                      setEditedWords(newEditedWords);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editedWords[i]?.transcription || word.transcription}
                    onChange={(e) => {
                      const newEditedWords = [...editedWords];
                      newEditedWords[i] = {
                        ...newEditedWords[i],
                        transcription: e.target.value,
                      };
                      setEditedWords(newEditedWords);
                    }}
                  />
                  </td>
                <td>
                  <input
                    type="text"
                    value={editedWords[i]?.russian || word.russian}
                    onChange={(e) => {
                      const newEditedWords = [...editedWords];
                      newEditedWords[i] = {
                        ...newEditedWords[i],
                        russian: e.target.value,
                      };
                      setEditedWords(newEditedWords);
                    }}
                  />
                </td>
                <td>
                <button
                  className="save-button"
                  onClick={() => {
                    saveEditedWord(i);
                  }}
                >
                  <img src={saveButton} alt="" />
                </button>
                  <button className="cancel-button" onClick={() => {
                  changeEdit(i);}}>
                  <img src={cancelButton} alt="" />
                  </button>
                </td>
              </tr>
              : <tr>
                <td>{word.english}</td>
                <td>[{word.transcription}]</td>
                <td>{word.russian}</td>
                <td>
                  <button className="edit-button" onClick={() => {
                  changeEdit(i);}}>
                  <img src={editButton} alt="" />
                  </button>
                  <button className="delete-button" onClick={() => {
                  deleteWord(i);}}>
                  <img src={deleteButton} alt="" />
                  </button>
                </td>
              </tr>}
              </>)
          )}
      </tbody>

      <tfoot>
        <tr>
          <th colSpan="4">Количество слов: {words.length}</th>
        </tr>
      </tfoot>
    </table>
  );
}
  
export default WordList;