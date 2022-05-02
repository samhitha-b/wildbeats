// import logo from './logo.svg';
import './App.css';
import './index.css';
import N from './Component/newbody'
import Hade from './Component/header'
import Time from './Component/timeline'
import Button from './Component/buttons'
import Nav from '../Navbar/Navbar'
import Foot from '../Footer/Footer'

function App() {
  return (
    <div classNam='app'>
      <Nav />
      <Hade />
      <N />
      <Time />
      <Button />
      <Foot />
    </div>
  );
}

export default App;
