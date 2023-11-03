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
                <Typography variant='h3' sx={{ textAlign: companiesPage?'start':'center', mb: '1rem', mt: '4rem', color: '#1B1B1F' }}>
                    {companiesPage ? 'Our Services' : ' Other Services'}
                </Typography>

                <Box sx={{ cursor: 'pointer', mt: companiesPage?'0rem': theme.spacing(2) }}>
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
                                    <Box sx={{  height: '15rem',display:'flex', flexDirection:'column',justifyContent:"center",alignItems:"center" }}>
                                        <Image
                                            src={item.horizontalCard}
                                            alt='card background'
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                            }}
                                        />
                                        <Typography
                                            variant='h6'
                                            textAlign='center'
                                            sx={{ p: theme.spacing(1), position: 'absolute',fontWeight:600 }}
                                        >
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
