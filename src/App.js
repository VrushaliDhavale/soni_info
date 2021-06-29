import logo from './logo.svg';
import First from "./Components/First";
import Data from "../src/Data.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css'

function App() {
  return (
    <div className="App">
   
    <div className="secation">
      <div className="container">
<div className="row">
         <div className="col-md-6">
        <img src='/images/flag.png'/>
           </div>
         <div className="col-md-6">
           <div className="country">
         {Data.map(value=>{
return (
  <div key={value.id}>
  <h4>{value.title}</h4>
  <p>{value.content}</p>
  </div>
)})}
</div>
</div>
</div>
 </div>
 </div>
    </div>
 );
}

export default App;
