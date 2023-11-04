import Image from 'next/image'
import { Box, Container, Typography } from '@mui/material'
import contactbackground from '../assets/images/contact-background.webp'
import { useTheme } from '@mui/material/styles'
import SecondaryTextField from '../components/SecondaryTextField'
import PrimaryButton from '../components/PrimaryButton'

export default function ContactSection() {
    const theme = useTheme()

    return (
        <Box sx={{ mx: theme.spacing(4) }}>
            <Container maxWidth='md' disableGutters sx={{ position: 'relative' }}>
                <Image src={contactbackground} alt='contact background' style={{ width: '100%', height: 'auto' }} />

                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: '56%',
                        height: '100%',
                        py: theme.spacing(1.5),
                        px: theme.spacing(4),
                    }}
                >
                    <Typography variant='h3' textAlign='start'>
                        Get in touch
                    </Typography>
                    <Typography variant='body2' sx={{ mt: theme.spacing(0.5) }}>
                        Our team would love to hear from you
                    </Typography>
                    <Box sx={{ my: theme.spacing(1.5) }}>
                        <SecondaryTextField placeholder='Enter your name' />
                        <SecondaryTextField placeholder='Enter your email address' />
                        <SecondaryTextField placeholder='Enter your contact number' />
                        <SecondaryTextField placeholder='Enter your message' multiline={true} />
                    </Box>

                    <Box sx={{ display: 'flex' }}>
                        <PrimaryButton text='Send' light />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
