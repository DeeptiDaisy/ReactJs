import logo from './logo.svg';
import './App.css';

// Component
import Card from "./components/Card";


function App() {
  return (
    <div className="App">
    <Card price = "499" imgUrl="https://rukminim1.flixcart.com/image/200/200/ktop5e80/tablet/x/9/o/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70" btntext="submit"/>

    <Card price ="900" imgUrl="https://rukminim1.flixcart.com/image/200/200/kyhlfgw0/smartwatch/9/7/j/-original-imagaptbtq6ukjms.jpeg?q=70"
     btntext="Buy"/>
    </div>
  );
}

export default App;
