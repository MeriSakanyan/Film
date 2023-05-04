import './App.css';
import  Layout  from './components/Layout/Layout'
import {Routes, Route} from 'react-router-dom'
import MoviesList from './components/Main/MoviesList/MoviesList';
import UniquePage from './components/UniquePage/UniquePage';

function App() {

  return (
   <Layout>
    <Routes>
      <Route path='/' element={<MoviesList />}/>
      <Route path='/movie/:id' element={<UniquePage />}/>
    </Routes>
   </Layout>
  );
}

export default App;



