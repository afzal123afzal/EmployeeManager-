
// import './App.css';
import Nav from './components/Admin/Nav';
import ClubTable from './components/Admin/EmployeeTable';
import Admin from './pages/Admin';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Admin/>
      <ClubTable/>
    </div>
  );
}

export default App;
