import Header from "./Components/Header"
import HomePage from "./Components/HomePage"
import SignUp from "./Components/SignUp"
import LogIn from "./Components/LogIn"
import Views from "./Components/ViewsPage"
import Add from "./Components/AddPost"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/LogIn" element={<LogIn/>}/>
          <Route path="/Views" element={<Views/>}/>
          <Route path="/Add" element={<Add/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
