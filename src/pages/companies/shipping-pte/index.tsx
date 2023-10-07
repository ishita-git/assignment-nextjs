import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Box, Container, Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import CompaniesLayout from '../CompaniesLayout'
import shippingBg from '../../../assets/companies/shipping-pte-bg.png'
import titleImg from '../../../assets/companies/muskaan_shipping/shipping.png'
import statstics from '../../../assets/companies/muskaan_shipping/statistics.png'
import visionBg from '../../../assets/companies/vision.png'
import visionIcon from '../../../assets/companies/vision_icon.png'
import customBrokerageImg from '../../../assets/companies/muskaan_shipping/custom_brokerage.png'
import logImg from '../../../assets/companies/muskaan_shipping/logistic_transportation.png'
import ourCommitmentImg from '../../../assets/companies/muskaan_shipping/our_commitment.png'
import StatisticsCard from '@/components/companies/StatisticsCard'
import ServicesCard from '@/components/companies/ServicesCard'
import CustomText from '@/components/companies/CustomText'
export default function Home() {
    const theme = useTheme()
    return (
        <CompaniesLayout image={shippingBg} title='Muskaan Shipping PTE Ltd.'>
            <Box sx={{ px: theme.spacing(4) }}>
                <Container maxWidth='xl' disableGutters>
                    <Typography variant='h3' sx={{ textAlign: 'start', mb: '1rem', color: '#1B1B1F' }}>
                        About Us
                    </Typography>
                    <Grid container spacing={2} alignItems='center' sx={{ mb: '1rem' }}>
                        <Grid item xs={12} sm={6}>
                            <CustomText text='Muskaan Shipping (Pte) Ltd, headquartered in Singapore since its establishment in 2010, has emerged as a prominent player in the logistics and freight forwarding industry. Our dedicated network of freight forwarding services extends across a vast expanse, encompassing key ports within the Indian Subcontinent (India and Bangladesh) and South East Asia (Indonesia, Malaysia, Thailand, Cambodia, Myanmar, Vietnam, and the Philippines). With a presence in over 30 locations across more than 10 countries in this region, we are committed to providing a dependable schedule, robust connectivity with Main Line Operator (MLO) sailings, efficient fleet deployment, excellent customer service, and competitive pricing.' />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Image src={titleImg} alt='' style={{ width: '100%', height: 'auto' }} />
                        </Grid>
                    </Grid>
                    <CustomText text='Muskaan Shipping (Pte) Ltd has expanded its operations to include services to major hub ports worldwide. We continually seek opportunities to enhance our presence in the global container shipping industry and have successfully ventured into main line trades serving the Gulf and India Subcontinent regions. Additionally, our extensive network of container liner services spans across the Far East to Europe, the Black Sea, Gulf, the Indian sub-continent, the Red Sea/Gulf, Africa, Oceania, Latin America, and the West Coast of the USA. Muskaan Shipping (Pte) Ltd was among the pioneering liners to establish a vital link connecting Asia, the Middle East, and Africa.' />
                    <CustomText text='Our commitment to providing efficient and reliable logistics solutions has positioned us as a trusted partner for businesses and clients around the world. We are dedicated to facilitating seamless trade connections and delivering cargo to its destination with precision and timeliness. Muskaan Shipping (Pte) Ltd remains at the forefront of the container shipping industry, with a global presence and a vision for continued growth and excellence.' />
                    <Typography variant='h3' sx={{ textAlign: 'start', my: '2rem', color: '#1B1B1F' }}>
                        Statistics
                    </Typography>
                    <Image src={statstics} alt='' style={{ width: '100%', height: 'auto', padding: '2rem 6rem' }} />
                    <Typography
                        variant='h4'
                        sx={{ textAlign: 'center', mb: '4rem', color: '#1B1B1F', fontWeight: 'bold' }}
                    >
                        Overall Exports & Imports of Services (2014-18)
                    </Typography>
                    <StatisticsCard
                        exporterRank='14'
                        importerRank='15'
                        tradeBalanceRank='13'
                        totalTradeAmtList={totalTradeAmtList}
                    />
                </Container>
            </Box>
            <Box sx={{ display: 'flex', position: 'relavtive' }}>
                <Image src={visionBg} alt='' style={{ height: 'auto', width: '100%' }} />
                <Box sx={{ position: 'absolute', padding: '3rem 8rem', width: '60%', textAlign: 'start' }}>
                    <Image src={visionIcon} alt='' style={{ height: 'auto', width: '12.5%' }} />
                    <Typography
                        variant='h3'
                        sx={{ textAlign: 'start', my: '2rem', color: '#FFFFFF', fontWeight: 'bold' }}
                    >
                        Our Vision
                    </Typography>
                    <Typography variant='body1' sx={{ textAlign: 'start', color: '#FFFFFF', fontWeight: 'bold' }}>
                        Our core values are our foundation for future success, guiding us in serving our customers and
                        exploring new services and routes. We remain committed to shipping, especially intra-Asia
                        routes, leveraging our deep regional ties. We prioritize staff development, pursue growth in
                        emerging markets like Africa and South America, and invest in efficient vessels and land-based
                        infrastructure. We believe our expertise and adaptability will continue to yield tangible
                        results across diverse environments.
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ px: theme.spacing(4) }}>
                <Container maxWidth='xl' disableGutters>
                    <Typography variant='h3' sx={{ textAlign: 'start', mt: '4rem', mb: '2rem', color: '#1B1B1F' }}>
                        Our Services
                    </Typography>
                    <CustomText text='Muskaan Shipping (Pte) Ltd believes in values-driven business growth, serving global customers since its inception. Initially operating as agents for M/s. Muskan Container Lines Pvt Ltd in India from 2008, we established our liner operations in 2010, currently operating a fleet of 400 TEUs with approximately 100 TEUs exported per month. Our container fleet consists of 1000 TEUs built between 1997 to 2014.' />
                    <CustomText text="We have earned a solid reputation as a reliable shipping line in the Asian and Gulf regions, with a strong presence in the Indian Sub-continent, Middle East, and South East Asian ports. Expanding our reach, we've entered Europe, CIS Destinations, China, and are actively exploring new opportunities in East Africa and Myanmar." />
                    <CustomText text='Our professional establishments across regions are supported by advanced networking technology, ensuring exceptional customer satisfaction, a key driver of our success.' />
                    <CustomText text='Muskaan Shipping Pte. Ltd. operates as a Non-Vessel Operating Cargo Carrier (NVOCC), serving over 700 destinations worldwide. We specialize in securing competitive volume prices for LCL cargo, offering efficient consolidation services with various shipping lines. Our customers benefit from guaranteed weekly LCL groupage services to major global ports, emphasizing speed, connectivity, safety, and reliability.' />
                    <CustomText text='Led by professionals with extensive experience in international freight forwarding, NVOCC, and consolidation, we handle diverse cargo types, including hazardous and non-hazardous chemicals, machinery, raw materials, refrigerated goods, and oversized project cargo.' />
                    <CustomText text="Our group's expansion in the Asia Pacific region over recent years positions us on the path to becoming a global international freight forwarding company, dedicated to providing top-tier service to clients worldwide. Our Multi-Modal Transport System, supported by a proactive customer service team and a global agent network, ensures timely door-to-door cargo delivery, consistently meeting customer expectations." />
                    <Grid container spacing={2} sx={{ mt: '4rem' }}>
                        <Grid item xs={12} sm={4}>
                            <ServicesCard
                                image={ourCommitmentImg}
                                title='Our Commitment'
                                desc=" Our mission is to provide high-quality services and solutions that earn and maintain our customers' trust and loyalty. This is rooted in our core beliefs:"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <ServicesCard
                                image={customBrokerageImg}
                                title='Custom Brokerage'
                                desc='Muskaan Shipping PTE LTD provides customs brokerage services for inbound and outbound shipments, including customs clearance and door-to-door delivery coordination. We also offer expert consultancy on import-export regulations and have invested in IT systems for efficient Electronic Data Interchange (EDI) with customs authorities.'
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <ServicesCard
                                image={logImg}
                                title='Logistic & Transportation'
                                desc=' Our tailored services in Peninsular Malaysia include a wide range of trucks for prompt pick-up and delivery. We utilize multi-modal options, including road, rail, and water transport, along with a vast network of carriers for rapid response to changing needs.'
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </CompaniesLayout>
    )
}
const totalTradeAmtList = ['$457,081,283,281', '$406,318,349,182', '$50,762,934,099', '186.55%', '150.31%']