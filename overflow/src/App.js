import comments from "./components/commentData";
import Card from "./components/Card";

function App() {
  return (
    <div>
      {comments.map((comment, index) => (
        <Card key={index} commentObject={comment} />
      ))}
    </div>
  );
}

export default App;
