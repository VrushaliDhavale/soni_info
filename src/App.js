import logo from './logo.svg';


import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "./Components/Row"
// import Data from "./Data.json";
import Data from "./Data.json"


function App() {
  return (
    <div className="App">
      {Data.map(value=>{
        return <Row key={value.id} data={value}/>
      })

      }

</div>

   
 )
}

export default App;
