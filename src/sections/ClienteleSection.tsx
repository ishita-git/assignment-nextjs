import Image from 'next/image'
import { Box, Container, Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { clientsData } from '../data/clientsData'
import ClienteleCard from '../components/ClienteleCard'
import ClientIconCard from '../components/ClientIconCard'
// swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'

export default function ClienteleSection() {
    const theme = useTheme()

    return (
        <Box sx={{ p: theme.spacing(4) }}>
            <Typography variant='h2'>Appreciated by some of the best in industry</Typography>
            <Container maxWidth='md' disableGutters sx={{ py: theme.spacing(2), position: 'relative' }}>
                <Box sx={{ my: theme.spacing(2) }}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={80}
                        loop={true}
                        speed={1200}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        keyboard={{
                            enabled: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Keyboard, Navigation, Pagination]}
                        className='mySwiper'
                    >
                        {clientsData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <ClienteleCard
                                        cardImage={item.cardImage}
                                        cardIcon={item.cardIcon}
                                        title={item.title}
                                        subtitle={item.subtitle}
                                    />
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>

                <Box sx={{ py: theme.spacing(2) }}>
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
                        breakpoints={{
                            200: { slidesPerView: 1 },
                            400: { slidesPerView: 2 },
                            600: { slidesPerView: 3 },
                            800: { slidesPerView: 4 },
                            1000: { slidesPerView: 5 },
                            1200: { slidesPerView: 6 },
                            1400: { slidesPerView: 7 },
                            1600: { slidesPerView: 8 },
                            1800: { slidesPerView: 9 },
                        }}
                        navigation={true}
                        modules={[Autoplay, Keyboard, Navigation, Pagination]}
                        className='mySwiper'
                    >
                        {clientsData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <ClientIconCard icon={item.cardIcon} />
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </Container>
        </Box>
    )
}
