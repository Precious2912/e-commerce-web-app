import { Routes, Route } from 'react-router-dom'
import Home from "./routes/home/home.component";
import SignUp from './routes/sign-up/sign-up.component';
import SignIn from './routes/sign-in/sign-in.component';
import Navigation from './routes/navbar/navbar.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path='checkout' element={<Checkout />}/>
      </Route>
    </Routes>
  );
};

export default App;
