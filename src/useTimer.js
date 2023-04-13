import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);
  const [splitTime, setSplitTime] = useState([]) // data moi lan click se duoc cap nhat o day. 
  const [isSplitTime, setIsSplitTime] = useState(false)
  const arrayTime = useRef([]);
   
  const isStart = useRef(false);
  const active = useRef();
  const refInterval = useRef(0);

  const startTimer = () => {
    isStart.current = true;
    active.current.disabled = true;
    refInterval.current = setInterval(() => {
      if(isStart.current){

        setTime((time) => time + 1)
      }
    }, 1000);
  };
  const stopTimer = () => {
    isStart.current=false;
    clearInterval(refInterval.current)
    active.current.disabled=false;
  };
  const resetTimer = () => {
    setTime(0);
    clearInterval(refInterval.current)
    active.current.disabled = false;
    arrayTime.current =[];
    setSplitTime(arrayTime.current)
    setIsSplitTime(false)
    isStart.current= false;
  };
  const recordsSplitTime = () => {
    
    if(isStart.current){
      arrayTime.current.push(time);
      setSplitTime(arrayTime.current)
      setIsSplitTime(true) 
    }
  }

  return { time, startTimer, stopTimer, resetTimer, active, recordsSplitTime, splitTime, isSplitTime};
};
export default useTimer;
