import React, {useState, useMemo} from "react"

//NOTE: React.memoによって親コンポーネントが更新されても再レンタリングされない
export default function Memo(){
  const [counter, setCounter] = useState(100);
  const [test,setTest] = useState('テスト')

  const weightFunction = useMemo(() => {
        // 重い処理を実行する。
        let i = 0;
        while (i < 10) {
            i++;
        };
        console.log('useMemoに入った')

        return counter * counter;
    }, [counter]);

    const addCount = ():void =>{
        setCounter(counter+1)
    }

  return (
    <div>
        <p>関数の結果：{weightFunction}</p>
        <button onClick={()=>addCount()}>カウント増やす</button>
        <button onClick={()=>setTest('変更した')}>Testを変更</button>
    </div>
  )
}
