import React, { useContext} from "react"
import {CounterContext}  from '../context/counter'

export default function Counter(){
  const value = useContext(CounterContext);
  console.log(value)
  return (
    <div>
        データ:{value}
    </div>
  )
}
