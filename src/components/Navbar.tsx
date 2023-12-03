import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import { Box, Container, Typography, useMediaQuery, Link as MUILink } from '@mui/material'

import Link from 'next/link'

export default function Navbar() {
    const theme = useTheme()
    const mobileMode = useMediaQuery('(max-width:599px)')
    const ultraSmallMode = useMediaQuery('(max-width:399px)')

    return (
        <Container
            disableGutters
            maxWidth='xl'
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                py: theme.spacing(1),
                px: mobileMode ? theme.spacing(2) : theme.spacing(4),
            }}
        >
            <Box sx={{ '& a': { display: 'flex', alignItems: 'center' } }}>
                <Link href='/'>
                    <img src='/assets/logo.png' alt='logo' width='auto' height='48rem' />

                    {ultraSmallMode ? (
                        <></>
                    ) : (
                        <Box>
                            <Typography variant='body1' sx={{ mx: theme.spacing(1), fontSize: '1.5rem', color: '#000000' }}>
                                Blogs Website
                            </Typography>
                        </Box>
                    )}
                </Link>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Link href='/my-blogs'>
                    <Typography variant='subtitle2' sx={{ ml: theme.spacing(1.5), color: '#000000' }}>
                        My Blogs
                    </Typography>
                </Link>

                <Link href='/edit-blogs'>
                    <Typography variant='subtitle2' sx={{ ml: theme.spacing(1.5), color: '#000000' }}>
                        Edit Blogs
                    </Typography>
                </Link>

                <Link href='/career'>
                    <Typography variant='subtitle2' sx={{ ml: theme.spacing(1.5), color: '#000000' }}>
                        Profile
                    </Typography>
                </Link>
            </Box>
        </Container>
    )
}
