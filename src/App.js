
import {Routes,Route} from "react-router-dom";
import Homepage from "./pages/Home";
import EditPage from "./pages/Edit";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return(
    <div className="App">
      <h1>meme generator</h1>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/edit" element={<EditPage/>}/>
      </Routes>
    </div>
    
  );
};
export default App;