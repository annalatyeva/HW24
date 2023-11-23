import CancelButton from "./wordListButtons/CancelButton";
import DeleteButton from "./wordListButtons/DeleteButton";
import EditButton from "./wordListButtons/EditButton";
import SaveButton from "./wordListButtons/SaveButton";


function WordListItem(props) {
  const {english, transcription, russian, isEdit} = props;
    return (
      <>
      {isEdit 
      ? <tr className="input-tr">
      <td><input type="text" defaultValue={english}/></td>
      <td><input type="text" defaultValue={transcription}/></td>
      <td><input type="text" defaultValue={russian}/></td>
      <td>
        <SaveButton></SaveButton>
        <CancelButton></CancelButton>
        </td>
    </tr>
    : <tr>
    <td>{english}</td>
    <td>[{transcription}]</td>
    <td>{russian}</td>
    <td><EditButton></EditButton>
      <DeleteButton></DeleteButton></td>
  </tr>}
    </>
    );
  }

  export default WordListItem;