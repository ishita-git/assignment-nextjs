import Image from 'next/image'
import { Box, Container, Typography } from '@mui/material'
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
                style={{ width: '24rem', height: 'auto' }}
            />
            <Box sx={{ position: 'absolute', padding: theme.spacing(1) }}>
                <Typography variant="h6">India</Typography>
                <Typography
                    variant="body2"
                    sx={{ mt: theme.spacing(1.25), fontWeight: 400 }}
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
        <Box sx={{ my: theme.spacing(6) }}>
            <Container maxWidth="md" disableGutters>
                <Typography variant="h2">Our Companies</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        mt: theme.spacing(3.25),
                    }}
                >
                    <CompanyCard text="Muskan Containers line Pvt. Ltd." />
                    <CompanyCard text="Muskan Logistic" />
                    <CompanyCard text="Muskan Shipping PTE Ltd." />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        mt: theme.spacing(3),
                        mx: theme.spacing(6),
                    }}
                >
                    <CompanyCard text="Muskaan Shipping SDN BHD" />
                    <CompanyCard text="Muskaan Shipping LLC" />
                </Box>
            </Container>

            <Container
                maxWidth="xl"
                disableGutters
                sx={{
                    px: theme.spacing(4),
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
                        top: theme.spacing(5),
                        right: 0,
                        transform: 'translate(-68%, 4%)',
                    }}
                >
                    <MapDescription />
                </Box>
            </Container>
        </Box>
    )
}
