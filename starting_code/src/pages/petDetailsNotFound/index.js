import { useNavigate } from "react-router-dom";

const PetDetailsNotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <main className="page">
      <h3>404: Who let the dogs out?</h3>
      <p>
        Sorry, but the details for this pet have not been uploaded by the
        shelter yet. Check back later!
      </p>

      <div className="actions-container">
        <p style={{ color: "red" }}>DEBUG: llegué aquí</p>
        <button className="button" onClick={goHome}>
          Go Home
        </button>
      </div>

      <img
        src="https://i.chzbgr.com/full/8362031616/h9EB970C5/weve-lost-our-corgination"
        alt="Lost dog"
        style={{ maxWidth: "100%", maxHeight: 300, height: "auto" }}
      />
    </main>
  );
};

export default PetDetailsNotFound;
