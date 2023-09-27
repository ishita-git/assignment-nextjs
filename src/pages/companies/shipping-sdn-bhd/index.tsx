import React from 'react'
import Image from 'next/image'
import { Box, Container, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import CompaniesLayout from '../CompaniesLayout'
import shippingBg from '../../../assets/companies/shipping-sdn-bhd-bg.png'

export default function Home() {
    const theme = useTheme()

    return (
        <CompaniesLayout image={shippingBg} title='Muskaan Shipping SDN BHD'>
            <Box sx={{ px: theme.spacing(4) }}>
                <Container maxWidth='xl' disableGutters>
                    <Typography variant='h3' sx={{ textAlign: 'start', mb: '1rem', color: '#1B1B1F' }}>
                        About Us
                    </Typography>
                </Container>
            </Box>
        </CompaniesLayout>
    )
}
