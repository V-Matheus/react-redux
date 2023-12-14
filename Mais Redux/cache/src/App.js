import React from 'react';
import Photos from './Photos';

function App() {

  const [toggle,setTottle] = React.useState(true)

  return (
    <div >
      <button onClick={() => setTottle(!toggle)}>Toggle</button>
      {toggle && <Photos />}
    </div>
  );
}

export default App;
