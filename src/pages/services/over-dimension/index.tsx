import { Box, Grid, Typography } from '@mui/material'
import ServicesLayout from '../ServicesLayout'
import Image from 'next/image'
import backgroundImg from '@/assets/services/over_dimension_bg.webp'
import titleImg from '@/assets/services/over_dimension_img.webp'

export default function Home() {
    return (
        <ServicesLayout image={backgroundImg} title='Services' subtitle='Over Dimension Cargo'>
            <Box sx={{ mb: '2.5rem' }}>
                <Typography variant='h3' sx={{ textAlign: 'start', color: '#031225', marginBottom: '2.5rem' }}>
                    Over Dimension Cargo
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography paragraph variant='subtitle2' sx={{ color: '#031225', fontWeight: '400', textAlign: 'justify' }}>
                            The Group has recently witnessed an impressive surge in its commitment to the transportation of oversized cargo.
                            This remarkable growth is palpable when considering the substantial increase in the procurement of specialized
                            equipment, which includes flat racks, open tops, and hard tops, available in both 20-foot and 40-foot
                            configurations. What was once primarily confined to the transport hubs of Nhava Sheva, Jebel Ali, and other
                            ports within the Arabian Gulf has now evolved into a comprehensive initiative spanning various regions.
                        </Typography>
                        <Typography paragraph variant='subtitle2' sx={{ color: '#031225', fontWeight: '400', textAlign: 'justify' }}>
                            Expanding its reach far beyond its initial confines, this commitment has extended to encompass a multitude of
                            locations in South East Asia, China, East and West Africa, additional ISC (Indian Subcontinent) ports, and even
                            CIS (Commonwealth of Independent States) destinations.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Image src={titleImg} alt='' style={{ width: '100%', height: 'auto' }} />
                    </Grid>
                </Grid>
                <Typography paragraph variant='subtitle2' sx={{ color: '#031225', fontWeight: '400', textAlign: 'justify' }}>
                    To efficiently and professionally oversee the entire fleet dedicated to this specialized cargo transport, the Group
                    companies have come together to pool all relevant equipment. This strategic consolidation has paved the way for the
                    establishment of a dedicated global commercial management cell, headquartered in Mumbai. This specialized unit is tasked
                    with ensuring the seamless and effective operation of the expanded fleet, reflecting the Group's unwavering commitment
                    to meeting the unique demands of transporting over-dimension cargo on a global scale.
                </Typography>
            </Box>
        </ServicesLayout>
    )
}
