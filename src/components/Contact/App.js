// import logo from './logo.svg';
import './App.css';
import './index.css';
import Nav from '../Navbar/Navbar'
import NewBody from './Component/newbody'
import Header from './Component/header'
import Timeline from './Component/timeline'
import Button from './Component/buttons'
import Foot from '../Footer/Footer'

function App() {
  return (
    <div classNam='app'>
      <Nav />
      <Header />
      <NewBody />
      <Timeline />
      <Button />
      <Foot />
    </div>
  );
}

export default App;
