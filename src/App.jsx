import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthRouter } from './components/auth-router/AuthRouter'
import { Card } from './components/card/Card'
import { Game } from './views/Game'
import { Lobby } from './views/Lobby'
import { Login } from './views/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<AuthRouter><Lobby /></AuthRouter>} />
        <Route path="/game/:id" element={<AuthRouter> <Game /></AuthRouter>} />
				<Route path="/card" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
