import { Box, Grid, Typography } from '@mui/material'
import ServicesLayout from '../ServicesLayout'
import Image from 'next/image'
import backgroundImg from '../../../assets/services/lcl_bg.webp'
import titleImg from '../../../assets/services/lcl_img.webp'

export default function Home() {
    return (
        <ServicesLayout image={backgroundImg} title='Services'>
            <Box sx={{ mb: '2.5rem' }}>
                <Typography variant='h3' sx={{ textAlign: 'start', color: '#031225', marginBottom: '2.5rem' }}>
                    LCL Consolidation Services
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography
                            paragraph
                            variant='subtitle2'
                            sx={{ color: '#031225', fontWeight: '400', textAlign: 'start' }}
                        >
                            Over a considerable span of time, our involvement in this endeavor has been robust,
                            encompassing various Indian load ports and Inland Container Depots (ICDs). We have
                            consistently managed shipments to a diverse array of Asian destinations, strategically
                            leveraging hub ports like Jebel Ali, Singapore, and Port Klang. We actively seek
                            opportunities to expand this business segment, and what distinguishes us is our systematic
                            approach, backed by our in-house liner company and robust insurance coverage.
                        </Typography>
                        <Typography
                            paragraph
                            variant='subtitle2'
                            sx={{ color: '#031225', fontWeight: '400', textAlign: 'start' }}
                        >
                            For a significant duration, we have been actively engaged in this endeavor across various
                            Indian load ports and Inland Container Depots (ICDs). Our expertise lies in efficiently
                            handling shipments to a range of Asian destinations, making strategic use of hub ports such
                            as Jebel Ali, Singapore, and Port Klang.
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
                    Throughout a substantial period, our involvement in this field has been marked by dedication,
                    spanning numerous Indian load ports and Inland Container Depots (ICDs). We excel in managing
                    shipments to diverse Asian destinations, strategically utilizing hub ports like Jebel Ali,
                    Singapore, and Port Klang. As we continue to explore opportunities for expansion in this business
                    segment, our systematic approach, bolstered by our in-house liner company and comprehensive
                    insurance coverage, sets us apart.
                </Typography>
                <Typography
                    paragraph
                    variant='subtitle2'
                    sx={{ color: '#031225', fontWeight: '400', textAlign: 'start' }}
                >
                    For quite some time, we have actively pursued this endeavor across various Indian load ports and
                    Inland Container Depots (ICDs). Our expertise lies in efficiently handling shipments to a variety of
                    Asian destinations, strategically utilizing hub ports like Jebel Ali, Singapore, and Port Klang. We
                    are committed to expanding in this business segment, and our distinctive approach is characterized
                    by its systematic nature, supported by our in-house liner company and strong insurance coverage.
                </Typography>
                <Typography
                    paragraph
                    variant='subtitle2'
                    sx={{ color: '#031225', fontWeight: '400', textAlign: 'start' }}
                >
                    Our long-standing involvement in this activity has been marked by active operations across various
                    Indian load ports and Inland Container Depots (ICDs). We excel in managing shipments to diverse
                    Asian destinations, with a strategic focus on key hub ports like Jebel Ali, Singapore, and Port
                    Klang. Our commitment to expanding in this business segment remains unwavering, and we are
                    distinguished by our systematic approach, underpinned by our in-house liner company and robust
                    insurance coverage.
                </Typography>
            </Box>
        </ServicesLayout>
    )
}
