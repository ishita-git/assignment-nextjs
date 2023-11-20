import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import { Box, Container, IconButton, Link, Menu, MenuItem, Typography, useMediaQuery } from '@mui/material'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import PrimaryButton from './PrimaryButton'
import Sidebar from './Sidebar'

export default function Navbar() {
    const [companiesMenu, setCompaniesMenu] = useState<null | HTMLElement>(null)
    const [servicesMenu, setServicesMenu] = useState<null | HTMLElement>(null)
    const [toolsMenu, setToolsMenu] = useState<null | HTMLElement>(null)
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const theme = useTheme()
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

    const tabletMode = useMediaQuery('(max-width:899px)')
    const mobileMode = useMediaQuery('(max-width:599px)')
    const ultraSmallMode = useMediaQuery('(max-width:399px)')

    const handleSidebarToggle = () => {
        setSidebarOpen(!sidebarOpen)
    }
    const handleSidebarClose = () => {
        setSidebarOpen(false)
    }

    return (
        <Container
            disableGutters
            maxWidth='xl'
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                py: theme.spacing(1),
                px: mobileMode ? theme.spacing(2) : theme.spacing(4),
            }}
        >
            <Link href='/' sx={{ display: 'flex', alignItems: 'center' }}>
                <img src='/assets/logo.png' alt='logo' width='auto' height='48rem' />

                {ultraSmallMode ? (
                    <></>
                ) : (
                    <Box>
                        <Typography variant='body1' sx={{ mx: theme.spacing(1), fontSize: '1.5rem', color: '#FFFFFF' }}>
                            Muskan Group
                        </Typography>
                        {/* <Typography variant='body1' sx={{ mx: theme.spacing(1), fontSize: '1rem', color: '#FFFFFF' }}>
                        of Companies
                    </Typography> */}
                    </Box>
                )}
            </Link>

            {tabletMode ? (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Link href='http://app.muskan-group.com/' sx={{ mr: theme.spacing(1.25) }}>
                        <PrimaryButton text='Login' light width='6rem' height='2rem' />
                    </Link>
                    <IconButton onClick={handleSidebarToggle}>
                        <MenuRoundedIcon sx={{ color: '#FFFFFF' }} />
                    </IconButton>
                    <Sidebar open={sidebarOpen} handleClose={handleSidebarClose} />
                </Box>
            ) : (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                        <Box sx={{ cursor: 'pointer' }}>
                            <Typography
                                variant='subtitle2'
                                sx={{ display: 'flex', alignItems: 'center', lineHeight: '3rem', color: '#FFFFFF' }}
                                onClick={handleCompaniesMenu}
                            >
                                Companies
                                {companiesMenu ? <ExpandLessRoundedIcon /> : <ExpandMoreRoundedIcon />}
                            </Typography>
                        </Box>

                        <Menu anchorEl={companiesMenu} open={openCompaniesMenu} onClose={closeCompaniesMenu}>
                            <MenuItem onClick={closeCompaniesMenu}>
                                <Link href='/companies/container-lines' sx={{ color: 'inherit' }}>
                                    Muskan Container lines Pvt. Ltd.
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={closeCompaniesMenu}>
                                <Link href='/companies/logistics' sx={{ color: 'inherit' }}>
                                    Muskan Logistics
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={closeCompaniesMenu}>
                                <Link href='/companies/shipping-pte' sx={{ color: 'inherit' }}>
                                    Muskaan Shipping PTE Ltd.
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={closeCompaniesMenu}>
                                <Link href='/companies/shipping-sdn-bhd' sx={{ color: 'inherit' }}>
                                    Muskaan Shipping SDN BHD
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={closeCompaniesMenu}>
                                <Link href='/companies/shipping-llc' sx={{ color: 'inherit' }}>
                                    Muskaan Shipping LLC
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Box>
                        <Box sx={{ cursor: 'pointer', ml: theme.spacing(1.5) }}>
                            <Typography
                                variant='subtitle2'
                                sx={{ display: 'flex', alignItems: 'center', lineHeight: '3rem', color: '#FFFFFF' }}
                                onClick={handleServicesMenu}
                            >
                                Services
                                {servicesMenu ? <ExpandLessRoundedIcon /> : <ExpandMoreRoundedIcon />}
                            </Typography>
                        </Box>

                        <Menu anchorEl={servicesMenu} open={openServicesMenu} onClose={closeServicesMenu}>
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
                        <Typography variant='subtitle2' sx={{ ml: theme.spacing(1.5), color: '#FFFFFF' }}>
                            About Us
                        </Typography>
                    </Link>

                    <Link href='/contact'>
                        <Typography variant='subtitle2' sx={{ ml: theme.spacing(1.5), color: '#FFFFFF' }}>
                            Contact Us
                        </Typography>
                    </Link>

                    <Link href='/career'>
                        <Typography variant='subtitle2' sx={{ ml: theme.spacing(1.5), color: '#FFFFFF' }}>
                            Career
                        </Typography>
                    </Link>

                    <Box>
                        <Box sx={{ cursor: 'pointer', ml: theme.spacing(1.5) }}>
                            <Typography
                                variant='subtitle2'
                                sx={{ display: 'flex', alignItems: 'center', lineHeight: '3rem', color: '#FFFFFF' }}
                                onClick={handleToolsMenu}
                            >
                                Tools
                                {toolsMenu ? <ExpandLessRoundedIcon /> : <ExpandMoreRoundedIcon />}
                            </Typography>
                        </Box>

                        <Menu anchorEl={toolsMenu} open={openToolsMenu} onClose={closeToolsMenu}>
                            <MenuItem onClick={closeToolsMenu}>
                                <Link href='/equipments' sx={{ color: 'inherit' }}>
                                    Equipments
                                </Link>
                            </MenuItem>

                            <MenuItem onClick={closeToolsMenu}>
                                <Link href='/track' sx={{ color: 'inherit' }}>
                                    Track Shipments
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={closeToolsMenu}>
                                <Link href='/vessel-schedule' sx={{ color: 'inherit' }}>
                                    Vessel Schedules
                                </Link>
                            </MenuItem>

                            <MenuItem onClick={closeToolsMenu}>
                                <Link href='/quote' sx={{ color: 'inherit' }}>
                                    Quote
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Box sx={{ ml: theme.spacing(1.5) }}>
                        <Link href='http://app.muskan-group.com/'>
                            <PrimaryButton text='Login' light width='6rem' height='2rem' />
                        </Link>
                    </Box>
                </Box>
            )}
        </Container>
    )
}
