import { Box, Grid, Typography } from '@mui/material'
import ServicesLayout from '../ServicesLayout'
import Image from 'next/image'
import backgroundImg from '../../../assets/services/custom_clearence_bg.png'
import titleImg from '../../../assets/services/custom_clearence_img.png'

export default function Home() {
    return (
        <ServicesLayout image={backgroundImg} title='Services'>
            <Box sx={{ mb: '2.5rem' }}>
                <Typography variant='h3' sx={{ textAlign: 'start', color: '#031225', marginBottom: '2.5rem' }}>
                    Custom Clearance
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography
                            paragraph
                            variant='subtitle2'
                            sx={{ color: '#031225', fontWeight: '400', textAlign: 'start' }}
                        >
                            Import Customs Clearance involves a comprehensive range of services, including HSN
                            classification, duty assessment, and the preparation of bills of entry. This encompasses the
                            entire customs clearance process, from assessment and customs examination to obtaining
                            customs clearance and arranging dispatch and delivery to the destination.
                        </Typography>
                        <Typography
                            paragraph
                            variant='subtitle2'
                            sx={{ color: '#031225', fontWeight: '400', textAlign: 'start' }}
                        >
                            On the export front, our services encompass the preparation of shipping bills, typically
                            based on the shipper's letter of instruction. We also handle classification for drawback,
                            DEPB, or DEEC, receipt of goods, measurement, weighing, marking, labeling, and the
                            processing of customs clearance. This includes customs examination and obtaining customs
                            clearance, followed by handing over the consignment to the international carrier.
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
                    Our clearance services are seamlessly managed through our advanced software, Logi-Sys. This software
                    facilitates the smooth flow of data interchange, including the receipt of soft copies of bills of
                    entry and shipping bills. It plays a vital role in assisting valuation procedures, filing,
                    amendments, cancellations, and the filing and pursuit of refund claims. Additionally, it supports
                    project imports/exports and fosters effective liaison with allied agencies.{' '}
                </Typography>
                <Typography
                    paragraph
                    variant='subtitle2'
                    sx={{ color: '#031225', fontWeight: '400', textAlign: 'start' }}
                >
                    Our excellent rapport with customs officers ensures expedited clearance and the prompt release of
                    consignments for imports or the relevant bill of lading for exports. This efficiency translates into
                    cost savings for you, as it enables faster disposal of imported consignments and expedites the
                    negotiation of documents for quicker realization of proceeds.
                </Typography>
            </Box>
        </ServicesLayout>
    )
}
