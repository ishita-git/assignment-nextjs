import React from 'react'
import Image from 'next/image'
import { Box, Grid, InputLabel, Paper, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import map from '../assets/contact/address-map.webp'
import directionImg from '../assets/contact/direction.png'

function CompanyInfo({ title, body }: { title: String; body: String }) {
    return (
        <Box sx={{ mb: '1rem' }}>
            <InputLabel>{title}</InputLabel>
            <Typography variant='body2' sx={{ fontWeight: 400, color: '#1B1B1F' }}>
                {body}
            </Typography>
        </Box>
    )
}

function MuskaanGroupHq() {
    return (
        <Grid container spacing={4} alignItems='center'>
            <Grid item xs={12} sm={6} sx={{ position: 'relative' }}>
                <Image
                    src={map}
                    alt='map'
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                />

                <Paper sx={{ position: 'absolute', bottom: '1rem', right: '1rem', p: '0.5rem', borderRadius: '8px' }}>
                    <Grid container spacing={2} sx={{ width: '24rem' }}>
                        <Grid item xs={9}>
                            <Typography variant='subtitle2' sx={{ fontWeight: 600 }}>
                                Muskan Container Lines Pvt. Ltd.
                            </Typography>
                            <Typography
                                variant='subtitle2'
                                textAlign='justify'
                                sx={{ opacity: 0.8, fontSize: '0.8rem', my: '0.5rem' }}
                            >
                                Eros Metro Mall, SF-18, Sec.14, near Metro Station, Dwarka, New Delhi, Delhi 110075.
                            </Typography>

                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant='subtitle2' sx={{ fontWeight: 600, opacity: 0.8 }}>
                                    4.3
                                </Typography>
                                <StarIcon sx={{ color: '#E47700', mx: '0.25rem' }} />

                                <Typography sx={{ color: '#003A9B', fontSize: '0.8rem', ml: '0.5rem' }}>
                                    9 Reviews
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box sx={{ mx: 'auto' }}>
                                <Image
                                    src={directionImg}
                                    alt='Direction'
                                    style={{ height: '1.25rem', width: '1.25rem' }}
                                />
                            </Box>
                            <Typography sx={{ color: '#003A9B', fontSize: '0.8rem', ml: '0.5rem' }}>
                                Direction
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box>
                    <Typography variant='h3' textAlign='start' sx={{ mb: '1.5rem', color: '#1B1B1F' }}>
                        Muskaan group of Companies
                    </Typography>

                    <Grid container spacing={4}>
                        <Grid item xs={8}>
                            <CompanyInfo
                                title='Registered Office'
                                body='Muskan Tower, Plot no.83, Old Palam Rd, Shiv Park, kakrola Mor,NEW DELHI - 110078'
                            />
                            <CompanyInfo title='Telephone No.' body='011 41587468/40687469' />
                        </Grid>
                        <Grid item xs={4}>
                            <CompanyInfo title='Email ID' body='info@mclpl.co.in' />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}

export default MuskaanGroupHq
