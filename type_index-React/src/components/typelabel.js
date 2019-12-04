import React from 'react';


// 属性标签|TypeLabel
function TypeLabel(props){
  return (
    <label className='TypeLabel'
      style={{background:props.color}}
      onClick={props.onClick}
      htmlFor={props.for}>
        {props.name}
    </label>
  );
}

export default TypeLabel;