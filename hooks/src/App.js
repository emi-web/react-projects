import "./App.css";
import "./counter/counter.jsx";
import Counter from "./counter/counter.jsx";
import Text from "./hello _bye/Text.jsx";
import Texth1 from "./Texts/Texth1.jsx";
import Texth2 from "./Texts/Texth2.jsx";

function App() {
  return (
    <div className="App">
      <Counter />
      <Text />
      <Texth1 />
      <Texth2 />
    </div>
  );
}

export default App;
