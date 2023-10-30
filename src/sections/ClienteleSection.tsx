import React, { useState } from 'react'
import Image from 'next/image'
import { Box, Container, Fade, IconButton, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { clientsData } from '../data/clientsData'
import ClienteleCard from '../components/ClienteleCard'
import EastRoundedIcon from '@mui/icons-material/EastRounded'
import WestRoundedIcon from '@mui/icons-material/WestRounded'

export default function ClienteleSection() {
    const theme = useTheme()
    const visibleIcons = 4
    const [startIconIndex, setStartIconIndex] = useState(0)
    const [cardIndex, setCardIndex] = useState(startIconIndex)

    const handlePrev = () => {
        if (startIconIndex > 0) {
            setStartIconIndex(startIconIndex - 1)
        } else {
            setStartIconIndex(clientsData.length - visibleIcons)
        }
    }

    const handleNext = () => {
        if (startIconIndex + visibleIcons < clientsData.length) {
            setStartIconIndex(startIconIndex + 1)
        } else {
            setStartIconIndex(0)
        }
    }

    const changeCard = (index: number) => {
        setCardIndex(startIconIndex + index)
    }

    console.log(cardIndex)

    return (
        <Box sx={{ p: theme.spacing(4) }}>
            <Typography variant='h2' sx={{ mb: theme.spacing(2) }}>
                Appreciated by some of the best in industry
            </Typography>
            <Container
                maxWidth='md'
                disableGutters
                sx={{ py: theme.spacing(2), position: 'relative', height: '34rem' }}
            >
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
            <Container maxWidth='lg' disableGutters sx={{ py: theme.spacing(2), position: 'relative' }}>
                <Box
                    sx={{
                        my: theme.spacing(4),
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <IconButton onClick={handlePrev}>
                        <WestRoundedIcon fontSize='large' sx={{ color: theme.palette.primary.main }} />
                    </IconButton>
                    {clientsData.slice(startIconIndex, startIconIndex + visibleIcons).map((item, index) => (
                        <Box sx={{ height: '4rem', display: 'flex' }} key={index} onClick={() => changeCard(index)}>
                            <Image
                                src={item.cardIcon}
                                alt='client icon'
                                style={{ width: 'auto', height: '100%', cursor: 'pointer' }}
                            />
                        </Box>
                    ))}
                    <IconButton onClick={handleNext}>
                        <EastRoundedIcon fontSize='large' sx={{ color: theme.palette.primary.main }} />
                    </IconButton>
                </Box>
            </Container>
        </Box>
    )
}
