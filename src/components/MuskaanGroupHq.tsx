import React from 'react'
import { Box, Grid, InputLabel, Paper, Typography, useMediaQuery } from '@mui/material'

function CompanyInfo({ title, body }: { title: String; body: String }) {
    return (
        <Box sx={{ mb: '1rem' }}>
            <InputLabel>{title}</InputLabel>
            <Typography variant='subtitle2' sx={{ textAlign: 'start', mb: '0.5rem', color: '#1B1B1F' }}>
                {body}
            </Typography>
        </Box>
    )
}

function MuskaanGroupHq({ mapSrc, address, telephoneNumber }: { mapSrc?: string; address?: String; telephoneNumber?: String }) {
    const mobileMode = useMediaQuery('(max-width:599px)')
    const tabletMode = useMediaQuery('(max-width:899px)')
    return (
        <Grid container spacing={4} alignItems='center'>
            <Grid item xs={12} sm={6}>
                <iframe
                    src={
                        mapSrc ||
                        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.967840161183!2d77.02405941554592!3d28.600741582430178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3cbd9f22ffd%3A0xf4d3e636afaaf3ea!2sMuskan+Container+Lines+Pvt+Ltd!5e0!3m2!1sen!2sin!4v1559114809982!5m2!1sen!2sin'
                    }
                    style={{
                        border: '0.3rem solid white',
                        borderRadius: '1.25rem',
                        width: '100%',
                        height: mobileMode ? '200px' : tabletMode ? '250px' : '275px',
                    }}
                ></iframe>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box>
                    <Typography variant='h3' textAlign='start' sx={{ mb: '1.5rem', color: '#1B1B1F' }}>
                        Muskan group of Companies
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <CompanyInfo
                                title='Registered Office'
                                body={address || 'Muskan Tower, Plot no.83, Old Palam Rd, Shiv Park, kakrola Mor,NEW DELHI - 110078'}
                            />
                            <CompanyInfo title='Telephone No.' body={telephoneNumber || '011 41587468/40687469'} />
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
