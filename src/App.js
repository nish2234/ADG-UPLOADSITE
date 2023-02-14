import './App.css';
import {Routes , Route} from "react-router-dom";
import LoginSignup from './component/LoginSignup';
import TableView from './component/TableView';
function App() {
  return (
    <div className="cont">
      <Routes>
        <Route path='/' element = {<LoginSignup/>}/>
        <Route path='/home' element = {<TableView/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
