import { Box, Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'

declare type ClienteleCardProps = {
    cardImage: string | StaticImageData
    cardIcon: string | StaticImageData
    title?: string
    subtitle?: string
}

export default function ClienteleCard({ cardImage, cardIcon, title, subtitle }: ClienteleCardProps) {
    const theme = useTheme()

    return (
        <Grid container alignItems='center'>
            <Grid item xs={4.2}>
                <Image src={cardImage} alt='card image' style={{ width: '100%', height: 'auto' }} />
            </Grid>
            <Grid item xs={7.8} sx={{ px: theme.spacing(5), pt: theme.spacing(4) }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Image src={cardIcon} alt='card image' style={{ width: 'auto', height: '4rem' }} />
                </Box>
                <Typography
                    variant='subtitle2'
                    sx={{
                        fontWeight: 600,
                        fontSize: '2.5rem',
                        mt: theme.spacing(2),
                        mb: theme.spacing(1),
                    }}
                >
                    {title}
                </Typography>
                <Typography variant='subtitle2' textAlign='justify'>
                    {subtitle}
                </Typography>
            </Grid>
        </Grid>
    )
}
