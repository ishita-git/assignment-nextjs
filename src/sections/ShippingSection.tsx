import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { Box, Container, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import stern from '../assets/images/stern.png'
import anchor from '../assets/icons/anchor.png'
import ship from '../assets/icons/ship.png'
import loop from '../assets/icons/loop.png'

declare type ShippingProps = {
    icon: string | StaticImageData
    text?: string
    subtitle?: string
}

const ShippingDataCard = ({ icon, text, subtitle }: ShippingProps) => {
    const theme = useTheme()

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    backgroundColor: '#EFF6FF',
                    width: '5rem',
                    height: '5rem',
                    borderRadius: '22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Image
                    src={icon}
                    alt="card icon"
                    style={{ height: '3.25rem', width: 'auto' }}
                />
            </Box>
            <Typography variant="h3" sx={{ mt: theme.spacing(1.25) }}>
                {text}
            </Typography>
            <Typography variant="h6" sx={{ maxWidth: '14rem' }}>
                {subtitle}
            </Typography>
        </Box>
    )
}

export default function ShippingSection() {
    const theme = useTheme()

    return (
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
                height: '30vw',
                display: 'flex',
            }}
        >
            <Image
                src={stern}
                alt="stern"
                style={{
                    width: '100%',
                    height: 'auto',
                    position: 'absolute',
                }}
            />

            <Container
                maxWidth="md"
                disableGutters
                sx={{ position: 'relative', my: 'auto' }}
            >
                <Typography variant="h3">
                    Seamless Logistics, Worldwide Shipping
                </Typography>
                <Typography variant="h3">
                    Your Gateway to Effortless Trade
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        mt: theme.spacing(2),
                    }}
                >
                    <ShippingDataCard
                        icon={ship}
                        text="1000+"
                        subtitle="TEU Fleet Size"
                    />
                    <ShippingDataCard
                        icon={anchor}
                        text="244+"
                        subtitle="Port calls around the world as of July 2023"
                    />
                    <ShippingDataCard
                        icon={loop}
                        text="165+"
                        subtitle="weekly service loops"
                    />
                </Box>
            </Container>
        </Box>
    )
}
