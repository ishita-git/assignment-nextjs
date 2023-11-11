import { Box, Grid, Typography } from '@mui/material'
import ServicesLayout from '../ServicesLayout'
import Image from 'next/image'
import backgroundImg from '../../../assets/services/project_cargo_bg.webp'
import titleImg from '../../../assets/services/project_cargo_img.webp'

export default function Home() {
    return (
        <ServicesLayout image={backgroundImg} title='Services' subtitle='Project Cargo'>
            <Box sx={{ mb: '2.5rem' }}>
                <Typography variant='h3' sx={{ textAlign: 'start', color: '#031225', marginBottom: '2.5rem' }}>
                    Project Cargo
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography
                            paragraph
                            variant='subtitle2'
                            sx={{ color: '#031225', fontWeight: '400', textAlign: 'justify' }}
                        >
                            For more than a decade, our Group has been at the forefront of Project Cargo Logistics
                            through our dedicated entity, now known as Muskan Container Lines Private Limited. Over this
                            period, we have earned the trust of a diverse clientele who appreciate our resourcefulness
                            in this specialized field. Our success in Project Cargo Logistics lies in our ability to
                            tailor our services to meet the unique requirements of each project.
                        </Typography>
                        <Typography
                            paragraph
                            variant='subtitle2'
                            sx={{ color: '#031225', fontWeight: '400', textAlign: 'justify' }}
                        >
                            Clients depend on us as a reliable logistics partner, confident that we can provide the
                            necessary equipment and vessels for the transportation of cargo of varying sizes and shapes
                            to destinations across the globe. Muskan Container Lines has consistently demonstrated its
                            capability in executing turnkey projects for globally renowned companies, embodying our
                            motto, "Passionate about projects."
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Image src={titleImg} alt='' style={{ width: '100%', height: 'auto' }} />
                    </Grid>
                </Grid>

                <Typography
                    paragraph
                    variant='subtitle2'
                    sx={{ color: '#031225', fontWeight: '400', textAlign: 'justify' }}
                >
                    Our global offices play a pivotal role in ensuring the safe, secure, and timely delivery of project
                    consignments. Often, our scope of activities extends beyond transportation and includes tasks such
                    as dismantling and installation, reflecting our commitment to providing comprehensive project
                    logistics solutions.
                </Typography>
                <Typography
                    paragraph
                    variant='subtitle2'
                    sx={{ color: '#031225', fontWeight: '400', textAlign: 'justify' }}
                >
                    A prime example of our growing footprint in the project cargo domain is our Chennai office, which
                    has achieved significant milestones within a few months of establishment. This office has
                    successfully managed the movement of several project cargo consignments, further strengthening our
                    reputation as a trusted provider of project logistics services.
                </Typography>
                <Typography
                    paragraph
                    variant='subtitle2'
                    sx={{ color: '#031225', fontWeight: '400', textAlign: 'justify' }}
                >
                    Muskan Container Lines Private Limited boasts a strong legacy of excellence in Project Cargo
                    Logistics, spanning more than a decade. Our ability to meet the unique needs of our clients in this
                    field has garnered a loyal and satisfied customer base. As a trusted logistics partner, we excel in
                    providing the necessary equipment and vessels for transporting cargo worldwide. Guided by our
                    commitment expressed in the phrase "Passionate about projects," we continue to expand our presence
                    and capabilities in project logistics, exemplified by the success of our Chennai office, which is
                    now an integral part of our project logistics operations.
                </Typography>
            </Box>
        </ServicesLayout>
    )
}
