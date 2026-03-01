import { useState } from "react";

const Texth2 = () => {
  const [text, setText] = useState(" ");
  const handleText = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleText} />
      <p>{text}</p>
      <h2>Any alergies?</h2>
      <hr></hr>
    </div>
  );
};

export default Texth2;
