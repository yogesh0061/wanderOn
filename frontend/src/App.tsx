import React, { useEffect } from "react";
import LoginPage from "./pages/LoginPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import WelcomePage from "./pages/WelcomePage";
import { Protected } from "./components/Protected";
import { useDispatch } from "react-redux";


function App() {
  const dispatch = useDispatch()
  
//   useEffect(() => {
//     // Dispatch an action to fetch data when the component mounts
//     dispatch(checkLogi);
// }, [dispatch]);
  return (
    <div className="App">
      

      <Router>
       
        <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signUp" element={<SignupPage />} />
        <Route path="/Welcome" element={<Protected><WelcomePage /></Protected>} />

        </Routes>

      </Router>
    </div>
  );
}
export default App;


