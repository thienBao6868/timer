import './App.css';
import { formatTime } from "./formatTime";
import useTimer from "./useTimer";
import ListRecordsTimes from './Components/ListRecordsTimes';


function App() {
  const { time, startTimer, stopTimer, resetTimer, active ,recordsSplitTime, splitTime, isSplitTime} = useTimer(0);
  return (
   <>
    <div className='container'>
      <h1 className='title'>coder timer</h1>
      <div className='wapper_timer'>
        <div className='times'>
          <h2>{formatTime(time)}</h2>
        </div>
        <div className='group_button'>
          <button className='btn' onClick={stopTimer}>Stop</button>
          <button className='btn' onClick={startTimer} ref={active}>Start</button>
          <button className='btn' onClick={resetTimer} >Reset</button>
          <button className='btn' onClick={recordsSplitTime}>Split</button>
        </div>
        {isSplitTime? 
        <>
         <ListRecordsTimes splitTime={splitTime}/>
        </>
        :
        <>
        </>
      }
       

        
      </div>
    </div>
   </>
  )
}

export default App;
