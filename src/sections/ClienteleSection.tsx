import React, { useState } from 'react'
import Image from 'next/image'
import { Box, Container, Fade, IconButton, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { clientsData } from '../data/clientsData'
import ClienteleCard from '../components/ClienteleCard'
import EastRoundedIcon from '@mui/icons-material/EastRounded'
import WestRoundedIcon from '@mui/icons-material/WestRounded'
import clientBg from '../assets/clients/client-bg.webp'
import prevIcon from '../assets/icons/previous.webp'
import nextIcon from '../assets/icons/next.webp'

export default function ClienteleSection() {
    const theme = useTheme()
    const visibleIcons = 5
    const [startIconIndex, setStartIconIndex] = useState(0)
    const [cardIndex, setCardIndex] = useState(startIconIndex + Math.floor(visibleIcons / 2))

    const handlePrev = () => {
        if (startIconIndex > 0) {
            setStartIconIndex(startIconIndex - 1)
        } else {
            setStartIconIndex(clientsData.length - visibleIcons)
        }
        setCardIndex(cardIndex - 1)
    }

    const handleNext = () => {
        if (startIconIndex + visibleIcons < clientsData.length) {
            setStartIconIndex(startIconIndex + 1)
        } else {
            setStartIconIndex(0)
        }
        setCardIndex(cardIndex + 1)
    }

    const changeCard = (index: number) => {
        setCardIndex(startIconIndex + index)
        if (index !== Math.floor(visibleIcons / 2)) {
            const difference = index - Math.floor(visibleIcons / 2)
            setStartIconIndex(startIconIndex + difference)
        }
    }

    return (
        <Box sx={{ p: theme.spacing(4) }}>
            <Typography variant='h2' textAlign='center' sx={{ mb: theme.spacing(2) }}>
                Appreciated by some of the best in industry
            </Typography>
            <Container
                maxWidth='md'
                disableGutters
                sx={{ my: theme.spacing(2), position: 'relative', height: '34rem' }}
            >
                <Image
                    src={clientBg}
                    alt='client-bg'
                    style={{
                        width: '100%',
                        height: 'auto',
                        paddingLeft: theme.spacing(8),
                        paddingTop: theme.spacing(2.5),
                    }}
                />
                {clientsData.slice(startIconIndex, startIconIndex + visibleIcons).map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            opacity: cardIndex === startIconIndex + index ? 1 : 0,
                            transition: 'opacity 0.5s',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            position: 'absolute',
                            top: 0,
                        }}
                    >
                        <ClienteleCard
                            cardImage={item.cardImage}
                            cardIcon={item.cardIcon}
                            title={item.title}
                            subtitle={item.subtitle}
                        />
                    </Box>
                ))}
            </Container>
            <Container maxWidth='md' disableGutters sx={{ mb: theme.spacing(4), position: 'relative' }}>
                <Box
                    sx={{
                        my: theme.spacing(2),
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <IconButton onClick={handlePrev} sx={{ marginRight: '6rem' }}>
                        <Image src={prevIcon} alt='prevIcon' style={{ height: '2rem', width: 'auto' }} />
                        {/* <WestRoundedIcon fontSize='large' sx={{ color: theme.palette.primary.main }} /> */}
                    </IconButton>

                    {clientsData.slice(startIconIndex, startIconIndex + visibleIcons).map((item, index) => (
                        <Box sx={{ height: '3rem', display: 'flex' }} key={index} onClick={() => changeCard(index)}>
                            <Image
                                src={item.cardIcon}
                                alt='client icon'
                                style={{
                                    width: 'auto',
                                    height: '100%',
                                    cursor: 'pointer',
                                }}
                            />
                        </Box>
                    ))}

                    <IconButton onClick={handleNext} sx={{ marginLeft: '6rem' }}>
                        <Image src={nextIcon} alt='nextIcon' style={{ height: '2rem', width: 'auto' }} />
                        {/* <EastRoundedIcon fontSize='large' sx={{ color: theme.palette.primary.main }} /> */}
                    </IconButton>
                </Box>
            </Container>
        </Box>
    )
}
