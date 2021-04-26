import logo from './logo.svg';
import './App.css';
import Weather from "./Weather";
import Loader from "react-loader-spinner";

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Weather city="London" />
       <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
}

export default App;
