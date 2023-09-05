import * as React from 'react'
import Image from 'next/image'
import { useTheme } from '@mui/material/styles'
import { AppBar, Box, Container, Link, Menu, MenuItem, Typography } from '@mui/material'

import PrimaryButton from './PrimaryButton'
import downArrow from '../assets/icons/arrow-down.png'
import logo from '../assets/logo.png'

export default function Navbar() {
    const [companiesMenu, setCompaniesMenu] = React.useState<null | HTMLElement>(null)
    const [toolsMenu, setToolsMenu] = React.useState<null | HTMLElement>(null)

    const openCompaniesMenu = Boolean(companiesMenu)
    const openToolsMenu = Boolean(toolsMenu)

    const handleCompaniesMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setCompaniesMenu(event.currentTarget)
    }
    const closeCompaniesMenu = () => {
        setCompaniesMenu(null)
    }
    const handleToolsMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setToolsMenu(event.currentTarget)
    }
    const closeToolsMenu = () => {
        setToolsMenu(null)
    }
    const theme = useTheme()

    return (
        <AppBar position='static' elevation={0} sx={{ background: 'transparent' }}>
            <Container
                disableGutters
                maxWidth='xl'
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Link href='/'>
                        <Image src={logo} alt='logo' style={{ height: '3rem', width: 'auto' }} />
                    </Link>

                    <Typography variant='h5' sx={{ mx: theme.spacing(1) }}>
                        Muskan Group of Companies
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                        <Typography
                            variant='h6'
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                cursor: 'pointer',
                                lineHeight: '3rem',
                            }}
                            onClick={handleCompaniesMenu}
                        >
                            Companies
                            <Image
                                src={downArrow}
                                alt='expand more'
                                style={{
                                    width: '1.25rem',
                                    height: 'auto',
                                    marginLeft: theme.spacing(0.25),
                                }}
                            />
                        </Typography>

                        <Menu anchorEl={companiesMenu} open={openCompaniesMenu} onClose={closeCompaniesMenu}>
                            <MenuItem onClick={closeCompaniesMenu}>Muskan Container line Pvt. Ltd.</MenuItem>
                            <MenuItem onClick={closeCompaniesMenu}>Muskan Logistics</MenuItem>
                            <MenuItem onClick={closeCompaniesMenu}>Muskaan Shipping PTE Ltd.</MenuItem>
                            <MenuItem onClick={closeCompaniesMenu}>Muskaan Shipping SDN BHD</MenuItem>
                            <MenuItem onClick={closeCompaniesMenu}>Muskaan Shipping LLC</MenuItem>
                        </Menu>
                    </Box>

                    <Link href='/services'>
                        <Typography variant='h6' sx={{ ml: theme.spacing(1.5) }}>
                            Services
                        </Typography>
                    </Link>

                    <Link href='/about'>
                        <Typography variant='h6' sx={{ ml: theme.spacing(1.5) }}>
                            About Us
                        </Typography>
                    </Link>

                    <Link href='/contact'>
                        <Typography variant='h6' sx={{ ml: theme.spacing(1.5) }}>
                            Contact Us
                        </Typography>
                    </Link>

                    <Link href='/career'>
                        <Typography variant='h6' sx={{ ml: theme.spacing(1.5) }}>
                            Career
                        </Typography>
                    </Link>

                    <Box>
                        <Typography
                            variant='h6'
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                cursor: 'pointer',
                                ml: theme.spacing(1.5),
                                lineHeight: '3rem',
                            }}
                            onClick={handleToolsMenu}
                        >
                            Tools
                            <Image
                                src={downArrow}
                                alt='expand more'
                                style={{
                                    width: '1.25rem',
                                    height: 'auto',
                                    marginLeft: theme.spacing(0.25),
                                }}
                            />
                        </Typography>

                        <Menu anchorEl={toolsMenu} open={openToolsMenu} onClose={closeToolsMenu}>
                            <MenuItem onClick={closeToolsMenu}>Equipments</MenuItem>
                            <MenuItem onClick={closeToolsMenu}>Track</MenuItem>
                            <MenuItem onClick={closeToolsMenu}>Vessel Schedule</MenuItem>
                            <MenuItem onClick={closeToolsMenu}>Quote</MenuItem>
                        </Menu>
                    </Box>

                    <Box sx={{ ml: theme.spacing(1.5) }}>
                        <PrimaryButton text='Login' light />
                    </Box>
                </Box>
            </Container>
        </AppBar>
    )
}
