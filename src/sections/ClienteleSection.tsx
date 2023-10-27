import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { Box, Container, Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { clientsData } from '../data/clientsData'
import ClienteleCard from '../components/ClienteleCard'
import ClientIconCard from '../components/ClientIconCard'
// swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Keyboard, FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

export default function ClienteleSection() {
    const theme = useTheme()
    const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null)

    return (
        <Box sx={{ p: theme.spacing(4) }}>
            <Typography variant='h2'>Appreciated by some of the best in industry</Typography>
            <Container maxWidth='md' disableGutters sx={{ py: theme.spacing(2), position: 'relative' }}>
                <Box sx={{ my: theme.spacing(2) }}>
                    <Swiper
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className='mySwiper2'
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
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Thumbs]}
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
