import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log('これは一回')
  return (
      <Component {...pageProps} />
  )
}

export default MyApp
