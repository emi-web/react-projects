import { useState } from "react";
import Texth2 from "./Texth2";

const Texth1 = () => {
  const [show, setShow] = useState(true);
  function handleShow() {
    setShow(!show);
  }
  return (
    <div>
      <button onClick={handleShow}>{show ? "hide" : "show"}</button>
      {show && <Texth2 />}
      <hr></hr>
    </div>
  );
};

export default Texth1;
