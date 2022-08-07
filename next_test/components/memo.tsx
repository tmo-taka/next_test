import React, {memo} from "react"

//NOTE: React.memoによって親コンポーネントが更新されても再レンタリングされない
export default memo((props) =>{
 console.log("Testコンポーネントが呼ばれた")
 //onClickもpopsとして定義されているため描画される
 console.log('prospの値:' + props);
  return (
    <div>
        {props.text}
    </div>
  )
})
