let deleteButton = require("../../../assets/delete-button.png")

function DeleteButton() {
    return (
      <button className="delete-button">
        <img src={deleteButton} alt="" />
      </button>
    );
  }
  
  export default DeleteButton;