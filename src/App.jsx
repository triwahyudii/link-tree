/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */

import './App.css'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'


function App() {

  return (
    <>
      <div>
        <section>
          <Header />
          <Content />
          <Footer />
        </section>
      </div>
    </>
  )
}

export default App

//useEffect mempunyai 2 argumen: function dan depedencies: 
// minimal isi bracket kosong atau dengan value ( []-> ini adalah lifeCycle )