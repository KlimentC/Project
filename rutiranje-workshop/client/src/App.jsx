import GameCreate from "./components/game-create/GameCreate";
import GameList from "./components/game-list/GameList";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import GameDetails from "./components/gaming-details/GameDetails";
import { useState } from "react";
import AuthContext from "./context/authContext";
import * as authService from "./services/authService";
import Path from "./paths";
import Logout from "./components/logout/Logout";

function App() {
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem("accessToken");
    return {};
  });
  const navigate = useNavigate();

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);
    setAuth(result);
    localStorage.setItem("accessToken", result.accessToken);
    navigate(Path.Home);
  };

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(values.email, values.password);
    setAuth(result);
    localStorage.setItem("accessToken", result.accessToken);
    navigate(Path.Home);
  };
  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem("accessToken");
  };
  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    username: auth.username || auth.email,
    email: auth.email,
    isAuthenticated: !!auth.accessToken,
    logoutHandler,
  };

  return (
    <AuthContext.Provider value={values}>
      <div id="box">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<GameList />} />
          <Route path="/game/create" element={<GameCreate />} />
          <Route
            path="/login"
            element={<Login loginSubmitHandler={loginSubmitHandler} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/games/:gameId" element={<GameDetails />} />
          <Route path={Path.Logout} element={<Logout />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
