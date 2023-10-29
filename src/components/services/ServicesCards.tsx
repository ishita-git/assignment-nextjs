import React from 'react'
import { Box, Container, Link, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { servicesData } from '../../data/servicesData'
// swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'

export default function ServicesCards({ companiesPage }: { companiesPage?: boolean }) {
    const theme = useTheme()

    return (
        <Box sx={{ px: theme.spacing(12), pt: theme.spacing(companiesPage ? 1 : 4) }}>
            <Container disableGutters maxWidth='xl'>
                {companiesPage ? (
                    <Typography variant='h3' sx={{ textAlign: 'start', mb: '1rem', mt: '4rem', color: '#1B1B1F' }}>
                        Our Services
                    </Typography>
                ) : (
                    <Typography variant='h2' textAlign='start'>
                        Other Services
                    </Typography>
                )}

                <Box sx={{ cursor: 'pointer', mt: theme.spacing(2) }}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={12}
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
                                <Link href={item.link}>
                                    <Box sx={{ position: 'relative', height: '15rem' }}>
                                        <Image
                                            src={item.horizontalCard}
                                            alt='card background'
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                            }}
                                        />
                                        <Typography variant='h6' sx={{ p: theme.spacing(1), position: 'absolute' }}>
                                            {item.title}
                                        </Typography>
                                    </Box>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </Container>
        </Box>
    )
}
