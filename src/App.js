import "./App.css";
import Calculator from "./component/Calculator";
import Inscription from "./component/Inscription";
import LanguageSelector from "./component/LanguageSelector";
import SignUpConfirmation from "./component/SignUpConfirmation";
import SignUpForm from "./component/SignUpForm";
import Users from "./component/Users";
import Counter from "./component/counter";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <Counter message="compteur (counter)" />
      <hr></hr>
      <Calculator />
      <hr></hr>
      <LanguageSelector />
      <hr></hr>
      <Inscription />
      <hr></hr> */}
      <Router>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/inscription" element={<SignUpForm />} />
          <Route path="/confirmation" element={<SignUpConfirmation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
