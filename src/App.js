import logo from './logo.svg';
import { useLayoutEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import { BrowserRouter, Route, Link } from "react-router-dom";

const App = (props) => {



  return ( 
    <BrowserRouter>
      <div className="grid">
        <Header />
        <Sidebar />
        <div className='content'>
          {/* <Content /> */}
          {/* <Dialogs /> */}

          {/* <Route path='/content' component={Content} />
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Setting} /> */}

          <Route path='/content' 
            render={() => <Content 
              data={props.appState.content.postData} />} />
          <Route path='/dialogs' 
            render={() => <Dialogs 
              dialogsDat={props.appState.dialogs} 
              messageData={props.appState.dialogs.messageData} />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Setting />} />
        </div>
        
      </div>
    </BrowserRouter>
  );
}





export default App;
