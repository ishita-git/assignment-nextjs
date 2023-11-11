import { Typography, Box, useMediaQuery } from '@mui/material'
import Image, { StaticImageData } from 'next/image'
import { useTheme } from '@mui/material/styles'
import VisibilityTracker, { AnimationType } from '../VisibilityTracker'

declare type CompanyCardProps = {
    title: String
    des: String
    coverImage: string | StaticImageData
}

export default function CompanyInfoCard({ title, des, coverImage }: CompanyCardProps) {
    const theme = useTheme()
    const wideTabletMode = useMediaQuery('(max-width:700px) and (max-width:799px)')
    const tabletMode = useMediaQuery('(max-width:699px)')
    const mobileMode = useMediaQuery('(max-width:599px)')
    const ultraMobileMode = useMediaQuery('(max-width:449px)')

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
                    px: theme.spacing(mobileMode ? 1 : 2.5),
                    py: theme.spacing(mobileMode ? 1 : 2),
                    top: 0,
                    left: 0,
                    width: tabletMode ? '100%' : wideTabletMode ? '80%' : '56%',
                    position: 'absolute',
                }}
            >
                <Typography
                    variant='h3'
                    sx={{
                        textAlign: 'start',
                        mb: '0.5rem',
                        lineHeight: ultraMobileMode ? '1.2rem' : mobileMode ? '1.8rem' : '2.6rem',
                        fontSize: ultraMobileMode ? '1rem' : mobileMode ? '1.4rem' : '2rem',
                    }}
                >
                    {title}
                </Typography>
                <VisibilityTracker animationType={AnimationType.FADE} timeout={3500}>
                    <Typography
                        paragraph
                        variant='body1'
                        sx={{
                            lineHeight: mobileMode ? '1rem' : '1.5rem',
                            fontSize: ultraMobileMode ? '0.75rem' : '1rem',
                            fontWeight: '400',
                            color: '#FFFFFF',
                            textAlign: 'start',
                        }}
                    >
                        {des}
                    </Typography>
                </VisibilityTracker>
            </Box>
        </Box>
    )
}
