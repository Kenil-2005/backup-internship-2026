import { useState } from 'react'
import './App.css'
import BackGround from "./components/BackGround"
import LeftSection from "./components/LeftSection/LeftSection"
import RightSection from "./components/RightSection/RightSection"
import ThankYouPage from './components/ThankYouPage'

function App() {
  
  const [valid,setValid] = useState(false);

  const changeValid = (data) => {
    setValid(data);
    console.log(valid);
  }


  return (
    <div className="flex relative">
        <BackGround/>
        {valid ? <ThankYouPage/> : (
          <>
          <LeftSection/> <RightSection checkValid={changeValid}/>
          </>
        )}
    </div>
  )
}

export default App
