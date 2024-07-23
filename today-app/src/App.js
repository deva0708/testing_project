import logo from './logo.svg';
import './App.css';
import FormComponent from './FormComponent';
import FormComponentThree from './FormComponentThree';
import store from './Redux/store';
import Header from './Redux/header';
import Footer from './Redux/footer';
import Main from './Redux/main';

function App() {
  return (
    <div className="App">
     {/* <FormComponent/> */}
     <FormComponentThree/>
    </div>
  );
}

export default App;
