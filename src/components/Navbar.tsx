import * as React from 'react'
import Image from 'next/image'
import { useTheme } from '@mui/material/styles'
import { AppBar, Box, Container, Fade, Link, Menu, MenuItem, Typography } from '@mui/material'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded'

import PrimaryButton from './PrimaryButton'
import downArrow from '../assets/icons/arrow-down.png'
import logo from '../assets/logo.png'

export default function Navbar() {
    const [companiesMenu, setCompaniesMenu] = React.useState<null | HTMLElement>(null)
    const [servicesMenu, setServicesMenu] = React.useState<null | HTMLElement>(null)
    const [toolsMenu, setToolsMenu] = React.useState<null | HTMLElement>(null)

    const openCompaniesMenu = Boolean(companiesMenu)
    const openServicesMenu = Boolean(servicesMenu)
    const openToolsMenu = Boolean(toolsMenu)

    const handleCompaniesMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setCompaniesMenu(event.currentTarget)
    }
    const closeCompaniesMenu = () => {
        setCompaniesMenu(null)
    }
    const handleServicesMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setServicesMenu(event.currentTarget)
    }
    const closeServicesMenu = () => {
        setServicesMenu(null)
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
                        <Box sx={{ cursor: 'pointer' }}>
                            <Typography
                                variant='h6'
                                sx={{ display: 'flex', alignItems: 'center', lineHeight: '3rem' }}
                                onClick={handleCompaniesMenu}
                            >
                                Companies
                                {companiesMenu ? <ExpandLessRoundedIcon /> : <ExpandMoreRoundedIcon />}
                            </Typography>
                        </Box>

                        <Menu anchorEl={companiesMenu} open={openCompaniesMenu} onClose={closeCompaniesMenu}>
                            <MenuItem onClick={closeCompaniesMenu}>Muskan Container line Pvt. Ltd.</MenuItem>
                            <MenuItem onClick={closeCompaniesMenu}>Muskan Logistics</MenuItem>
                            <MenuItem onClick={closeCompaniesMenu}>Muskaan Shipping PTE Ltd.</MenuItem>
                            <MenuItem onClick={closeCompaniesMenu}>Muskaan Shipping SDN BHD</MenuItem>
                            <MenuItem onClick={closeCompaniesMenu}>Muskaan Shipping LLC</MenuItem>
                        </Menu>
                    </Box>

                    <Box>
                        <Box sx={{ cursor: 'pointer', ml: theme.spacing(1.5) }}>
                            <Typography
                                variant='h6'
                                sx={{ display: 'flex', alignItems: 'center', lineHeight: '3rem' }}
                                onClick={handleServicesMenu}
                            >
                                Services
                                {servicesMenu ? <ExpandLessRoundedIcon /> : <ExpandMoreRoundedIcon />}
                            </Typography>
                        </Box>

                        <Menu anchorEl={servicesMenu} open={openServicesMenu} onClose={closeServicesMenu}>
                            <MenuItem onClick={closeServicesMenu}>
                                <Link href='/services/container-depots' sx={{ color: 'inherit' }}>
                                    Empty Container Depots
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={closeServicesMenu}>
                                <Link href='/services/nvocc' sx={{ color: 'inherit' }}>
                                    NVOCC
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={closeServicesMenu}>
                                <Link href='/services/transportation' sx={{ color: 'inherit' }}>
                                    Transportation
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={closeServicesMenu}>
                                <Link href='/services/air-freight' sx={{ color: 'inherit' }}>
                                    Air Freight
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={closeServicesMenu}>
                                <Link href='/services/multimodel' sx={{ color: 'inherit' }}>
                                    Multimodel-Transportation
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={closeServicesMenu}>
                                <Link href='/services/over-dimension' sx={{ color: 'inherit' }}>
                                    Over Dimension Cargo
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={closeServicesMenu}>
                                <Link href='/services/project-cargo' sx={{ color: 'inherit' }}>
                                    Project Cargo
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={closeServicesMenu}>
                                <Link href='/services/custom-clearance' sx={{ color: 'inherit' }}>
                                    Custom Clearance
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={closeServicesMenu}>
                                <Link href='/services/lcl' sx={{ color: 'inherit' }}>
                                    LCL Consolidation Services
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Box>

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
                        <Box sx={{ cursor: 'pointer', ml: theme.spacing(1.5) }}>
                            <Typography
                                variant='h6'
                                sx={{ display: 'flex', alignItems: 'center', lineHeight: '3rem' }}
                                onClick={handleToolsMenu}
                            >
                                Tools
                                {toolsMenu ? <ExpandLessRoundedIcon /> : <ExpandMoreRoundedIcon />}
                            </Typography>
                        </Box>

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
