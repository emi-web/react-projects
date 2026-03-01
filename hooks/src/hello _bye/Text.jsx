import { useState } from "react";

const Text = () => {
  const [show, setShow] = useState(true);
  function handleShow() {
    setShow(!show);
  }
  return (
    <div>
      <button onClick={handleShow}>Hello/Good bye</button>
      {show === true ? (
        <h2>Hello! Welcome</h2>
      ) : (
        <h2>Good bye !! have a good day</h2>
      )}
    </div>
  );
};
<br></br>;
export default Text;
