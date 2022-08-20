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

  // NOTE: こちらはtextが変更された時のみ描写
  // NOTE: これを使うことによって関数が再定義されずpropsの値が更新されることがない
  const outputLog = useCallback(() => {
  // useCallBackだからそれは引数なしか
    console.log(text);
  },[text]);

  console.log("index再描画")

  //NOTE: こちらはmessage以外のdummyが更新されても描写
  // const outputLog = (value: string) => {
  //   console.log(value);
  // };

  const plusDummy =():void =>{
    if(text == 'テスト'){
      setText("再描画された")
    }else {
      console.log('setTextが呼ばれた')
    }

    //NOTE：こいつでdummyが更新されるのでindexが再レンタリングされる。
    //NOTE: それによってmessageが再定義され、outputLogのcollBackが無意味となる
    setDummy(dummy+1)
  }

  //NOTE: この関数では描画されるたびに関数に差が出ていることがわかるuseEffect
  useEffect(() => {
    console.log('これが関数描画')
    // outputLog(message);
  }, [outputLog]);

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={() => plusDummy()}>こっちはキャッシュがある</button>
      <Memo text={text} handleClick={outputLog} />
      <UseMemo />
    </div>
  )
}
