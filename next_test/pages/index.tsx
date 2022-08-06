import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import React, { useEffect, useState, useCallback } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [dummy,setDummy] = useState(0);

  //NOTE: こちらはmessageが変更された時のみ描写
  // const outputLog = useCallback((value: string) => {
  //   console.log(value);
  // },[message]);

  //NOTE: こちらはmessage以外のdummyが更新されても描写
  const outputLog = (value: string) => {
    console.log(value);
  };

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
      <button onClick={() => setDummy(dummy+1)}>こっちはキャッシュがある</button>
    </div>
  )
}
