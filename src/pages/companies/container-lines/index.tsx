import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Box, Container, Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import CompaniesLayout from '../CompaniesLayout'
import ServicesCards from '../../../components/services/ServicesCards'
import containerLinesBg from '../../../assets/companies/container-lines-bg.png'
import processBanner from '../../../assets/companies/process-banner.png'
import branchesMap from '../../../assets/companies/branches-map.png'
import insulatedContainer from '../../../assets/companies/muskan_conatiners/insulated_containers.png'
import openTopContainer from '../../../assets/companies/muskan_conatiners/open_to_containers.png'
import bulkContainer from '../../../assets/companies/muskan_conatiners/bult-containers.png'
import tankContainer from '../../../assets/companies/muskan_conatiners/tank-containers.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { ProcessData, OfficeLoactionIndia, OfficeLoactionInternational } from '../../../data/companiesData'
import StatisticsCard from '@/components/companies/StatisticsCard'
import CustomText from '@/components/companies/CustomText'

function ProcessSection() {
    return (
        <Box sx={{ position: 'relative' }}>
            <Image src={processBanner} alt='process banner' style={{ width: '100%', height: 'auto' }} />
            <Box sx={{ position: 'absolute', top: 0, width: '100%', px: '5rem' }}>
                <Typography variant='h3' sx={{ my: '3rem' }}>
                    Process
                </Typography>
                <Box sx={{ display: 'flex' }}>
                    {ProcessData.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                height: '20rem',
                                bgcolor: '#FFFFFF',
                                borderRadius: '1rem',
                                padding: '1.25rem',
                                mx: '1rem',
                            }}
                        >
                            <Image
                                src={item.image}
                                alt='card background'
                                style={{
                                    width: 'auto',
                                    height: '4rem',
                                }}
                            />
                            <Typography
                                variant='h6'
                                textAlign={'center'}
                                sx={{ fontWeight: 600, color: '#031225', my: '1rem' }}
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                variant='body1'
                                textAlign={'center'}
                                sx={{ color: '#031225', marginBottom: '1rem', fontWeight: 300 }}
                            >
                                {item.desc}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default function Home() {
    const theme = useTheme()

    return (
        <CompaniesLayout image={containerLinesBg} title={'Muskan Container Lines\nPvt Ltd.'}>
            <Box sx={{ px: theme.spacing(12) }}>
                <Container maxWidth='xl' disableGutters>
                    <Typography variant='h2' sx={{ textAlign: 'start', mb: "1rem" }}>
                        About Us
                    </Typography>
                    <CustomText text='Muskan Container Lines Pvt. Ltd. is a prominent Indian container operator, boasting the largest container fleet in India and the Indian subcontinent. With a unique track record in efficient fleet management across more than 300,000 routes domestically and internationally, we specialize in door-to-door integrated transportation and logistics solutions. These capabilities enable us to deliver container cargo to various destinations in India, the CIS, Europe, or Asia, using both in-house transportation assets and strategic partner collaborations. Our network of offices throughout the Indian subcontinent is seamlessly connected through a unified information system, ensuring efficient operations.' />
                    <Grid container spacing={2} sx={{ mb: '1rem', mt: '0.5rem' }}>
                        <Grid item xs={12} sm={6}>
                            <Typography
                                textAlign={'start'}
                                variant='h5'
                                sx={{ fontWeight: 600, color: '#031225', marginBottom: '1rem' }}
                            >
                                Offices in India
                            </Typography>
                            <Typography
                                component={'ul'}
                                textAlign={'start'}
                                variant='subtitle2'
                                sx={{ color: '#031225', ml: '1.25rem' }}
                            >
                                {OfficeLoactionIndia.map((item, index) => (
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
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography
                                textAlign={'start'}
                                variant='h5'
                                sx={{ fontWeight: 600, color: '#031225', marginBottom: '1rem' }}
                            >
                                International offices
                            </Typography>
                            <Typography
                                component={'ul'}
                                textAlign={'start'}
                                variant='subtitle2'
                                sx={{ color: '#031225', ml: '1.25rem' }}
                            >
                                {OfficeLoactionInternational.map((item, index) => (
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
                        </Grid>
                    </Grid>
                    <Typography
                        paragraph
                        variant='subtitle2'
                        sx={{ color: '#031225', fontWeight: '300', textAlign: 'start' }}
                    >
                        Shipping cargo often requires specialized containers to ensure safe and efficient
                        transportation. Our company provides a variety of specialized containers tailored to different
                        cargo needs. These include:{' '}
                    </Typography>{' '}
                    <Grid container spacing={1} sx={{ my: '4rem' }}>
                        <Grid item xs={12} sm={6}>
                            <ContainerType
                                title='Insulated Containers'
                                desc='Ideal for perishable goods, these containers maintain precise temperatures, keeping your cargo fresh.'
                                image={insulatedContainer}
                            />
                            <ContainerType
                                title='Bulk Containers'
                                desc='Perfect for transporting large quantities of loose cargo, such as grains or minerals.'
                                image={bulkContainer}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <ContainerType
                                title='Open Top Containers'
                                desc='Designed for oversize cargo, these containers have removable tops for easy loading and unloading.'
                                image={openTopContainer}
                            />
                            <ContainerType
                                title='Tank Containers'
                                desc='Specifically designed for liquid and chemical cargo, ensuring safe containment and transport.'
                                image={tankContainer}
                            />
                        </Grid>
                    </Grid>
                    <Typography variant='h3' sx={{ textAlign: 'start', mb: '2rem', color: '#1B1B1F' }}>
                        Statistics
                    </Typography>
                    <StatisticsCard
                        exporterRank='16'
                        importerRank='10'
                        tradeBalanceRank='136'
                        totalTradeAmtList={totalTradeAmtList}
                    />
                </Container>
            </Box>

            <ProcessSection />
            <ServicesCards companiesPage />
            <Box sx={{ px: theme.spacing(12) }}>
                <Container maxWidth='xl' disableGutters>
                    <Typography variant='h3' sx={{ textAlign: 'start', mb: '1rem', mt: '2rem', color: '#1B1B1F' }}>
                        Our Branches
                    </Typography>
                    <Image src={branchesMap} alt='branches' style={{ width: '40rem', height: 'auto' }} />
                </Container>
            </Box>
        </CompaniesLayout>
    )
}

function ContainerType({ image, title, desc }: { image: string | StaticImageData; title: String; desc: String }) {
    return (
        <Box sx={{ mb: '2rem' }}>
            <Grid container alignItems='center'>
                <Grid item xs={4}>
                    <Image src={image} alt='' style={{ height: 'auto', width: '75%' }} />
                </Grid>
                <Grid item xs={8}>
                    <Typography
                        variant='h4'
                        textAlign={'start'}
                        sx={{ fontWeight: 600, color: '#031225', marginBottom: '0.5rem' }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant='subtitle2'
                        textAlign={'start'}
                        sx={{ color: '#031225', marginBottom: '1rem', fontWeight: 300 }}
                    >
                        {desc}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}
const totalTradeAmtList = ['$394,813,673,347', '$570,402,004,491', '$175,588,331,144', '22.45%', '26.92%']
