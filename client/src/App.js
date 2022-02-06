import {BrowserRouter,NavLink,Routes, Route} from 'react-router-dom';
import {lazy, Suspense} from 'react';


const TasksPage = lazy(()=>import('./pages/tasksPage'));


function App() {
  return (
    <BrowserRouter>
    <article>
      <h1>My Appi Header</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Tasks Page</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users Page</NavLink>
          </li>
        </ul>
      </nav>
      
      <Suspense fallback ='Loading'>
        <Routes >
          <Route path='/' element={<TasksPage />}/>
          <Route path='/users' element={<p>Users page</p>}/>
        </Routes>           
      </Suspense>
    </article>
    </BrowserRouter>
  );
}

export default App;
