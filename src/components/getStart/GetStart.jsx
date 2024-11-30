import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UserContext from "../../context/UserContext";
import Result from "../result/Result";
function GetStart() {
  const [userName, setUserName] = useState("Sergio");
  const navigate = useNavigate();
  function submitForm(e) {
    e.preventDefault();
    navigate("/questions", { state: { userName } });
  }

  return (
    <div>
      <h1>GetStart</h1>
      <form onSubmit={(e) => submitForm(e)}>
        <label htmlFor="name">Nombre: </label>
        <input
          type="text"
          id="name"
          placeholder="Escribe tu nombre"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>

      {/* <UserContext.Provider value={{ userName }}>
        <Result />
      </UserContext.Provider> */}
    </div>
  );
}

export default GetStart;
