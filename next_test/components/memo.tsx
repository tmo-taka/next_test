import React, {memo} from "react"

//NOTE: React.memoによって親コンポーネントが更新されても再レンタリングされない
export default memo((props) =>{
 console.log("Testコンポーネントが呼ばれた")
 console.log(props);
  return (
    <div>
        {props.text}
    </div>
  )
})
