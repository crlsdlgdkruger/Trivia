import "./App.css";
import { Route, Routes } from "react-router-dom";
import Questions from "./components/questions/Questions";
import GetStart from "./components/getStart/GetStart";
import Result from "./components/result/Result";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GetStart />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
