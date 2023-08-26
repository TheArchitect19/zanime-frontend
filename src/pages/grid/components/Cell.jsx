import React from 'react';
import './Cell.css'


function Cell({ id, imgsrc }) {
  let sizeClass;
  let size;
  if(id%3===0){
    size='small';
  }
  else if(id%3===1){
    size='medium';
  }
  else if(id%3===2){
    size='large';
  }
  // if (size === 'small') {
  //   sizeClass = 'h-26';
  // } else if (size === 'medium') {
  //   sizeClass = 'h-33';
  // } else if (size === 'large') {
  //   sizeClass = 'h-45';
  // }
  console.log(id);
  return (
    <div className={`pin ${size}`}>
      
      <img className="mainPic" src={imgsrc}/>
    </div>
  );
}

export default Cell;
