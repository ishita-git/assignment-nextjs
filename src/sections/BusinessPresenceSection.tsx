import Image from 'next/image'
import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { oswald } from '../styles/fonts'
import map from '../assets/images/map.png'
import description from '../assets/images/map-description.png'

const MapDescription = () => {
    const theme = useTheme()

    return (
        <Box sx={{ display: 'flex', position: 'relative' }}>
            <Image
                src={description}
                alt="map description"
                style={{ width: '26.5vw', height: 'auto' }}
            />
            <Box sx={{ position: 'absolute', padding: theme.spacing(1) }}>
                <Typography variant="h6">India</Typography>
                <Divider
                    sx={{ mt: theme.spacing(0.25), borderColor: '#FFFFFF80' }}
                />

                <Typography
                    variant="body2"
                    sx={{ mt: theme.spacing(1), fontWeight: 400 }}
                >
                    New Delhi
                </Typography>
                <Typography variant="body2" sx={{ mt: theme.spacing(0.5) }}>
                    Muskan Container Lines Pvt. Ltd. Muskan Tower, Plot no.83,
                    Old Palam Rd, Shiv Park, kakrola Mor, New Delhi, Delhi
                    110078, India (T) +91 11 41587468/40687469
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ mt: theme.spacing(1.25), fontWeight: 400 }}
                >
                    Chennai
                </Typography>
                <Typography variant="body2" sx={{ mt: theme.spacing(0.5) }}>
                    Muskan Container Lines Pvt. Ltd. #72/1,first floor, shop# 3,
                    Linghi Chetty street, Mannady Chennai - 600001 Land Line :
                    +91-44 42642551
                </Typography>
            </Box>
        </Box>
    )
}

const CompanyCard = ({ text }: { text: string }) => {
    const theme = useTheme()
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
            }}
        >
            <Typography
                variant="h4"
                sx={{ fontFamily: oswald.style.fontFamily }}
            >
                {text}
            </Typography>
        </Box>
    )
}

export default function BusinessPresenceSection() {
    const theme = useTheme()

    return (
        <Box sx={{ my: theme.spacing(6), mx: theme.spacing(4) }}>
            <Container maxWidth="md" disableGutters>
                <Typography variant="h2">Our Companies</Typography>
                <Box sx={{ mt: theme.spacing(3) }}>
                    <Grid container spacing={2}>
                        <Grid item sm={4} xs={6}>
                            <CompanyCard text="Muskan Containers line Pvt. Ltd." />
                        </Grid>
                        <Grid item sm={4} xs={6}>
                            <CompanyCard text="Muskan Logistic" />
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <CompanyCard text="Muskan Shipping PTE Ltd." />
                        </Grid>
                        <Grid item xs={6}>
                            <Box
                                sx={{
                                    pl: {
                                        md: theme.spacing(12),
                                        xl: theme.spacing(8),
                                    },
                                }}
                            >
                                <CompanyCard text="Muskaan Shipping SDN BHD" />
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box
                                sx={{
                                    pr: {
                                        md: theme.spacing(12),
                                        xl: theme.spacing(8),
                                    },
                                }}
                            >
                                <CompanyCard text="Muskaan Shipping LLC" />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <Container
                maxWidth="xl"
                disableGutters
                sx={{
                    mt: theme.spacing(8),
                    position: 'relative',
                }}
            >
                <Typography variant="h2" sx={{ mb: theme.spacing(5) }}>
                    Our Reach
                </Typography>
                <Image
                    src={map}
                    alt="map"
                    style={{
                        width: '100%',
                        height: 'auto',
                        position: 'relative',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        right: '15vw',
                        top: '8vw',
                    }}
                >
                    <MapDescription />
                </Box>
            </Container>
        </Box>
    )
}
