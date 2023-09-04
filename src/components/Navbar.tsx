import * as React from 'react'
import Image from 'next/image'
import { useTheme } from '@mui/material/styles'
import { AppBar, Box, Container, Link, Typography } from '@mui/material'
import PrimaryButton from './PrimaryButton'
import downArrow from '../assets/icons/arrow-down.png'
import logo from '../assets/logo.png'

export default function Navbar() {
    const theme = useTheme()

    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{ background: 'transparent' }}
        >
            <Container
                disableGutters
                maxWidth="xl"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="logo"
                            style={{ height: '3rem', width: 'auto' }}
                        />
                    </Link>

                    <Typography variant="h5" sx={{ mx: theme.spacing(1) }}>
                        Muskan Group of Companies
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography
                        variant="h6"
                        sx={{ display: 'flex', alignItems: 'center' }}
                    >
                        Companies
                        <Image
                            src={downArrow}
                            alt="expand more"
                            style={{
                                width: '1.25rem',
                                height: 'auto',
                                marginLeft: theme.spacing(0.25),
                            }}
                        />
                    </Typography>

                    <Link href="/services">
                        <Typography
                            variant="h6"
                            sx={{ ml: theme.spacing(1.5) }}
                        >
                            Services
                        </Typography>
                    </Link>

                    <Link href="/about">
                        <Typography
                            variant="h6"
                            sx={{ ml: theme.spacing(1.5) }}
                        >
                            About Us
                        </Typography>
                    </Link>

                    <Link href="/contact">
                        <Typography
                            variant="h6"
                            sx={{ ml: theme.spacing(1.5) }}
                        >
                            Contact Us
                        </Typography>
                    </Link>

                    <Link href="/career">
                        <Typography
                            variant="h6"
                            sx={{ ml: theme.spacing(1.5) }}
                        >
                            Career
                        </Typography>
                    </Link>

                    <Typography
                        variant="h6"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            ml: theme.spacing(1.5),
                        }}
                    >
                        Tools
                        <Image
                            src={downArrow}
                            alt="expand more"
                            style={{
                                width: '1.25rem',
                                height: 'auto',
                                marginLeft: theme.spacing(0.25),
                            }}
                        />
                    </Typography>

                    <Box sx={{ ml: theme.spacing(1.5) }}>
                        <PrimaryButton text="Login" light />
                    </Box>
                </Box>
            </Container>
        </AppBar>
    )
}
