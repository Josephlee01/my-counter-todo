import React,{useState} from 'react';

const Say = () => {
  const [msg, setMsg] = useState("")
  const onClick = () => {
    setMsg("Welcome")
  }
  return (
    <div>
      <button onClick={onClick}>greeting</button>
      <h3>{msg}</h3>
    </div>
  );
};

export default Say;