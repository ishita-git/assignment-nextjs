import { Box, Typography, useMediaQuery } from '@mui/material'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import VisibilityTracker, { AnimationType } from '../VisibilityTracker'

export default function ServicesCardMobile({ title, desc, image }: { title: String; desc: String; image: string | StaticImageData }) {
    return (
        <Box sx={{ position: 'relative', width: '100%', mb: '2rem', height: '60vw', borderRadius: '1.5rem', overflow: 'hidden' }}>
            <Image src={image} alt='' style={{ height: 'auto', width: '100%' }} />
            <Box
                sx={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    p: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%',
                }}
            >
                <Typography variant='h4' sx={{ textAlign: 'start', color: '#FFFFFF', fontWeight: 600 }}>
                    {title}
                </Typography>
                <VisibilityTracker animationType={AnimationType.FADE} timeout={2000}>
                    <Typography variant='body1' sx={{ textAlign: 'start', color: '#FFFFFF', my: '1rem' }}>
                        {desc}
                    </Typography>
                    {title == 'Our Commitment' ? (
                        <ul>
                            {ourCommitments.map((item, index) => (
                                <Typography
                                    key={index}
                                    component='li'
                                    textAlign='start'
                                    variant='body1'
                                    sx={{ color: '#FFFFFF', ml: '2rem', mb: '0.5rem', fontWeight: 300 }}
                                >
                                    {item}
                                </Typography>
                            ))}
                        </ul>
                    ) : (
                        <></>
                    )}
                </VisibilityTracker>
            </Box>
        </Box>
    )
}

const ourCommitments = ['Customer Loyalty.', ' Understand Customer Needs.', ' Excellence in Quality and Service.']
