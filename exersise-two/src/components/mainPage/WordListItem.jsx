import {useState} from 'react';

let editButton = require("../../assets/edit-button.png");
let deleteButton = require("../../assets/delete-button.png")
let saveButton = require("../../assets/save-button.png");
let cancelButton = require("../../assets/cancel-button.png");


function WordListItem(props) {
  const {english, transcription, russian} = props;
  let [isEdit, setIsEdit] = useState(false);
    const changeEdit = () => {
      setIsEdit(!isEdit);
    };

    return (
      <>
      {isEdit 
      ? <tr className="input-tr">
      <td><input type="text" defaultValue={english}/></td>
      <td><input type="text" defaultValue={transcription}/></td>
      <td><input type="text" defaultValue={russian}/></td>
      <td>
        <button className="save-button">
          <img src={saveButton} alt="" />
        </button>
        <button className="cancel-button" onClick={changeEdit}>
          <img src={cancelButton} alt="" />
        </button>
        </td>
    </tr>
    : <tr>
    <td>{english}</td>
    <td>[{transcription}]</td>
    <td>{russian}</td>
    <td>
      <button className="edit-button" onClick={changeEdit}>
        <img src={editButton} alt="" />
      </button>
      <button className="delete-button">
        <img src={deleteButton} alt="" />
      </button>
      </td>
  </tr>}
    </>
    );
  }

  export default WordListItem;