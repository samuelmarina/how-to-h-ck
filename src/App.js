import './App.css';
import { Button } from "@material-ui/core"
import { useState } from 'react';
import rickRoll from "./rick-roll.jpg"

function App() {
  const [b1, setb1] = useState(true);
  const [b2, setb2] = useState(false);
  const [b3, setb3] = useState(false);
  const [b4, setb4] = useState(false);
  const [rick, setRick] = useState(false);


  const changeVisibility = (number) => {
    switch (number) {
      case 1:
        setb1(false);
        setb2(true)
        break;
      case 2:
        setb2(false);
        setb3(true);
        break;
      case 3:
        setb3(false);
        setb4(true);
        break;
      default:
        setb4(false);
        setRick(true);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
       {b1 ? (
          <Button variant="contained" color="primary" onClick={() => changeVisibility(1)}>
            Click to get the code
          </Button>
       ) : null}
       {b2 ? (
         <Button variant="contained" color="primary" onClick={() => changeVisibility(2)}>
            One more time
          </Button>
       ) : null}
       {b3 ? (
         <Button variant="contained" color="primary" onClick={() => changeVisibility(3)}>
            Lmao just one more time
          </Button>
       ) : null}
       {b4 ? (
         <Button variant="contained" color="primary" onClick={() => changeVisibility(4)}>
            I promise just one more time
          </Button>
       ) : null}
       {rick ? (
         <img src={rickRoll} alt="Rick" />
       ) : null}
      </header>
    </div>
  );
}

export default App;
