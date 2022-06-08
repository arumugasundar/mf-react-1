import { useState, useEffect } from 'react';
import NxWelcome from './nx-welcome';
import { Account } from '@mf-react-1/shared-data-access';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';


export function App() {
  const [name,setName] = useState<string>(Account.name);

  // useEffect(() => {
  //   setName(() => {
  //     Account.name = 'Everyone';
  //     return Account.name;
  //   })
  // },[]);

  return (
    <>
      <NxWelcome title={name} />
      <div />
    </>
  );
}

export default App;
