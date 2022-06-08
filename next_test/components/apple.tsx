import React, { useContext} from "react";
import Context from '../context/counter'

export default function Apple(){
  const value = useContext(Context.CounterContext);
  return (
    <div>
        データ:{value}
    </div>
  )
}
