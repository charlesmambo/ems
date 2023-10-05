import React from 'react'
import Navbar from '../../components/Header'
import Sidebar from '../../components/Sidebar'

function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        {/* <Component {...pageProps} /> */}
      </div>
    </div>
  )
}

export default Home