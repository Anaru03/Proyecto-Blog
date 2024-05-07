import './styles/App.css'
import { TokenProvider } from '@hooks/useToken'
import { NavigationProvider } from '@hooks/useNavigate'
import Router from './router'
import React, { useState, useEffect } from 'react';

function App() {

  return (
    <TokenProvider>
      <NavigationProvider>
        <Router />
      </NavigationProvider>
    </TokenProvider>
  );
}

export default App;