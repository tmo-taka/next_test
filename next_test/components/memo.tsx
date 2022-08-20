import React from "react"

type Props ={
  text: string,
  handleClick: () => void,
  children? : ReactNode,

}

//NOTE: React.memoによって親コンポーネントが更新されても再レンタリングされない
export default React.memo((props:Props) =>{
 console.log("Testコンポーネントが呼ばれた")
 //onClickもpopsとして定義されているため描画される
 console.log('prospの値:' + props.text);
  return (
    <div onClick={props.handleClick}>
        {props.text}
    </div>
  )
})
