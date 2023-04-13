import React from 'react'
import { formatTime } from '../formatTime'

const ListRecordsTimes = ({splitTime}) => {
    let List=[]
    for (let i = 0; i < splitTime.length; i++) {
        List.push(
            <div key={i}> {formatTime(splitTime[i]) }</div>
        )}
  return (
    <div>{List}</div>
  )
}

export default ListRecordsTimes
