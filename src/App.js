import HeaderNav from "./pages/HeaderNav";
import Home from "./pages/Home";
import NewQuiz from "./pages/NewQuiz"
import StartQuiz from "./pages/StartQuiz";
import Quiz from "./pages/Quiz";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App w-screen h-full">
      <Router>
        <HeaderNav />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ranked/setup' element={<NewQuiz />} />
          <Route path='/ranked/setup/:difficultyLevel' element={<StartQuiz />} />
          <Route path='/quiz' element={<Quiz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
