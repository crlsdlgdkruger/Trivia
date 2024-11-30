import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Questions() {
  const location = useLocation();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const { userName } = location.state || {};

  useEffect(() => {
    fetch("/data/questions.json")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error al cargar las preguntas:", error));
  }, []);

  useEffect(() => {
    // Verificar que las preguntas estén cargadas antes de evaluar la condición
    if (questions.length > 0 && currentQuestionIndex >= questions.length) {
      navigate("/result", { state: { userName, correctAnswer } });
    }
  }, [
    currentQuestionIndex,
    correctAnswer,
    questions.length,
    navigate,
    userName,
  ]);

  const submitAnswer = (e) => {
    e.preventDefault();
    const selectedOption = document.getElementById("options").value;

    if (selectedOption === questions[currentQuestionIndex].answer) {
      setCorrectAnswer((prev) => prev + 1);
    }

    setCurrentQuestionIndex((prev) => prev + 1);
  };

  if (questions.length === 0) {
    return <div>Cargando preguntas...</div>;
  }

  if (currentQuestionIndex >= questions.length) {
    return <div>Calculando resultado...</div>;
  }

  return (
    <div>
      <h1>Questions</h1>
      <h2>Pregunta: {questions[currentQuestionIndex].question}</h2>
      <form onSubmit={(e) => submitAnswer(e)}>
        <select name="options" id="options" required>
          <option selected disabled value="">
            Seleccione su respuesta
          </option>
          {questions[currentQuestionIndex]?.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button type="submit">Enviar Respuesta</button>
      </form>
    </div>
  );
}

export default Questions;
