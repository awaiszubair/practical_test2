import React from 'react'
import '../style.css'
import './style.css'
import Navbar from '../Navbar/Navbar'
import Section from '../Section/Section'
import Footer from '../Footer/Footer'


function Main() {
    return (
        <div className='main'>
            <Navbar />
            <Section />
            <Footer />
        </div>
    )
}

export default Main