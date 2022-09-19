import QuizContainer from "./components/QuizContainer";
import "./index.css";

function App() {
  return (
    <div className="flex flex-row min-h-screen ">
      <div className="flex justify-center items-center w-full">
        <QuizContainer />
      </div>
    </div>
  );
}

export default App;
