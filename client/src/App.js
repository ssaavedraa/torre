import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Suspense, lazy} from 'react'

import './App.scss';
import Loading from './components/Loading/Loading.component';
import Footer from './components/Footer/Footer.component';

const Home = lazy(() => import('./components/Home/Home.component.jsx'))
const UserDetail = lazy(() => import('./components/UserDetail/UserDetail.component'))

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/user/:publicId' element={<UserDetail/>} />
            <Route exact path='/user/skills/:publicId'/>
          </Routes>
        </Suspense>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
