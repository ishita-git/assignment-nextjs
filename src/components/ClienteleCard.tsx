import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'

declare type ClienteleCardProps = {
    cardImage: string | StaticImageData
    cardIcon: string | StaticImageData
    title?: string
    subtitle?: string
}

export default function ClienteleCard({
    cardImage,
    cardIcon,
    title,
    subtitle,
}: ClienteleCardProps) {
    const theme = useTheme()

    return (
        <Box>
            <Image
                src={cardImage}
                alt="card image"
                style={{ width: '100%', height: 'auto' }}
            />

            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: '64%',
                    height: '100%',
                    px: theme.spacing(6),
                    py: theme.spacing(8),
                }}
            >
                <Box sx={{ display: 'flex', my: theme.spacing(1.5) }}>
                    <Image
                        src={cardIcon}
                        alt="card image"
                        style={{ width: '4.5rem', height: 'auto' }}
                    />
                </Box>
                <Typography
                    variant="subtitle2"
                    sx={{
                        fontWeight: 600,
                        fontSize: '2.5rem',
                        mb: theme.spacing(0.5),
                    }}
                >
                    {title}
                </Typography>
                <Typography variant="subtitle2" textAlign="justify">
                    {subtitle}
                </Typography>
            </Box>
        </Box>
    )
}
