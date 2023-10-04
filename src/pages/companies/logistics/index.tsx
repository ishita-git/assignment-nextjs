import React from 'react'
import Image from 'next/image'
import { Box, Container, Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import CompaniesLayout from '../CompaniesLayout'
import ServicesCards from '../../../components/services/ServicesCards'
import logisticsBg from '../../../assets/companies/logistics-bg.png'
import titleImg from '../../../assets/services/empty_container_img.png'
import { ContainerType, ChooseUsData } from '../../../data/companiesData'
export default function Home() {
    const theme = useTheme()

    return (
        <CompaniesLayout image={logisticsBg} title='Muskan Logistics'>
            <Box sx={{ px: theme.spacing(4) }}>
                <Container maxWidth='xl' disableGutters>
                    <Typography variant='h3' sx={{ textAlign: 'start', mb: '1rem', color: '#1B1B1F' }}>
                        About Us
                    </Typography>
                    <Grid container spacing={2} alignItems='center' sx={{ mb: '1rem' }}>
                        <Grid item xs={12} sm={6}>
                            <Typography
                                paragraph
                                variant='h5'
                                sx={{ color: '#031225', fontWeight: '400', textAlign: 'start' }}
                            >
                                We hold the prestigious position of being the world's largest lessor of intermodal
                                containers, those standardized steel containers indispensable for the transportation of
                                goods by sea, rail, or road. These intermodal containers are crucial for their
                                efficiency in handling, serving as the primary method for shipping numerous goods and
                                materials across international borders. Our operations in equipment leasing encompass a
                                comprehensive range of activities, including the acquisition, leasing, re-leasing, and
                                eventual sale of various types of intermodal transportation equipment. We also engage in
                                the acquisition of containers from shipping line customers and other container sellers,
                                subsequently reselling these containers to container retailers and users for purposes
                                such as storage or one-way shipments.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Image src={titleImg} alt='' style={{ width: '100%', height: 'auto' }} />
                        </Grid>
                    </Grid>
                    <Typography paragraph variant='h5' sx={{ color: '#031225', fontWeight: '400', textAlign: 'start' }}>
                        Our expansive global operational network positions us as a premier provider of container supply
                        services to our customers. Additionally, our significant scale allows us to operate with the
                        most competitive cost ratios in the industry.
                    </Typography>
                    <Typography paragraph variant='h5' sx={{ color: '#031225', fontWeight: '400', textAlign: 'start' }}>
                        With a formidable fleet comprising over 1500 twenty-foot containers, Muskan Logistic leases its
                        containers to virtually every major container shipping line globally, earning recognition as a
                        prominent container provider to the top global container shipping lines. Through our extensive
                        global network, spanning 15 offices across 5 countries, Muskan Logistic extends access to its
                        containers via approximately 50 third-party owned container depot facilities in these countries.
                    </Typography>

                    <Typography variant='h3' sx={{ textAlign: 'start', mt: '3rem', mb: '1rem', color: '#1B1B1F' }}>
                        Our Conatiners
                    </Typography>
                    <Typography paragraph variant='h5' sx={{ color: '#031225', fontWeight: '400', textAlign: 'start' }}>
                        Our comprehensive container offerings encompass both new and used sea and dry cargo containers,
                        available in various types. Whether you require standard containers or specialized equipment
                        like flat racks, tanks, double-door, or side-door containers, we have a solution to meet your
                        specific needs.
                    </Typography>
                    <Box sx={{ display: 'flex', textAlign: 'center', flexWrap: 'wrap' }}>
                        {ContainerType.map((item, index) => (
                            <Box
                                key={index}
                                sx={{
                                    bgcolor: '#FFFFFF',
                                    margin: '2rem 1rem',
                                    width: '30%',
                                    p: '1.25rem',
                                    borderRadius: '1rem',
                                    height: '22rem',
                                }}
                            >
                                <Typography
                                    variant='h5'
                                    sx={{ color: '#031225', fontWeight: '400', textAlign: 'start' }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    paragraph
                                    variant='body1'
                                    sx={{ color: '#031225', fontWeight: '400', textAlign: 'start' }}
                                >
                                    {item.desc}
                                </Typography>
                                <Image
                                    src={item.image}
                                    alt=''
                                    style={{ height: '12rem', width: 'auto', marginTop: '1rem' }}
                                />
                            </Box>
                        ))}
                    </Box>
                    <Typography variant='h3' sx={{ textAlign: 'start', my: '1rem', color: '#1B1B1F' }}>
                        Why Choose Us?
                    </Typography>
                    <Typography
                        component={'ul'}
                        textAlign={'start'}
                        variant='body1'
                        sx={{ color: '#031225', ml: '1.25rem', mb: '4rem' }}
                    >
                        {ChooseUsData.map((item, index) => (
                            <Typography
                                component={'li'}
                                textAlign={'start'}
                                variant='body1'
                                sx={{ color: '#031225', mb: '1rem' }}
                                key={index}
                            >
                                {item}
                            </Typography>
                        ))}
                    </Typography>
                </Container>
            </Box>

            <ServicesCards companiesPage />
        </CompaniesLayout>
    )
}
