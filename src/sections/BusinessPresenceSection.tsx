import Image from 'next/image'
import { Box, Container, Divider, Grid, Link, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { oswald } from '../styles/fonts'
import map from '../assets/images/map.webp'
import map2 from '../assets/images/map2.webp'
import React from 'react'
// import description from '../assets/images/map-description.png'

// const MapDescription = () => {
//     const theme = useTheme()

//     return (
//         <Box sx={{ display: 'flex', position: 'relative' }}>
//             <Image
//                 src={description}
//                 alt="map description"
//                 style={{ width: '26.5vw', height: 'auto' }}
//             />
//             <Box sx={{ position: 'absolute', padding: theme.spacing(1) }}>
//                 <Typography variant="h6">India</Typography>
//                 <Divider
//                     sx={{ mt: theme.spacing(0.25), borderColor: '#FFFFFF80' }}
//                 />

//                 <Typography
//                     variant="body2"
//                     sx={{ mt: theme.spacing(1), fontWeight: 400 }}
//                 >
//                     New Delhi
//                 </Typography>
//                 <Typography variant="body2" sx={{ mt: theme.spacing(0.5) }}>
//                     Muskan Container Lines Pvt. Ltd. Muskan Tower, Plot no.83,
//                     Old Palam Rd, Shiv Park, kakrola Mor, New Delhi, Delhi
//                     110078, India (T) +91 11 41587468/40687469
//                 </Typography>
//                 <Typography
//                     variant="body2"
//                     sx={{ mt: theme.spacing(1.25), fontWeight: 400 }}
//                 >
//                     Chennai
//                 </Typography>
//                 <Typography variant="body2" sx={{ mt: theme.spacing(0.5) }}>
//                     Muskan Container Lines Pvt. Ltd. #72/1,first floor, shop# 3,
//                     Linghi Chetty street, Mannady Chennai - 600001 Land Line :
//                     +91-44 42642551
//                 </Typography>
//             </Box>
//         </Box>
//     )
// }

const CompanyCard = ({ text, href }: { text: string; href: string }) => {
    const theme = useTheme()
    const [hovered, setHovered] = React.useState(false)

    const handleMouseEnter = () => {
        setHovered(true)
    }

    const handleMouseLeave = () => {
        setHovered(false)
    }

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#003A9B',
                borderRadius: '8px',
                width: '14rem',
                height: '6rem',
                px: theme.spacing(1),
                mx: 'auto',
                transition: 'box-shadow 0.4s, transform 0.2s', // Add a transition for transform
                transform: hovered ? 'scale(1.1)' : 'scale(1)', // Scale the card on hover
                boxShadow: hovered ? 5 : 0, // Add shadow on hover
                cursor: 'pointer',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link href={href}>
                <Typography variant='h4' sx={{ fontFamily: oswald.style.fontFamily }}>
                    {text}
                </Typography>
            </Link>
        </Box>
    )
}

const CompanyPill = ({ text, href }: { text: string; href: string }) => {
    const theme = useTheme()
    const [hovered, setHovered] = React.useState(false)

    const handleMouseEnter = () => {
        setHovered(true)
    }

    const handleMouseLeave = () => {
        setHovered(false)
    }

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#003A9B',
                borderRadius: '8px',
                minWidth: '20rem',
                width: '28rem',
                height: '4.25rem',
                px: theme.spacing(1),
                mx: 'auto',
                mt: theme.spacing(1),
                transition: 'box-shadow 0.4s, transform 0.2s', // Add a transition for transform
                transform: hovered ? 'scale(1.1)' : 'scale(1)', // Scale the card on hover
                boxShadow: hovered ? 5 : 0, // Add shadow on hover
                cursor: 'pointer',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link href={href}>
                <Typography variant='h4' sx={{ fontFamily: oswald.style.fontFamily }}>
                    {text}
                </Typography>
            </Link>
        </Box>
    )
}

export default function BusinessPresenceSection() {
    const theme = useTheme()
    const tabletMode = useMediaQuery('(max-width:899px)')
    const narrowTabletMode = useMediaQuery('(max-width:799px)')
    const mobileMode = useMediaQuery('(max-width:599px)')

    return (
        <>
            <Box sx={{ my: theme.spacing(6), mx: theme.spacing(4) }}>
                <Container maxWidth='md' disableGutters>
                    <Typography variant='h2' textAlign='center'>
                        Our Agents
                    </Typography>
                    {mobileMode ? (
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <CompanyPill text='Muskan Containers line Pvt. Ltd.' href='/companies/container-lines' />
                            <CompanyPill text='Muskan Logistics' href='/companies/logistics' />
                            <CompanyPill text='Muskan Shipping PTE Ltd.' href='/companies/shipping-pte' />
                            <CompanyPill text='Muskaan Shipping SDN BHD' href='/companies/shipping-sdn-bhd' />
                            <CompanyPill text='Muskaan Shipping LLC' href='/companies/shipping-llc' />
                        </Box>
                    ) : (
                        <Box sx={{ mt: theme.spacing(3) }}>
                            <Grid container spacing={2}>
                                <Grid item sm={4} xs={6}>
                                    <CompanyCard
                                        text='Muskan Containers line Pvt. Ltd.'
                                        href='/companies/container-lines'
                                    />
                                </Grid>
                                <Grid item sm={4} xs={6}>
                                    <CompanyCard text='Muskan Logistics' href='/companies/logistics' />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <CompanyCard text='Muskan Shipping PTE Ltd.' href='/companies/shipping-pte' />
                                </Grid>
                            </Grid>
                            <Container maxWidth='sm' disableGutters sx={{ mt: theme.spacing(4) }}>
                                <Grid
                                    container
                                    spacing={4}
                                    sx={{ px: narrowTabletMode ? theme.spacing(8) : theme.spacing(6) }}
                                >
                                    <Grid item xs={6}>
                                        <CompanyCard
                                            text='Muskaan Shipping SDN BHD'
                                            href='/companies/shipping-sdn-bhd'
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <CompanyCard text='Muskaan Shipping LLC' href='/companies/shipping-llc' />
                                    </Grid>
                                </Grid>
                            </Container>
                        </Box>
                    )}
                </Container>

                {tabletMode ? (
                    <></>
                ) : (
                    <Container
                        maxWidth='xl'
                        disableGutters
                        sx={{
                            mt: theme.spacing(8),
                            position: 'relative',
                        }}
                    >
                        <Typography variant='h2' textAlign='center' sx={{ mb: theme.spacing(4) }}>
                            Our Reach
                        </Typography>
                        <Image
                            src={map}
                            alt='map'
                            style={{
                                width: '100%',
                                height: 'auto',
                                position: 'relative',
                            }}
                        />
                        {/* <Box
                    sx={{
                        position: 'absolute',
                        right: '15vw',
                        top: '8vw',
                    }}
                >
                    <MapDescription />
                </Box> */}
                    </Container>
                )}
            </Box>
            {tabletMode ? (
                <Box sx={{ mx: { xs: 0, sm: theme.spacing(4) } }}>
                    <Container
                        maxWidth='md'
                        disableGutters
                        sx={{
                            mt: theme.spacing(8),
                            position: 'relative',
                        }}
                    >
                        <Typography variant='h2' textAlign='center' sx={{ mb: theme.spacing(2) }}>
                            Our Reach
                        </Typography>
                        <Image
                            src={map2}
                            alt='map'
                            style={{
                                width: '100%',
                                height: 'auto',
                                position: 'relative',
                            }}
                        />
                    </Container>
                </Box>
            ) : (
                <></>
            )}
        </>
    )
}
