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

## useMemoの使い所
https://qiita.com/uhyo/items/5258e04aba380531455a#%E3%81%95%E3%81%99%E3%81%8C%E3%81%AB%E4%BD%BF%E3%82%8F%E3%81%AA%E3%81%84%E5%A0%B4%E5%90%88%E3%81%AF%E3%81%84%E3%81%A4%E3%81%8B