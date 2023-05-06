import React, { useEffect, useState } from 'react';
import AppBar from './AppBar';
import CommonTable from './components/tables/CommonTable';
import { EmployeeTurnScreen } from './screens/EmployeeTurn';
import { Provider } from 'react-redux';
import { store } from './store/store';
import MenuNavigation from './components/navbar/MenuNavigation';
import { RootRouter } from './routes';

function App() {
  console.log(window.ipcRenderer);

  const [isOpen, setOpen] = useState(false);
  const [isSent, setSent] = useState(false);
  const [fromMain, setFromMain] = useState<string | null>(null);


  // useEffect(() => {
  //   if (isSent && window.Main)
  //     window.Main.on('message', (message: string) => {
  //       setFromMain(message);
  //     });
  // }, [fromMain, isSent]);``
  // return 


  return (
    <Provider store={store}>
      <div className="flex flex-col h-screen">
        {window.Main && (
          <div className="flex-none">
            <AppBar />
          </div>
        )}
        {/* <MenuNavigation/>
        <EmployeeTurnScreen /> */}

        <RootRouter />
      </div>
    </Provider>
  );
}

export default App;
