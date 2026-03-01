import React from "react";
import { useState } from "react";

function Component() {
  const [text, setText] = useState();
  const [update, setUpdate] = useState();

  const textOnChange = (event) => {
    setText(event.target.value);
  };
  const buttoOnClick = () => {
    setUpdate(text);
  };
  return (
    <div>
      <input type="text" value={text} onChange={textOnChange} />
      <button onClick={buttoOnClick}>Actualitation</button>
      <p>Text imput : {text}</p>
      <p>Text actualizied {update}</p>
    </div>
  );
}

export default Component;
