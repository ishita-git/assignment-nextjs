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
    return (
        <div hidden={value !== index}>
            {value === index && <Box>{children}</Box>}
        </div>
    )
}

export default function Home() {
    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }
    return (
        <Layout image={aboutBackground} title="Muskaan Group Of Companies">
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                TabIndicatorProps={{
                    style: {
                        display: 'none',
                    },
                }}
            >
                <Tab
                    label="About"
                    sx={{
                        textTransform: 'capitalize',
                        bgcolor: value === 0 ? '#003A9B' : 'transparent',
                        color: '#003A9B',
                        fontSize: '1.25rem',
                        borderTop: '2px solid #003A9B33',
                        borderLeft: '2px solid #003A9B33',
                        borderBottom: '2px solid #003A9B33',
                        borderTopLeftRadius: '16px',
                        borderBottomLeftRadius: '16px',
                        '&.Mui-selected': { color: '#FFFFFF', border: 0 },
                    }}
                />
                <Tab
                    label="Companies"
                    sx={{
                        textTransform: 'capitalize',
                        bgcolor: value === 1 ? '#003A9B' : 'transparent',
                        color: '#003A9B',
                        fontSize: '1.25rem',
                        borderTop: '2px solid #003A9B33',
                        borderBottom: '2px solid #003A9B33',
                        '&.Mui-selected': { color: '#FFFFFF', border: 0 },
                    }}
                />
                <Tab
                    label="Mission & Vision"
                    sx={{
                        textTransform: 'capitalize',
                        bgcolor: value === 2 ? '#003A9B' : 'transparent',
                        color: '#003A9B',
                        fontSize: '1.25rem',
                        borderTopRightRadius: '16px',
                        borderBottomRightRadius: '16px',
                        borderTop: '2px solid #003A9B33',
                        borderRight: '2px solid #003A9B33',
                        borderBottom: '2px solid #003A9B33',
                        '&.Mui-selected': { color: '#FFFFFF', border: 0 },
                    }}
                />
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
