import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { Box, Container, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import anchor from '../assets/icons/anchor.png'
import container from '../assets/icons/container.png'
import equipement from '../assets/icons/equipement.png'
import ship from '../assets/icons/ship.png'
import person from '../assets/icons/person.png'
import stern from '../assets/images/stern.webp'

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
                <Image src={icon} alt='card icon' style={{ height: '3.25rem', width: 'auto' }} />
            </Box>
            <Typography variant='h3' sx={{ mt: theme.spacing(1.25) }}>
                {text}
            </Typography>
            <Typography variant='h6' textAlign='center' sx={{ maxWidth: '14rem' }}>
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
                alt='stern'
                style={{
                    width: '100%',
                    height: 'auto',
                    position: 'absolute',
                }}
            />

            <Container maxWidth='lg' disableGutters sx={{ position: 'relative', my: 'auto' }}>
                <Box sx={{ px: theme.spacing(4) }}>
                    <Typography variant='h3'>Seamless Logistics, Worldwide Shipping</Typography>
                    <Typography variant='h3'>Your Gateway to Effortless Trade</Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            mt: theme.spacing(2),
                        }}
                    >
                        <ShippingDataCard icon={anchor} text='47+' subtitle='Serving Ports' />
                        <ShippingDataCard icon={container} text='3000+' subtitle='Equipment' />
                        <ShippingDataCard icon={equipement} text='150+' subtitle='Special Equipment' />
                        <ShippingDataCard icon={ship} text='35+' subtitle='Serving Countries' />
                        <ShippingDataCard icon={person} text='500+' subtitle='Happy Customers' />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
