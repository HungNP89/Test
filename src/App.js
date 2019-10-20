import React, { useState , useRef} from 'react';
import GoogleMap from './components/GoogleMap';
import {Switch , Route} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {useOnClickOutside} from './hooks';
import {theme} from './theme.js';
import {Sidebar,Config} from './components';
import FocusLock from 'react-focus-lock';

function App() {
  const [open , setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node , () => setOpen(false));

  return(
      <React.Fragment>
        <GoogleMap/>
        <ThemeProvider theme={theme}>
          <>
            <div ref={node}>
                <FocusLock disabled={!open}>
                    <Sidebar open={open} setOpen={setOpen} id={menuId}/>
                    <Config open={open} setOpen={setOpen} aria-controls={menuId} />
                </FocusLock>
            </div>
          </>
        </ThemeProvider>  
      </React.Fragment>
    )  
}

export default App;