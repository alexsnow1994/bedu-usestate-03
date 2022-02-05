import {BrowserRouter , Routes , Route} from 'react-router-dom'
import './App.css';
import CommentState from './Components/Context/Coments/CommentState';

import Exercise from './Components/Exercise';
import Home from './Components/Home';
import Layout from './Components/Layout';



function App() {
  return (
    <>
    
       <CommentState>
          <BrowserRouter>
                <Routes>
                  <Route path="/" element={ <Layout /> }>
                  {/* outlets jerarquicamente hijos de layout */}
                    <Route path="/" element={ <Home /> } />
                    <Route path="/ejercicio" element={ <Exercise /> } />
                    </Route>
                  </Routes>
            </BrowserRouter>
       </CommentState>
    
  </>
  );
}



export default App;
