import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { servicesData } from '../../data/servicesData'
// swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'

export default function ServicesSection() {
    const theme = useTheme()

    return (
        <Box sx={{ mt: theme.spacing(8), mb: theme.spacing(4), px: theme.spacing(4) }}>
            <Container disableGutters maxWidth='xl'>
                <Typography variant='h2'>Other Services</Typography>

                <Box sx={{ cursor: 'pointer', my: theme.spacing(6) }}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        speed={1200}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
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
                                    {/* <CarouselCard
                                        coverImage={item.coverImage}
                                        footerImage={item.footerImage}
                                        title={item.title}
                                        subtitle={item.subtitle}
                                    /> */}
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </Container>
        </Box>
    )
}
