import React, { useState } from 'react';
import logo from './images/logo.svg'
import './App.css'
import Modal from './Modal/Modal';




const App = () => {
  const [modal, setModal] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="http://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
        </a>
        <button  className="App-link"  onClick={() => setModal(true)}> 
              info
      </button>
	  
      </header>  
	  
		{modal ? 
			<Modal
				title={'Modal Title'}
				// isOpened={modal}  
				setModal = {setModal}
				//  onModalClose={() => setModal({...modal, modal: false})}
				// onModalClose={modal}
			>
				<img src={logo} className="App-logo" alt="logo" />
				</Modal>
		: null
		}
         
      
    </div>
  );
};

export default App;


