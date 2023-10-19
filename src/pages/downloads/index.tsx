import React, { useState, useEffect } from 'react'
import { Box, Container, Grid, Link, Typography } from '@mui/material'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import FooterSection from '../../sections/FooterSection'
import { useTheme } from '@mui/material/styles'
import downloadIcon from '../../assets/icons/download.png'
import { fetchDataFromApi } from '../../api/api'

type DownloadDataType = {
    id: number
    title: string
    description: string
    file: string
}

export default function Home() {
    const theme = useTheme()
    const [downloadData, setDowloadData] = useState<DownloadDataType[]>([])

    useEffect(() => {
        async function fetchdDownloadData() {
            try {
                const response = await fetchDataFromApi('api/useful-downloads/')
                setDowloadData(response)
            } catch (error) {
                console.error('Error in fetching job data: ', error)
            }
        }
        fetchdDownloadData()
    }, [])

    return (
        <Box>
            <Box
                sx={{
                    px: theme.spacing(4),
                    py: theme.spacing(2),
                    backgroundColor: '#003A9B',
                }}
            >
                <Navbar />
            </Box>
            <Box sx={{ mx: theme.spacing(4) }}>
                <Container maxWidth='xl' disableGutters>
                    <Box sx={{ my: '4rem' }}>
                        <Typography variant='h2' sx={{ color: '#003A9B' }}>
                            Useful Downloads
                        </Typography>
                        <Typography variant='body1' sx={{ color: '#313131', mx: '5rem' }}>
                            Explore a curated collection of resources that empower your decisions and enrich your
                            understanding. From expert insights to informative guides, your journey of discovery awaits
                        </Typography>
                    </Box>

                    <Grid container spacing={2} wrap='wrap'>
                        {downloadData.map((item) => (
                            <Grid item xs={12} sm={4} key={item.id}>
                                <Box
                                    sx={{ bgcolor: '#ffffff', padding: '1rem', borderRadius: '1.1rem', height: '100%' }}
                                >
                                    <Typography variant='h6' sx={{ color: '#313131', mb: '1rem' }}>
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant='body1'
                                        sx={{ color: ' rgba(49, 49, 49, 0.80)', textAlign: 'start', mb: '0.5rem' }}
                                    >
                                        {item.description ||
                                            'Manuals explaining different shipping options, carriers, and rates'}
                                    </Typography>
                                    <Link href={item.file}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Typography variant='h6' sx={{ color: '#313131' }}>
                                                Downloads
                                            </Typography>
                                            <Image
                                                src={downloadIcon}
                                                alt=''
                                                style={{ width: '1.25rem', height: 'auto', marginLeft: '0.25rem' }}
                                            />
                                        </Box>
                                    </Link>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
            <FooterSection />
        </Box>
    )
}
