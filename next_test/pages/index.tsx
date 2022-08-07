import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Memo from '../components/memo'
import UseMemo from '../components/useMemo'


import React, { useEffect, useState, useCallback } from "react";

export default function index() {
  const [message, setMessage] = useState("");
  const [dummy,setDummy] = useState(0);
  const [text,setText] = useState("テスト")

  //NOTE: こちらはmessageが変更された時のみ描写
  const outputLog = useCallback((value: string) => {
    console.log(value);
  },[message]);

  console.log("index再描画")

  //NOTE: こちらはmessage以外のdummyが更新されても描写
  // const outputLog = (value: string) => {
  //   console.log(value);
  // };

  const plusDummy =() =>{
    if(text == 'テスト'){
      setText("再描画された")
    }
    // }else {
    //   setText("テスト")
    // }
    setDummy(dummy+1)
  }

  //NOTE: この関数では描画されるたびに関数に差が出ていることがわかるuseEffect
  useEffect(() => {
    console.log('これが関数描画')
    outputLog(message);
  }, [outputLog]);

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={() => plusDummy()}>こっちはキャッシュがある</button>
      <Memo text={text} onClick={() => outlog()} />
      <UseMemo />
    </div>
  )
}
