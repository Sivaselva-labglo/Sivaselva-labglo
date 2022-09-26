import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PeopleList from './People';
import PeopleDetails from './PeopleDetail';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<PeopleList />} />
          <Route exact path='/peopledetails/:names/:id' element={<PeopleDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;  
