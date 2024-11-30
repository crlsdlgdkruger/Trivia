import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { Link, useLocation } from "react-router-dom";
import GetStart from "../getStart/GetStart";

function Result() {
  const location = useLocation();
  const { userName, correctAnswer } = location.state || {};
  return (
    <div>
      <h1>Result</h1>
      <p>Felicidades, {userName}!</p>
      <p>Tu puntaje es: {correctAnswer}</p>
      <Link to="/">Nueva Partida</Link>
    </div>
  );
}

export default Result;
