import React, { useState } from 'react';
import Image from 'next/image'
import { Box, Container, Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import CompaniesLayout from '../CompaniesLayout'
import ServicesCards from '../../../components/services/ServicesCards'
import logisticsBg from '../../../assets/companies/logistics-bg.webp'
import titleImg from '../../../assets/services/empty_container_img.webp'
import { ContainerType, ChooseUsData } from '../../../data/companiesData'
import CustomText from '@/components/companies/CustomText'
export default function Home() {
    const theme = useTheme()
    const [hoveredImage, setHoveredImage] = useState(null);

    const handleMouseEnter = (index: any) => {
        setHoveredImage(index);
    };

    const handleMouseLeave = () => {
        setHoveredImage(null);
    };


    return (
        <CompaniesLayout image={logisticsBg} title='Muskan Logistics'>
            <Box sx={{ px: theme.spacing(12) }}>
                <Container maxWidth='xl' disableGutters>
                    <Typography variant='h2' sx={{ textAlign: 'start', mb: '1rem', color: '#1B1B1F' }}>
                        About Us
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <CustomText text="We hold the prestigious position of being the world's largest lessor of intermodal containers, those standardized steel containers indispensable for the transportation of goods by sea, rail, or road. These intermodal containers are crucial for their efficiency in handling, serving as the primary method for shipping numerous goods and materials across international borders. Our operations in equipment leasing encompass a comprehensive range of activities, including the acquisition, leasing, re-leasing, and eventual sale of various types of intermodal transportation equipment. We also engage in the acquisition of containers from shipping line customers and other container sellers, subsequently reselling these containers to container retailers and users for purposes such as storage or one-way shipments." />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Image src={titleImg} alt='' style={{ width: '100%', height: 'auto' }} />
                        </Grid>
                    </Grid>
                    <CustomText text='Our expansive global operational network positions us as a premier provider of container supply services to our customers. Additionally, our significant scale allows us to operate with the most competitive cost ratios in the industry.' />
                    <CustomText text='With a formidable fleet comprising over 1500 twenty-foot containers, Muskan Logistic leases its containers to virtually every major container shipping line globally, earning recognition as a prominent container provider to the top global container shipping lines. Through our extensive global network, spanning 15 offices across 5 countries, Muskan Logistic extends access to its containers via approximately 50 third-party owned container depot facilities in these countries.' />
                    <Typography
                        variant='h3'
                        sx={{ textAlign: 'start', mt: '3rem', mb: '1rem', color: '#1B1B1F', fontWeight: 500 }}
                    >
                        Our Conatiners
                    </Typography>
                    <CustomText text='Our comprehensive container offerings encompass both new and used sea and dry cargo containers, available in various types. Whether you require standard containers or specialized equipment like flat racks, tanks, double-door, or side-door containers, we have a solution to meet your specific needs.' />
                    <Box sx={{ display: 'flex', textAlign: 'center', flexWrap: 'wrap', mb: '3rem' }}>
                        {ContainerType.map((item, index) => (
                            <Box
                                key={index}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                sx={{
                                    bgcolor: '#FFFFFF',
                                    margin: '2rem 1rem',
                                    width: '30%',
                                    px: theme.spacing(1.25),
                                    pt: theme.spacing(1.5),
                                    borderRadius: '1rem',
                                    height: '25rem',
                                }}
                            >
                                <Typography
                                    variant='h6'
                                    sx={{ color: '#031225', fontWeight: 600, textAlign: 'start', mb: '1rem' }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    paragraph
                                    variant='body1'
                                    sx={{ color: '#031225', fontWeight: 300, textAlign: 'start', mb: '2rem' }}
                                >
                                    {item.desc}
                                </Typography>
                                <Image
                                    src={item.image}
                                    alt=''
                                    style={{
                                        height: '10rem',
                                        width: 'auto',
                                        marginTop: theme.spacing(1),
                                        transition: 'transform 0.4s',
                                        transform: hoveredImage === index ? 'scale(1.1)' : 'scale(1)',
                                    }}
                                />
                            </Box>
                        ))}
                    </Box>
                    <Typography variant='h3' sx={{ textAlign: 'start', mt: theme.spacing(6), color: '#1B1B1F' }}>
                        Why Choose Us?
                    </Typography>
                    <CustomText text='Our containers are versatile and compliant with global standards, ideal for sea, truck, rail transportation, and secure storage.' />
                    <Typography
                        component={'ul'}
                        textAlign={'start'}
                        variant='body1'
                        sx={{ color: '#031225', ml: '1.25rem' }}
                    >
                        {ChooseUsData.map((item, index) => (
                            <Typography
                                component={'li'}
                                textAlign={'start'}
                                variant='subtitle2'
                                sx={{ color: '#031225', mb: '1rem', fontWeight: 300 }}
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
