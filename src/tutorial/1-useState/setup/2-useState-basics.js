import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState('hello world'))
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler)

  const [text, setText] = useState('Random Title')

  const handleClick = () => {
    setText('hello world')
  }

  return (
    <>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>Change Title</button>
    </>
    );
};

export default UseStateBasics;
