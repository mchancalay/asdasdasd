import { Container } from '@mui/material'
import React from 'react'
import ScrollDown from '../ScrollDown/ScrollDown'

const Header = () => {
    return (
        <div className='header'>
            <Container maxWidth="md">
                <div className='header__content'>
                    <h1 className='header__title'>Consultoría Analítica de Datos para Empresas</h1>
                    <p className='header__text'>Acompañamos a las empresas en el proceso de transformación hacia una organización Data Driven, aplicando técnicas de inteligencia artificial, big data, e implementando tecnología de procesamiento de datos.</p>
                    <div className='header__scroll'>
                        <ScrollDown>Descubre cómo</ScrollDown>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header
