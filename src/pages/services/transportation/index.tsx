import { Box, Grid, Typography } from '@mui/material'
import ServicesLayout from '../ServicesLayout'
import Image from 'next/image'
import backgroundImg from '../../../assets/services/transport_bg.png'
import titleImg from '../../../assets/services/transport_img.png'
import { TransportationData } from '../../../data/servicesData'
import Benefits from '../../../components/services/Benefits'
export default function Home() {
    return (
        <ServicesLayout image={backgroundImg} title='Services'>
            <Box sx={{ mb: '2.5rem' }}>
                <Typography variant='h3' sx={{ textAlign: 'start', color: '#031225', marginBottom: '2.5rem' }}>
                    Transportation
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography
                            paragraph
                            variant='subtitle2'
                            sx={{ color: '#031225', fontWeight: '400', textAlign: 'start' }}
                        >
                            Muskan Container Lines offers an extensive array of trucking and intermodal services,
                            providing our clients with a comprehensive transportation solution. Our commitment to
                            proficiency ensures that our clients can place their trust in our services, guaranteeing
                            timely and secure delivery of their consignments. Within our broader supply chain management
                            system, our inland transportation network functions as a crucial link, seamlessly connecting
                            various aspects of cargo movement.
                        </Typography>
                        <Typography
                            paragraph
                            variant='subtitle2'
                            sx={{ color: '#031225', fontWeight: '400', textAlign: 'start' }}
                        >
                            We have at our disposal a wide-ranging fleet of trucks, trailers, and other inland
                            transportation vehicles.
                        </Typography>
                        <Typography
                            paragraph
                            variant='subtitle2'
                            sx={{ color: '#031225', fontWeight: '400', textAlign: 'start' }}
                        >
                            These assets are instrumental in facilitating the movement of your cargo from its point of
                            origin to the port of dispatch and from the port of arrival to its final destination. Our
                            approach to land transportation is marked by meticulous attention to detail, ensuring that
                            every facet is optimized for efficiency and reliability.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Image src={titleImg} alt='' style={{ width: '100%', height: 'auto' }} />
                    </Grid>
                </Grid>

                <Box sx={{ marginTop: '2.5rem' }}>
                    {TransportationData.map((item, index) => (
                        <Benefits title={item.title} body={item.des} index={item.id} key={index} />
                    ))}
                </Box>
            </Box>
        </ServicesLayout>
    )
}
