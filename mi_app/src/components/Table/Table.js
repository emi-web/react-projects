import "./Table.css";

export const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <br></br>
          <th>Edad</th>
          <br></br>
          <th>Pais</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>emiliano</td>
          <br></br>
          <td>31</td>
          <br></br>
          <td>New Zealand</td>
        </tr>
        <br></br>
        <tr>
          <td>Ana</td>
          <br></br>
          <td>25</td>
          <br></br>
          <td>Chile</td>
        </tr>
      </tbody>
    </table>
  );
};
