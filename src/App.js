import logo from './logo.svg';
import { useLayoutEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div className="grid">
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
}





export default App;
