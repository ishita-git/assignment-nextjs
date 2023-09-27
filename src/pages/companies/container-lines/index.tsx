import React from 'react'
import Image from 'next/image'
import { Box, Container, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import CompaniesLayout from '../CompaniesLayout'
import ServicesCards from '../../../components/services/ServicesCards'
import containerLinesBg from '../../../assets/companies/container-lines-bg.png'
import processBanner from '../../../assets/companies/process-banner.png'
import branchesMap from '../../../assets/companies/branches-map.png'

function ProcessSection() {
    return (
        <Box sx={{ position: 'relative' }}>
            <Image src={processBanner} alt='process banner' style={{ width: '100%', height: 'auto' }} />
            <Box sx={{ position: 'absolute', top: 0, width: '100%' }}>
                <Typography variant='h3' sx={{ my: '3rem' }}>
                    Process
                </Typography>
                add cards here
            </Box>
        </Box>
    )
}

export default function Home() {
    const theme = useTheme()

    return (
        <CompaniesLayout image={containerLinesBg} title='Muskan Container Lines Pvt Ltd.'>
            <Box sx={{ px: theme.spacing(4) }}>
                <Container maxWidth='xl' disableGutters>
                    <Typography variant='h3' sx={{ textAlign: 'start', mb: '1rem', color: '#1B1B1F' }}>
                        About Us
                    </Typography>
                    put content here
                </Container>
            </Box>

            <ProcessSection />
            <ServicesCards companiesPage />
            <Box sx={{ px: theme.spacing(4) }}>
                <Container maxWidth='xl' disableGutters>
                    <Typography variant='h3' sx={{ textAlign: 'start', mb: '1rem', mt: '2rem', color: '#1B1B1F' }}>
                        Our Branches
                    </Typography>
                    <Image src={branchesMap} alt='branches' style={{ width: '40rem', height: 'auto' }} />
                </Container>
            </Box>
        </CompaniesLayout>
    )
}
