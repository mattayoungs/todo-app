import React from "react";

function DetailsModal(props) {
  return (
    <div className="modal-bgskrim">
      <div className="modal-card">
        <label htmlFor="">Change Task Title</label>
        <input type="text" placeholder={props.task.title} onChange={} />
        <label htmlFor="">Add Description</label>
        <input type="text" name="" id="" onChange={} />
        <button onClick={}>Delete Task</button>
        <button onClick={}>Update Task</button>
      </div>
    </div>
  );
}

export default DetailsModal;
