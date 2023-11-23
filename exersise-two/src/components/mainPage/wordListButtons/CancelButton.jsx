let cancelButton = require("../../../assets/cancel-button.png")

function CancelButton() {
    return (
      <button className="cancel-button">
        <img src={cancelButton} alt="" />
      </button>
    );
  }
  
  export default CancelButton;