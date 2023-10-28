import { Box, Grid, Typography } from '@mui/material'
import ServicesLayout from '../ServicesLayout'
import Image from 'next/image'
import backgroundImg from '../../../assets/services/air_freight_bg.png'
import titleImg from '../../../assets/services/air_freight_img.png'
import { AirFreightData } from '../../../data/servicesData'
import Benefits from '../../../components/services/Benefits'
export default function Home() {
    return (
        <ServicesLayout image={backgroundImg} title='Services'>
            <Box sx={{ mb: '2.5rem' }}>
                <Typography variant='h3' sx={{ textAlign: 'start', color: '#031225', marginBottom: '2.5rem' }}>
                    Air Freight
                </Typography>
                <Grid container spacing={2} sx={{ mb: '1rem' }}>
                    <Grid item xs={12} sm={6}>
                        <Typography
                            paragraph
                            variant='subtitle2'
                            sx={{ color: '#031225', fontWeight: '400', textAlign: 'start' }}
                        >
                            Muskan Container Lines Pvt Limited has extended its services to include airfreight, a
                            strategic move in response to the burgeoning demand from our discerning clientele. As a
                            seasoned player in the industry, we have maintained our position as the market leader by
                            consistently delivering innovative airfreight solutions. Our extensive experience equips us
                            to handle a diverse spectrum of shipments, ranging from large, intricate project-oriented
                            cargo to small, delicate, and even perishable items.
                        </Typography>
                        <Typography
                            paragraph
                            variant='subtitle2'
                            sx={{ color: '#031225', fontWeight: '400', textAlign: 'start' }}
                        >
                            Our commitment to excellence in airfreight is exemplified by the synergy between our global
                            network of associate offices and our express service. This seamless integration allows us to
                            offer highly efficient Air Import services from any corner of the world. We understand that
                            cost efficiency is paramount, and therefore, we provide economical service options while
                            ensuring that you have a choice of reliable carriers.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Image src={titleImg} alt='' style={{ width: '100%', height: 'auto' }} />
                    </Grid>
                </Grid>
                <Typography
                    paragraph
                    variant='subtitle2'
                    sx={{ color: '#031225', fontWeight: '400', textAlign: 'start' }}
                >
                    Our goal is to meet your routine and specialized shipping requirements with precision, ensuring
                    on-time collection and delivery to major cities across the globe.
                </Typography>
                <Box sx={{ my: '2.5rem' }}>
                    {AirFreightData.map((item, index) => (
                        <Benefits title={item.title} body={item.des} index={item.id} key={index} />
                    ))}
                </Box>
                <Typography
                    paragraph
                    variant='subtitle2'
                    sx={{ color: '#031225', fontWeight: '400', textAlign: 'start' }}
                >
                    Muskan Container Lines Pvt Limited has extended its services to encompass airfreight, responding to
                    the growing demand from our clients. Our leadership in the market is built on a foundation of
                    innovative solutions and a wealth of experience in handling diverse cargo types. We have cultivated
                    a global network that enables us to offer efficient Air Import services from destinations worldwide.
                    Our commitment to cost-efficiency, carrier choice, punctuality, and advanced tracking ensures that
                    we meet your airfreight needs with precision and reliability. Trust us to handle your air shipments,
                    whether they are large-scale projects or small, delicate items, with the utmost care and
                    professionalism, ensuring that they reach their destinations on time and intact.
                </Typography>
            </Box>
        </ServicesLayout>
    )
}
