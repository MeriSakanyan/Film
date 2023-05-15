import React  from 'react';
import {Routes, Route} from 'react-router-dom'
import { Suspense } from 'react';
import 'antd/dist/reset.css';
import Loading from './components/Loading/Loading';

function App() {
  const Layout = React.lazy(() => import('./components/Layout/Layout'));
  const MoviesList = React.lazy(() => import('./components/Main/MoviesList/MoviesList'));
  const UniquePage = React.lazy(() => import('./components/UniquePage/UniquePage'));
  const Search = React.lazy(() => import('./components/Search/Search'));

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
    </Routes>
    </Suspense>
  );
}

export default App;



