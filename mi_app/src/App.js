import { Users } from "./components/users/Users";
import { Cards } from "./components/card/Card";
import { Table } from "./components/Table/Table";

function App() {
  return (
    <div className="App">
      <Users nombre="emiliano" edad={31} nacionalidad="Uruguaya" />
      <Cards />
      <Table />
    </div>
  );
}

export default App;
