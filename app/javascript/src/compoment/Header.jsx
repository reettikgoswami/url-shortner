import React from "react";

function Header(props) {
  return (
    <div className="bg-white h-20 flex items-center">
      <div className="w-3/5 mx-auto flex justify-between">
        <h2 className="ui header">
          <i aria-hidden="true" className="cut icon teal"></i>
          <div className="content">shoURLrt</div>
        </h2>
      </div>
    </div>
  );
}

export default Header;
