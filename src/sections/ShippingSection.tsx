import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import anchor from '@/assets/icons/anchor.png'
import container from '@/assets/icons/container.png'
import equipement from '@/assets/icons/equipement.png'
import ship from '@/assets/icons/ship.png'
import person from '@/assets/icons/person.png'
import stern from '@/assets/images/stern.webp'
import NumberCounter from '@/components/NumberCounter'
import VisibilityTracker, { AnimationType } from '@/components/VisibilityTracker'

declare type ShippingProps = {
    icon: string | StaticImageData
    text?: number
    subtitle?: string
}

const ShippingDataCard = ({ icon, text, subtitle }: ShippingProps) => {
    const theme = useTheme()
    const tabletMode = useMediaQuery('(max-width:899px)')
    const wideMobileMode = useMediaQuery('(max-width:649px)')

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
                    width: tabletMode ? '3.5rem' : '5rem',
                    height: tabletMode ? '3.5rem' : '5rem',
                    borderRadius: '22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Image src={icon} alt='card icon' style={{ height: tabletMode ? '2rem' : '3.25rem', width: 'auto' }} />
            </Box>

            <Typography variant='h3' sx={{ mt: theme.spacing(1.25), whiteSpace: 'nowrap' }}>
                <NumberCounter targetNumber={text || 0} duration={2000} />+
            </Typography>
            <Typography variant='h6' textAlign='center' sx={{ maxWidth: wideMobileMode ? '6rem' : '10rem' }}>
                {subtitle}
            </Typography>
        </Box>
    )
}

const WideShippingDataCard = ({ text, subtitle }: { text?: number; subtitle?: string }) => {
    const theme = useTheme()

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography variant='h4' sx={{ mt: theme.spacing(1.25), whiteSpace: 'nowrap' }}>
                <NumberCounter targetNumber={text || 0} duration={1000} />+
            </Typography>
            <Typography variant='body2' textAlign='center' sx={{ maxWidth: '4rem' }}>
                {subtitle}
            </Typography>
        </Box>
    )
}

export default function ShippingSection() {
    const theme = useTheme()
    const tabletMode = useMediaQuery('(max-width:899px)')
    const smallMobileMode = useMediaQuery('(max-width:499px)')

    return (
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
                height: tabletMode ? '52vw' : '36vw',
                display: 'flex',
            }}
        >
            <Image
                src={stern}
                alt='stern'
                style={{
                    width: '100%',
                    height: tabletMode ? '40rem' : '30rem',
                    position: 'absolute',
                    objectFit: 'cover',
                }}
            />

            <Container maxWidth='lg' disableGutters sx={{ position: 'relative', my: 'auto' }}>
                <VisibilityTracker animationType={AnimationType.NOANIMATION}>
                    <Box sx={{ px: { xs: theme.spacing(0), sm: theme.spacing(4) } }}>
                        <Typography
                            variant={smallMobileMode ? 'h6' : 'h3'}
                            textAlign='center'
                            sx={{ fontSize: tabletMode ? '1.5rem' : '2rem', lineHeight: tabletMode ? '2.25rem' : '3rem' }}
                        >
                            Seamless Logistics, Worldwide Shipping
                        </Typography>
                        <Typography
                            variant={smallMobileMode ? 'h6' : 'h3'}
                            textAlign='center'
                            sx={{
                                fontSize: tabletMode ? '1.5rem' : '2rem',
                                lineHeight: tabletMode ? '2.25rem' : '3rem',
                                mb: { xs: theme.spacing(2), sm: theme.spacing(4) },
                            }}
                        >
                            Your Gateway to Effortless Trade
                        </Typography>
                        {smallMobileMode ? (
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    mt: theme.spacing(2),
                                }}
                            >
                                <WideShippingDataCard text={47} subtitle='Serving Ports' />
                                <WideShippingDataCard text={3000} subtitle='Equipment' />
                                <WideShippingDataCard text={150} subtitle='Special Equipment' />
                                <WideShippingDataCard text={35} subtitle='Serving Countries' />
                                <WideShippingDataCard text={500} subtitle='Happy Customers' />
                            </Box>
                        ) : (
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    mt: theme.spacing(2),
                                }}
                            >
                                <ShippingDataCard icon={anchor} text={47} subtitle='Serving Ports' />
                                <ShippingDataCard icon={container} text={3000} subtitle='Equipment' />
                                <ShippingDataCard icon={equipement} text={150} subtitle='Special Equipment' />
                                <ShippingDataCard icon={ship} text={35} subtitle='Serving Countries' />
                                <ShippingDataCard icon={person} text={500} subtitle='Happy Customers' />
                            </Box>
                        )}
                    </Box>
                </VisibilityTracker>
            </Container>
        </Box>
    )
}
