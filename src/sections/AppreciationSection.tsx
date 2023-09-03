import Image from 'next/image'
import { Box, Container, Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import sectionBackground from '../assets/corporate/section-background.png'
import cocacolaCard from '../assets/corporate/cocacola-card.png'

export default function AppreciationSection() {
    const theme = useTheme()

    return (
        <Box sx={{ p: theme.spacing(4) }}>
            <Typography variant="h2">
                Appreciated by some of the best in industry
            </Typography>
            <Container
                maxWidth="md"
                disableGutters
                sx={{ py: theme.spacing(2), position: 'relative' }}
            >
                <Image
                    src={sectionBackground}
                    alt="section background"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                />

                <Box
                    sx={{
                        p: theme.spacing(4),
                        mt: theme.spacing(3),
                        position: 'absolute',
                        top: 0,
                    }}
                >
                    test
                </Box>
            </Container>
        </Box>
    )
}
