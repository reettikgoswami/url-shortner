import React from "react";

function InputBar(props) {
  const handleSubmit = () => {
    // console.log("mdvcbdvbj");
  };

  return (
    <div className="w-3/5 h-28 mx-auto flex items-center my-6">
      <div className="ui action input w-full">
        <input type="text" placeholder="Enter a Url to shorten" />
        <button className="ui button teal" onClick={handleSubmit}>
          Shorten!
        </button>
      </div>
    </div>
  );
}

export default InputBar;
