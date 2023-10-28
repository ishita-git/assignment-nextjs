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
    const visibleIconSet = 4
    const [visibleIcons, setVisibleIcons] = useState(visibleIconSet)
    const [startIconIndex, setStartIconIndex] = useState(0)
    const [cardIndex, setCardIndex] = useState(startIconIndex)
    const [checked, setChecked] = useState(false)

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
        setChecked((prev) => !prev)
    }

    return (
        <Box sx={{ p: theme.spacing(4) }}>
            <Typography variant='h2'>Appreciated by some of the best in industry</Typography>
            <Container maxWidth='md' disableGutters sx={{ py: theme.spacing(2), position: 'relative' }}>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Fade in={checked} timeout={2000}>
                        <div>
                            <ClienteleCard
                                cardImage={clientsData?.[cardIndex]?.cardImage}
                                cardIcon={clientsData?.[cardIndex]?.cardIcon}
                                title={clientsData?.[cardIndex]?.title}
                                subtitle={clientsData?.[cardIndex]?.subtitle}
                            />
                        </div>
                    </Fade>
                </Box>
            </Container>
            <Container maxWidth='lg' disableGutters sx={{ py: theme.spacing(2), position: 'relative' }}>
                <Box
                    sx={{
                        my: theme.spacing(2),
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
                        <Box sx={{ height: '4rem', display: 'flex' }} key={index} onClick={() => changeCard}>
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
