import { Outlet } from 'react-router-dom';

import { HomePage } from './components/HomePage';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
