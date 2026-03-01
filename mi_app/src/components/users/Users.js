import "./Users.css";

export const Users = ({ nombre, edad, nacionalidad }) => {
  return (
    <div>
      <h1>nombre:{nombre}</h1>
      <p>Edad: {edad}</p>
      <p>nacionalidad: {nacionalidad}</p>
      <hr />
    </div>
  );
};
