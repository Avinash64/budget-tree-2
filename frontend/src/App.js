import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      {/* <Home></Home> */}
      {/* <Register></Register> */}
      <Login></Login>
    </div>
  );
}

export default App;
