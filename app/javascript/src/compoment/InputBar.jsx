import React, { useState } from "react";

function InputBar({ handleSubmit }) {
  let [url, setUrl] = useState("");

  return (
    <div className="w-3/5 h-28 mx-auto flex items-center my-6">
      <div className="ui action input w-full">
        <input
          type="text"
          placeholder="Enter a Url to shorten"
          onChange={e => setUrl(e.target.value)}
        />
        <button className="ui button teal" onClick={() => handleSubmit(url)}>
          Shorten!
        </button>
      </div>
    </div>
  );
}

export default InputBar;
