import { useState } from 'react';
import './App.css';

import Header from './Components/Header';
import Options from './Components/Options';
import Table from './Components/Table';

function App() {
  const [viewBasket, setViewBasket] = useState(false);
  return (
    <>
      <Header/>
      <Options setViewBasket={setViewBasket} viewBasket={viewBasket}/>
      <Table setViewBasket={setViewBasket} viewBasket={viewBasket}/>
    </>
  );
}

export default App;
