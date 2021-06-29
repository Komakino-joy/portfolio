import './App.css';

import Header from './components/header/header.component';
import Homepage from './pages/homepage.component';
import LogoCloud from './components/logo-cloud/logo-cloud.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <LogoCloud/>
    </div>
  );
}

export default App;
