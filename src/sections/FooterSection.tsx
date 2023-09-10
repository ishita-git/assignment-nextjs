import Image from 'next/image'
import { Box, Button, Container, Divider, Grid, InputAdornment, Link, TextField, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import logo from '../assets/logo.png'
import facebook from '../assets/icons/facebook.png'
import twitter from '../assets/icons/twitter.png'
import instagram from '../assets/icons/instagram.png'
import address from '../assets/icons/address.png'
import email from '../assets/icons/email.png'
import phone from '../assets/icons/phone.png'
import arrowRight from '../assets/icons/arrow-right.png'
import SecondaryTextField from '../components/SecondaryTextField'

export default function FooterSection() {
    const theme = useTheme()

    return (
        <Box sx={{ backgroundColor: '#003A9B', mt: theme.spacing(4) }}>
            <Box sx={{ mx: theme.spacing(4), pt: theme.spacing(4) }}>
                <Container maxWidth='xl' disableGutters>
                    <Grid container spacing={2}>
                        <Grid item md={3} sm={6} xs={12}>
                            <Link href='/'>
                                <Image
                                    src={logo}
                                    alt='logo'
                                    style={{
                                        height: '3rem',
                                        width: 'auto',
                                        marginRight: 'auto',
                                    }}
                                />
                            </Link>
                            <Typography
                                variant='h6'
                                textAlign='center'
                                sx={{
                                    my: theme.spacing(1),
                                }}
                            >
                                Muskan Group of Companies
                            </Typography>

                            <Box sx={{ mx: 'auto' }}>
                                <Link href='/'>
                                    <Image
                                        src={facebook}
                                        alt='facebook'
                                        style={{
                                            height: '1.5rem',
                                            width: 'auto',
                                            margin: '1rem',
                                        }}
                                    />
                                </Link>
                                <Link href='/'>
                                    <Image
                                        src={twitter}
                                        alt='twitter'
                                        style={{
                                            height: '1.5rem',
                                            width: 'auto',
                                            margin: '1rem',
                                        }}
                                    />
                                </Link>
                                <Link href='/'>
                                    <Image
                                        src={instagram}
                                        alt='instagram'
                                        style={{
                                            height: '1.5rem',
                                            width: 'auto',
                                            margin: '1rem',
                                        }}
                                    />
                                </Link>
                            </Box>
                        </Grid>

                        <Grid item md={3} sm={6} xs={12}>
                            <Typography variant='h6' sx={{ mb: '1.5rem' }}>
                                Reach Us Out
                            </Typography>

                            <Box sx={{ display: 'flex', alignItems: 'start' }}>
                                <Image
                                    src={address}
                                    alt='logo'
                                    style={{
                                        height: '1rem',
                                        width: 'auto',
                                        marginRight: '1rem',
                                    }}
                                />
                                <Typography variant='body2'>
                                    Muskan Tower, Plot no.83, Old Palam Rd, Shiv Park, kakrola Mor, NEW DELHI - 110078
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    my: '1rem',
                                }}
                            >
                                <Image
                                    src={phone}
                                    alt='logo'
                                    style={{
                                        height: '1rem',
                                        width: 'auto',
                                        marginRight: '1rem',
                                    }}
                                />
                                <Typography variant='body2'>011 41587468/40687469</Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Image
                                    src={email}
                                    alt='logo'
                                    style={{
                                        height: '1rem',
                                        width: 'auto',
                                        marginRight: '1rem',
                                    }}
                                />
                                <Typography variant='body2'>info@mclpl.co.in</Typography>
                            </Box>
                        </Grid>

                        <Grid item md={2} sm={6} xs={12}>
                            <Typography variant='h6' sx={{ mb: '1.5rem' }}>
                                Quick Links
                            </Typography>

                            <Link href='/about'>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Typography variant='body2'>About Us</Typography>
                                    <Image
                                        src={arrowRight}
                                        alt='link'
                                        style={{
                                            height: '0.75rem',
                                            width: 'auto',
                                            marginLeft: '1rem',
                                        }}
                                    />
                                </Box>
                            </Link>

                            <Link href='/career'>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        mt: '1rem',
                                    }}
                                >
                                    <Typography variant='body2'>Career</Typography>
                                    <Image
                                        src={arrowRight}
                                        alt='link'
                                        style={{
                                            height: '0.75rem',
                                            width: 'auto',
                                            marginLeft: '1rem',
                                        }}
                                    />
                                </Box>
                            </Link>

                            <Link href='/contact'>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        mt: '1rem',
                                    }}
                                >
                                    <Typography variant='body2'>Contact Us</Typography>
                                    <Image
                                        src={arrowRight}
                                        alt='link'
                                        style={{
                                            height: '0.75rem',
                                            width: 'auto',
                                            marginLeft: '1rem',
                                        }}
                                    />
                                </Box>
                            </Link>

                            <Link href='/#services'>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        mt: '1rem',
                                    }}
                                >
                                    <Typography variant='body2'>Services</Typography>
                                    <Image
                                        src={arrowRight}
                                        alt='link'
                                        style={{
                                            height: '0.75rem',
                                            width: 'auto',
                                            marginLeft: '1rem',
                                        }}
                                    />
                                </Box>
                            </Link>

                            <Link href='/downloads'>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        mt: '1rem',
                                    }}
                                >
                                    <Typography variant='body2'>Useful Downloads</Typography>
                                    <Image
                                        src={arrowRight}
                                        alt='link'
                                        style={{
                                            height: '0.75rem',
                                            width: 'auto',
                                            marginLeft: '1rem',
                                        }}
                                    />
                                </Box>
                            </Link>
                        </Grid>

                        <Grid item md={4} sm={6} xs={12}>
                            <Typography variant='h6' sx={{ mb: '1.5rem' }}>
                                Subscribe Us
                            </Typography>
                            <Typography variant='body2'>
                                Subscribe to our newsletter and never miss our latest news and promotions.
                            </Typography>
                            <Box sx={{ my: '1rem' }}>
                                <SecondaryTextField placeholder='Enter your mail id' endButton />
                            </Box>
                            <Typography variant='body2'>Privacy Policy</Typography>
                            <Typography variant='body2' sx={{ my: '1rem' }}>
                                Site Map
                            </Typography>
                            <Typography variant='body2'>Terms & Conditions</Typography>
                        </Grid>
                    </Grid>
                    <Divider
                        sx={{
                            mt: theme.spacing(1),
                            borderColor: '#FFFFFF80',
                        }}
                    />
                    <Typography variant='body2' textAlign='end' sx={{ py: theme.spacing(2) }}>
                        © 2022 Copyright: Muskan-Group of Companies 200804
                    </Typography>
                </Container>
            </Box>
        </Box>
    )
}
