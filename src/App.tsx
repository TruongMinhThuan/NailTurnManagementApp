import React, { useEffect, useState } from 'react';
import AppBar from './AppBar';
import CommonTable from './components/tables/CommonTable';
import { EmployeeTurnScreen } from './screens/EmployeeTurn';

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

  console.log('====================================');
  console.log('asda');
  console.log('====================================');
  return (
    <div className="flex flex-col h-screen">
      {window.Main && (
        <div className="flex-none">
          <AppBar />
        </div>
      )}
      <EmployeeTurnScreen />
    </div>
  );
}

export default App;
