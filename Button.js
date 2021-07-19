import React from 'react'





function ButtonComponent(props) {
    return (
      <button className="button" onClick={props.handleClick}>
        {props.label}
      </button>
    );
   }

export default ButtonComponent;