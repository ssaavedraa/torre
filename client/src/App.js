import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Suspense, lazy} from 'react'

import './App.scss';

const Home = lazy(() => import('./components/Home/Home.component.jsx'))

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/user/:publicId'/>
            <Route exact path='/user/skills/:publicId'/>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
