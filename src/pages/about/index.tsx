import React from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import AboutTab from '../../components/about/AboutTab'
import CompaniesTab from '../../components/about/CompaniesTab'
import MissionAndVisionTab from '../../components/about/MissionAndVisionTab'
import Layout from '../Layout'
import aboutBackground from '../../assets/about/about-backgroud.png'

interface TabPanelProps {
    children?: React.ReactNode
    value: number
    index: number
}

function TabPanel({ children, value, index }: TabPanelProps) {
    return <div hidden={value !== index}>{value === index && <Box>{children}</Box>}</div>
}

export default function Home() {
    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    return (
        <Layout image={aboutBackground} title='Muskaan Group Of Companies'>
            <Tabs value={value} onChange={handleChange} variant='fullWidth'>
                <Tab label='About' sx={{ bgcolor: value === 0 ? '#003A9B' : 'transparent' }} />
                <Tab label='Companies' sx={{ bgcolor: value === 1 ? '#003A9B' : 'transparent' }} />
                <Tab label='Mission & Vision' sx={{ bgcolor: value === 2 ? '#003A9B' : 'transparent' }} />
            </Tabs>

            <TabPanel value={value} index={0}>
                <AboutTab />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <CompaniesTab />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <MissionAndVisionTab />
            </TabPanel>
        </Layout>
    )
}
