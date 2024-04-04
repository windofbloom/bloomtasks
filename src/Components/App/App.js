import { AppUI } from '../App/AppUI'
import React from 'react';
import { TodoProvider } from '../TodoContext/Context';


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;

