import React from 'react'
import { AppProps } from 'next/app'
import { Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '../styles/theme'
import '../styles/globals.css'
import FloatingActionButton from '@/components/fab/FloatingActionButton'

function MyApp(props: AppProps) {
    const { Component, pageProps } = props

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
            <Box sx={{ position: 'fixed', top: '20%', right: 0 }}>
                <FloatingActionButton
                    text='Tariff'
                    href='https://docs.google.com/spreadsheets/d/e/2PACX-1vSS1CuAkXy_EKDk5WFSHoSADJ6p2Fkup2JItUT2K-YETsEeqQc46PstjpvUHoFvnHlWQYQXMmzX90Mt/pubhtml'
                />
                <FloatingActionButton
                    text='Detention Tariff'
                    href='https://docs.google.com/spreadsheets/d/e/2PACX-1vRv4Eesz9DGQfaAoB5FXtcV-fdXGbo64wQ0atFR_izQzeTtU7KC-V2v6S6h6S5ePbb6WbnvY2kliNsJ/pubhtml'
                />
                <FloatingActionButton text='Feedback' href='https://forms.gle/Hg6gA1U5MyZ1A6hT7' />
            </Box>
        </ThemeProvider>
    )
}

export default MyApp
