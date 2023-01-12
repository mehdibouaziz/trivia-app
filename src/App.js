import HeaderNav from "./pages/HeaderNav";
import Home from "./pages/Home";
import NewQuiz from "./pages/NewQuiz"
import StartQuiz from "./pages/StartQuiz";
import Quiz from "./pages/Quiz";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Profile from "./pages/auth/Profile";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App w-screen h-full">
      <Router>
        <HeaderNav />
        <ToastContainer />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ranked/setup' element={<NewQuiz />} />
          <Route path='/ranked/setup/:difficultyLevel' element={<StartQuiz />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
