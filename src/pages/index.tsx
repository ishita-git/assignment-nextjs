import React from 'react'
import { AppBar, Box, useScrollTrigger } from '@mui/material'

import FooterSection from '../sections/FooterSection'
import Navbar from '../components/Navbar'

import ClienteleCard from '@/components/ClienteleCard'

interface Props {
    window?: () => Window
    children: React.ReactElement
}

function ElevationScroll(props: Props) {
    const { children, window } = props
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    })

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    })
}

export default function ElevateAppBar(props: Props) {
  
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: props.window ? props.window() : undefined,
    })

    return (
        <React.Fragment>
            <ElevationScroll {...props}>
                <AppBar position='fixed' style={{ backgroundColor: trigger ? '#003A9B' : '#003A9B40' }}>
                    <Navbar />
                </AppBar>
            </ElevationScroll>
            <Box
                sx={{ background: 'white', width: '100vw' }}
                style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto', gap: '10px', marginTop: '100px' }}
            >
                <ClienteleCard cardImage={'blog1.jpeg'} title={'Blog1'} subtitle={'subtitle blog'} />
                <ClienteleCard cardImage={'blog1.jpeg'} title={'Blog2'} subtitle={'subtitle blog'} />
                <ClienteleCard cardImage={'blog1.jpeg'} title={'Blog3'} subtitle={'subtitle blog'} />
                <ClienteleCard cardImage={'blog1.jpeg'} title={'Blog4'} subtitle={'subtitle blog'} />
                <ClienteleCard cardImage={'blog1.jpeg'} title={'Blog5'} subtitle={'subtitle blog'} />
                <ClienteleCard cardImage={'blog1.jpeg'} title={'Blog6'} subtitle={'subtitle blog'} />
                <ClienteleCard cardImage={'blog1.jpeg'} title={'Blog7'} subtitle={'subtitle blog'} />
                <ClienteleCard cardImage={'blog1.jpeg'} title={'Blog8'} subtitle={'subtitle blog'} />
            </Box>
            <FooterSection />
        </React.Fragment>
    )
}
