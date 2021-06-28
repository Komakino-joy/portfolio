import './App.css';

import Header from './components/header/header.component';
import Homepage from './pages/homepage.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      
      <Footer />
    </div>
  );
}

export default App;
