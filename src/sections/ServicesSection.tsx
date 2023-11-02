import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { servicesData } from '../data/servicesData'
import CarouselCard from '../components/CaraousalCard'
// swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'

export default function ServicesSection() {
    const theme = useTheme()

    return (
        <Box sx={{ mt: theme.spacing(18), px: theme.spacing(4) }} id='services'>
            <Container disableGutters maxWidth='xl'>
                <Typography variant='h2' textAlign='center'>
                    Our Services
                </Typography>

                <Box sx={{ my: theme.spacing(6) }}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        speed={1200}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        keyboard={{
                            enabled: true,
                        }}
                        pagination={{
                            dynamicBullets: true,
                            clickable: true,
                        }}
                        breakpoints={{
                            200: { slidesPerView: 1 },
                            550: { slidesPerView: 2 },
                            750: { slidesPerView: 3 },
                            1000: { slidesPerView: 4 },
                        }}
                        navigation={true}
                        modules={[Autoplay, Keyboard, Navigation, Pagination]}
                        className='mySwiper'
                    >
                        {servicesData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <CarouselCard
                                        coverImage={item.coverImage}
                                        footerImage={item.footerImage}
                                        title={item.title}
                                        subtitle={item.subtitle}
                                        href={item.link}
                                    />
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </Container>
        </Box>
    )
}
