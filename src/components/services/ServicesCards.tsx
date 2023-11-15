import React from 'react'
import Image from 'next/image'
import { Box, Container, Link, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { servicesData } from '../../data/servicesData'
import ServicesSectionMobile from '@/sections/ServicesSectionMobile'

export default function ServicesCards({ companiesPage }: { companiesPage?: boolean }) {
    const theme = useTheme()
    const mobileMode = useMediaQuery('(max-width:549px)')

    return (
        <Box
            sx={{
                px: { xs: theme.spacing(2), sm: theme.spacing(4), md: theme.spacing(12) },
                pt: theme.spacing(companiesPage ? 1 : mobileMode ? -1 : 4),
            }}
        >
            <Container disableGutters maxWidth='xl'>
                <Typography variant='h3' sx={{ textAlign: companiesPage ? 'start' : 'center', mb: '1rem', mt: '4rem', color: '#1B1B1F' }}>
                    {companiesPage ? 'Our Services' : 'Other Services'}
                </Typography>

                <Box sx={{ mt: companiesPage ? theme.spacing(0) : theme.spacing(2) }}>
                    <ServicesSectionMobile />
                </Box>
            </Container>
        </Box>
    )
}
