import React from 'react';
import './App.css';
import FullName from './Profile/FullName';
import Address from './Profile/Address';
import ProfilPhoto from './Profile/ProfilPhoto';

function App() {

  return (
    <div className="App">
    <ProfilPhoto/>
    <FullName />
    <Address/>
    </div>
  );
}

export default App;
