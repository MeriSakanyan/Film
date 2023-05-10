import './App.css';
import  Layout  from './components/Layout/Layout'
import {Routes, Route} from 'react-router-dom'
import MoviesList from './components/Main/MoviesList/MoviesList';
import UniquePage from './components/UniquePage/UniquePage';
import Search from './components/Search/Search';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<MoviesList />}/>
        <Route path='/movie/:id' element={<UniquePage />}/>
      </Route>
      <Route path='/' element={<Layout hasSidebar={false}/>}>
        <Route path='/search' name="search" element={<Search />} />
      </Route>

      {/* <Route path='/search' element={<Search />} /> */}
      {/* <Route path='/movie/:id' element={<Search />}/> */}
    </Routes>
  );
}

export default App;



