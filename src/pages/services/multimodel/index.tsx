import { Box, Grid, Typography } from '@mui/material'
import ServicesLayout from '../ServicesLayout'
import Image from 'next/image'
import backgroundImg from '@/assets/services/multi_model_bg.webp'
import titleImg from '@/assets/services/multi_model_img.webp'

export default function Home() {
    return (
        <ServicesLayout image={backgroundImg} title='Services' subtitle='Multi Model - Transportation'>
            <Box sx={{ mb: '2.5rem' }}>
                <Typography variant='h3' sx={{ textAlign: 'start', color: '#031225', marginBottom: '2.5rem' }}>
                    Multi Model - Transportation
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography paragraph variant='subtitle2' sx={{ color: '#031225', fontWeight: '400', textAlign: 'justify' }}>
                            Muskan Container Lines Pvt. Ltd. excels in Multimodal Transport services, seamlessly integrating air, sea, and
                            land transportation into an efficient and interconnected chain. This holistic approach ensures cost-effective,
                            door-to-door cargo movement from a single source. Our extensive network, a key component of our Supply Chain
                            Management System, enhances overall cargo efficiency.
                        </Typography>
                        <Typography paragraph variant='subtitle2' sx={{ color: '#031225', fontWeight: '400', textAlign: 'justify' }}>
                            We are dedicated to proactively addressing transportation challenges, aligning solutions with your specific
                            needs. Beyond our reputation as a shipping company, our expertise in multimodal transport sets us apart. We have
                            a proven record in managing cargo across multiple modes under a single contract. Our strong network of
                            relationships with transport operators enables us to offer top-tier services.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Image src={titleImg} alt='' style={{ width: '100%', height: 'auto' }} />
                    </Grid>
                </Grid>

                <Typography paragraph variant='subtitle2' sx={{ color: '#031225', fontWeight: '400', textAlign: 'justify' }}>
                    Containerization's profound impact on our industry is evident in our commitment to multimodal transport. This approach
                    streamlines coordination and minimizes time loss and risks associated with cargo handling at trans-shipment points. In
                    essence, our multimodal services provide a comprehensive solution to modern logistics challenges.
                </Typography>
                <Typography paragraph variant='subtitle2' sx={{ color: '#031225', fontWeight: '400', textAlign: 'justify' }}>
                    In summary, Muskan Container Lines Pvt. Ltd.'s Multimodal Transport services embody our dedication to comprehensive and
                    efficient logistics solutions. Our seamless integration of air, sea, and land modes ensures timely and cost-effective
                    cargo delivery. We extend beyond traditional shipping, adapting to the evolving needs of our clients. Rely on us for
                    tailored, efficient, and reliable transportation solutions that optimize your supply chain while minimizing risks during
                    cargo transfers.
                </Typography>
            </Box>
        </ServicesLayout>
    )
}
