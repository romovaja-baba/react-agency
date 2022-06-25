
import './App.css';
import { productsData } from './state';

import Header from './components/header/Header';
import Content from './components/content/Content';

function App() {
  return (
    <div className="App">
      <div className='appHeader'>
        <Header />
      </div>
      <div className='appContent'>
        <Content productsData={productsData}/>
      </div>
    </div>
  );
}

export default App;
