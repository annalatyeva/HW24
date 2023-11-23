let saveButton = require("../../../assets/save-button.png")

function SaveButton() {
    return (
      <button className="save-button">
        <img src={saveButton} alt="" />
      </button>
    );
  }
  
  export default SaveButton;