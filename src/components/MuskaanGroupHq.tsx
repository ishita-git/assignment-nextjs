import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Box, Grid, InputLabel, Paper, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import map from '../assets/contact/address-map.webp'
import directionImg from '../assets/contact/direction.png'
import { isNullishCoalesce } from 'typescript'

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

function MuskaanGroupHq({
    image,
    address,
    telephoneNumber,
}: {
    image?: string | StaticImageData
    address?: String
    telephoneNumber?: String
}) {
    return (
        <Grid container spacing={4} alignItems='center'>
            <Grid item xs={12} sm={6}>
                <Image
                    src={image || map}
                    alt='map'
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box>
                    <Typography variant='h3' textAlign='start' sx={{ mb: '1.5rem', color: '#1B1B1F' }}>
                        Muskaan group of Companies
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <CompanyInfo
                                title='Registered Office'
                                body={
                                    address ||
                                    'Muskan Tower, Plot no.83, Old Palam Rd, Shiv Park, kakrola Mor,NEW DELHI - 110078'
                                }
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
