import React from 'react'
import Image from 'next/image'
import { Box, Typography, Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { qualityPolicyData, keyAttributesData } from '../../data/aboutData'
import { clientsData } from '../../data/clientsData'

export default function AboutTab() {
    const theme = useTheme()
    return (
        <Box sx={{ mx: theme.spacing(12) }}>
            <Typography variant='h2' sx={{ mt: theme.spacing(4), mb: theme.spacing(2) }}>
                About Muskaan
            </Typography>
            <Box sx={{ mb: theme.spacing(6) }}>
                <AboutDescription body=' Muskan Container Lines Pvt. Ltd. stands as a prominent Shipping Agency, Liner Container operator, and Logistics solutions provider across the Indian Sub-continent. Our comprehensive Pan-India presence is dedicated to delivering top-notch solutions for Shipping, Logistics, and Transportation needs. We are committed to continuous improvement and ensuring excellence for our Clients, Vendors, Employees, and Stakeholders. Our representation spans multiple container agencies within ISC, M/E, SEA corridors, and our logistics operations span globally through a widespread network of agents.' />
                <AboutDescription body=" The inception of Muskan Container Lines Pvt. Ltd. was rooted in a strong desire to add value to our clients' experiences. Under the visionary leadership of our CEO, Mr. Deepak Trehan, with over 18 years of active industry engagement, MCLPL was established in India. Our proficient Core-team of Senior Managers and Staff across our Indian offices form the backbone of our operations. At Muskan, our central focus is on customer delight and value creation for our partners and team members. We strive to foster innovative ideas and inventive solutions within the Container trade. With this guiding mission, we dedicate ourselves to pursuing excellence across all our business endeavors." />
                <AboutDescription body="Our journey began in New Delhi, an industrial hub, where our sturdy infrastructure and an extensive trailer fleet propelled us to the forefront of freight logistics in India. This momentum allowed us to establish a distinct position in the competitive logistics landscape. With a dynamic team of seasoned professionals, armed with cutting-edge technology and deep industry insights, we've expanded globally. A robust domestic and international network supports us in consistently delivering high-quality services to our esteemed customers." />
                <AboutDescription body='Our footprint has been amplified with the establishment of our offices in Dubai, Port Klang, and Singapore, further solidifying our global presence.' />
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography textAlign={'start'} variant='h5' sx={{ color: '#031225', marginBottom: '1rem' }}>
                        Quality Policy
                    </Typography>
                    <Typography
                        textAlign={'start'}
                        variant='body1'
                        sx={{ color: '#031225', marginBottom: '1rem', lineHeight: '1.5rem' }}
                    >
                        Our commitment lies in elevating customer satisfaction by comprehending and fulfilling their
                        specific needs. To achieve this, we actively pursue the following goals:
                    </Typography>
                    <Typography
                        component={'ul'}
                        textAlign={'start'}
                        variant='body1'
                        sx={{ color: '#031225', ml: '1.25rem' }}
                    >
                        {qualityPolicyData.map((item, index) => (
                            <Typography
                                component={'li'}
                                textAlign={'start'}
                                variant='body1'
                                sx={{ color: '#031225', mb: '1rem', lineHeight: '1.5rem' }}
                                key={index}
                            >
                                {item}
                            </Typography>
                        ))}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography textAlign={'start'} variant='h5' sx={{ color: '#031225', marginBottom: '1rem' }}>
                        Key Attributes
                    </Typography>
                    <Typography
                        component={'ul'}
                        textAlign={'start'}
                        variant='body1'
                        sx={{ color: '#031225', ml: '1.25rem' }}
                    >
                        {keyAttributesData.map((item, index) => (
                            <Typography
                                component={'li'}
                                textAlign={'start'}
                                variant='body1'
                                sx={{ color: '#031225', mb: '1rem', lineHeight: '1.5rem' }}
                                key={index}
                            >
                                {item}
                            </Typography>
                        ))}
                    </Typography>
                </Grid>
            </Grid>
            <Typography variant='h2' sx={{ mt: theme.spacing(6), mb: theme.spacing(2) }}>
                Our Customer
            </Typography>
            <Box sx={{ display: 'flex', textAlign: 'center', flexWrap: 'wrap' }}>
                {clientsData.map((item, index) => (
                    <Box key={index} sx={{ mx: '1rem', mb: '3rem' }}>
                        <Image src={item.cardIcon} alt='icon' style={{ height: '3rem', width: 'auto' }} />
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

function AboutDescription({ body }: { body: String }) {
    return (
        <Typography
            variant='body2'
            sx={{ fontWeight: 400, color: '#031225', marginBottom: '1rem', lineHeight: '1.5rem' }}
            paragraph
        >
            {body}
        </Typography>
    )
}
