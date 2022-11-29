import { Routes, Route } from 'react-router-dom'
import Home from "./routes/home/home.component";
import Login from './routes/login/login.component';
import Navigation from './routes/navbar/navbar.component';

const Shop = () => {
  return (
    <div>
      <h3>Shop Page</h3>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
