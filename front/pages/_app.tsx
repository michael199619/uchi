import 'bootstrap/dist/css/bootstrap.min.css'
import '../app/styles/globals.sass'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default App
