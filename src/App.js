import React from 'react'
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store';
import CakeContainer from './component/CakeContainer';
import HooksCakeContainer from './component/HooksCakeContainer';
import IceCreamContainer from './component/IceCreamContainer';
import NewCakeContainer from './component/NewCakeContainer';
import ItemContainer from './component/ItemContainer';
import UserContainer from './component/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        {/*
        <ItemContainer cake />
        <ItemContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
        */}
      </div>
    </Provider>
  );
}

export default App;
