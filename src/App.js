import logo from './logo.svg';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={} />
      <Route path='' element={
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>
      }></Route>
    </Routes>
  );
}

export default App;
