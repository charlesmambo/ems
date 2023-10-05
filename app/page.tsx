import { AppProps } from 'next/app';
import Sidebar from './components/Sidebar';
import Navbar from './components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        {/* <Component {...pageProps} /> */}
      </div>
    </div>
  );
}

export default MyApp;
