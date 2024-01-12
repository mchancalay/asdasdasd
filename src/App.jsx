import { Container } from '@mui/material'
import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Header from './components/Header/Header'

const App = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Footer />
        </div>
    )
}

export default App
