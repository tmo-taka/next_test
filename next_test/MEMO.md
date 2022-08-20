# memo

## 再レンタリングの仕組み
https://zenn.dev/b1essk/articles/react-re-rendering

## useCallbackの存在意義がわかる記事
https://tyotto-good.com/blog/usecallback

## memo系の違い
https://yukimasablog.com/usememo-usecallback-react-memo
https://qiita.com/soarflat/items/b9d3d17b8ab1f5dbfed2

useCallbackは、React.memoを使ったとしても、即時関数をpropsとして渡すと再レンダリングが行われてしまいます。（React.memoを使った際のアンチパターンのようです。）即時関数をuseCallbackにラップすることで、別コンポーネントに渡す際に再レンダリングが起こらないようにする用途で使えます。

## Strict Modeによって開発環境は2回処理がが行われているらしい
https://reactjs.org/docs/strict-mode.html

## useEffect実行タイミング
- レンダリング後に実行
- 値の変更時に実行
- 初回レンダリング時だけ実行

つまり！コンポーネントが描画された後にuseEffectは実行される！  
だから、コンポーネントの最新のpropsにアクセスすることができる。

## 意味のないueCallBack
[参考記事](https://qiita.com/jonakp/items/0db6fb9e75edcec875b2)