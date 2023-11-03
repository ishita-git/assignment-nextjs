import { Typography, Box } from '@mui/material'
import Image, { StaticImageData } from 'next/image'
import { useTheme } from '@mui/material/styles'
import VisibilityTracker, { AnimationType } from '../VisibilityTracker'

export default function CompanyInfoCard({
    title,
    des,
    coverImage,
}: {
    title: String
    des: String
    coverImage: string | StaticImageData
}) {
    const theme = useTheme()
    return (
            <Box sx={{ position: 'relative', mb: '1.5rem' }}>
                <Image
                    src={coverImage}
                    alt='card background'
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                />
                <Box
                    sx={{
                        px: theme.spacing(2.5),
                        py: theme.spacing(2),
                        top: 0,
                        left: 0,
                        width: '56%',
                        position: 'absolute',
                    }}
                >
                    <Typography variant='h3' sx={{ textAlign: 'start', mb: '0.5rem' }}>
                        {title}
                    </Typography>
                    <VisibilityTracker animationType={AnimationType.FADE} timeout={3500}>
                    <Typography
                        paragraph
                        variant='body1'
                        sx={{ lineHeight: '1.5rem', fontWeight: '400', color: '#FFFFFF', textAlign: 'start' }}
                    >
                        {des}
                    </Typography>
                    </VisibilityTracker>
                </Box>
            </Box>
    )
}
