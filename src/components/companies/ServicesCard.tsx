import { Box, Typography } from '@mui/material'
import Image, { StaticImageData } from 'next/image'

export default function ServicesCard({
    title,
    desc,
    image,
}: {
    title: String
    desc: String
    image: string | StaticImageData
}) {
    return (
        <Box sx={{ position: 'relative' }}>
            <Image src={image} alt='' style={{ height: 'auto', width: '100%' }} />
            <Box sx={{ position: 'absolute', top: '0', left: '0', p: '1.5rem' }}>
                <Typography variant='h6' sx={{ textAlign: 'start', my: '1rem', color: '#FFFFFF', fontWeight: 'bold' }}>
                    {title}
                </Typography>
                <Typography variant='body2' sx={{ textAlign: 'start', color: '#FFFFFF', fontWeight: 300 }}>
                    {desc}
                </Typography>
                {title == 'Our Commitment' ? (
                    <Typography
                        component={'ul'}
                        textAlign={'start'}
                        variant='body2'
                        sx={{ color: '#FFFFFF', ml: '1.25rem', mt: '2rem' }}
                    >
                        {ourCommitments.map((item, index) => (
                            <Typography
                                component={'li'}
                                textAlign={'start'}
                                variant='body2'
                                sx={{ color: '#FFFFFF', mb: '1rem', fontWeight: 300 }}
                                key={index}
                            >
                                {item}
                            </Typography>
                        ))}
                    </Typography>
                ) : (
                    <></>
                )}
            </Box>
        </Box>
    )
}

const ourCommitments = [
    'Customer Loyalty Drives Success.',
    ' Understand Customer Needs.',
    ' Excellence in Quality and Service.',
]
