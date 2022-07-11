import React, { useContext} from "react"
import {CounterContext}  from '../context/counter'

export default function Counter(){
  const value = useContext(CounterContext);
  return (
    <div>
        データ:{value}
    </div>
  )
}
