import './App.css';
import  Layout  from './components/Layout/Layout'
import {Routes, Route} from 'react-router-dom'
import MoviesList from './components/Main/MoviesList/MoviesList';
import UniquePage from './components/UniquePage/UniquePage';
import Search from './components/Search/Search';
import { Suspense } from 'react';
import 'antd/dist/reset.css';
import Loading from './Loading/Loading';

function App() {

  return (
    <Suspense fallback={<Loading />}>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<MoviesList />}/>
        <Route path='/movie/:id' element={<UniquePage />}/>
      </Route>
      <Route path='/' element={<Layout hasSidebar={false}/>}>
        <Route path='/search/:searchText' name="search" element={<Search />} />
      </Route>

      {/* <Route path='/search' element={<Search />} /> */}
      {/* <Route path='/movie/:id' element={<Search />}/> */}
    </Routes>
    </Suspense>
  );
}

export default App;



