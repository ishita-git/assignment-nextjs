import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Image from 'next/image'
import bulbImage from '../../assets/about/missionTab/bulb.webp'
import targetImage from '../../assets/about/missionTab/target.png'
import shipImage from '../../assets/about/missionTab/ship.webp'
import visionImage from '../../assets/about/missionTab/vision.png'
import VisibilityTracker, { AnimationType } from '../VisibilityTracker'

export default function MissionAndVisionTab() {
    const theme = useTheme()
    const mobileMode = useMediaQuery('(max-width:599px)')

    return (
        <Box sx={{ mx: { xs: theme.spacing(2), sm: theme.spacing(4), md: theme.spacing(12) }, mb: theme.spacing(6) }}>
            <Box sx={{ mb: theme.spacing(4) }}>
                <Typography variant='h2' sx={{ mt: theme.spacing(4), mb: theme.spacing(2) }}>
                    Looking into Future
                </Typography>
                <AboutFuture body="We hold firm to the conviction that our values form the bedrock of our future endeavors. Our unwavering commitment to customers has not only propelled our success thus far but also steers our path as we venture into uncharted territories and services to meet evolving demands. Our core focus remains steadfastly on shipping, particularly within the well-trodden intra-Asia routes we've faithfully served over time. Our deep-rooted connections in this region continue to be a cornerstone upon which we build our future strategies." />
                <AboutFuture body="Our dedication to our employees' growth ensures that we cultivate a capable and driven workforce, essential for maintaining the quality service we set as our benchmark. Armed with the same entrepreneurial spirit that fueled our inception, we are relentlessly exploring new market horizons. Recognizing the burgeoning economies of Africa and South America, we're placing heightened emphasis on niche trades to and from these regions. This commitment is evident in our investment in highly efficient and environmentally conscious services tailored for Gulf & Far East trade routes. We're also pursuing strategic land-based investments, including bonded terminals and depots in emerging economies like Indonesia and Kuwait." />
                <AboutFuture body="While navigating the intricacies of the Chinese market presents its challenges, Muskan is well-equipped with expertise, robust partnerships, and an intricate grasp of local business practices. These factors enable us to replicate successes across the continent. Just as in the Gulf and Far East, and across all our endeavors, Muskan's unified vision and adaptability in new and distinct working landscapes allow us to translate our aspirations into tangible achievements." />
            </Box>
            <Box>
                <Typography
                    variant='h2'
                    sx={{
                        mt: theme.spacing(6),
                        mb: theme.spacing(mobileMode ? 2 : 6),
                        fontSize: mobileMode ? '3rem' : '3.2rem',
                    }}
                >
                    Our Mission & Vision
                </Typography>
                <Grid container spacing={2} alignItems='center'>
                    <Grid item xs={12} sm={6} justifyContent='left'>
                        <Box sx={{ textAlign: 'start' }}>
                            {mobileMode ? (
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: '1rem' }}>
                                    <Image
                                        src={targetImage}
                                        alt='Target Image'
                                        style={{ height: '2.4rem', width: 'auto', marginLeft: '-0.25rem' }}
                                    />
                                    <Typography variant='h3' sx={{ color: '#1B1B1F', ml: '1rem' }}>
                                        Our Mission
                                    </Typography>
                                </Box>
                            ) : (
                                <>
                                    <Image
                                        src={targetImage}
                                        alt='Target Image'
                                        style={{ height: 'auto', width: '15%', marginBottom: '2rem' }}
                                    />
                                    <VisibilityTracker animationType={AnimationType.COLLAPSE} timeout={1500}>
                                        <Typography variant='h2' sx={{ mb: '1.5rem', color: '#1B1B1F' }}>
                                            Our Mission
                                        </Typography>
                                    </VisibilityTracker>
                                </>
                            )}
                            <VisibilityTracker animationType={AnimationType.FADE} timeout={2000}>
                                <Typography
                                    paragraph
                                    variant='body1'
                                    sx={{
                                        color: '#1B1B1F',
                                        textAlign: 'justify',
                                        lineHeight: '1.5rem',
                                    }}
                                >
                                    Our aim is to cater to our global clientele in the logistics and transportation sphere through
                                    innovative and economical supply chain solutions that consistently surpass their expectations. Our goal
                                    is to deliver utmost value, enhancing freight management efficiencies and generating substantial savings
                                    for our customers throughout the shipping process. We hold steadfast in fostering strong customer
                                    relationships, considering them integral members of our team. Our commitment entails serving them with
                                    unwavering integrity and a sense of responsibility at all times.
                                </Typography>
                            </VisibilityTracker>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Image
                            src={bulbImage}
                            alt='Bulb Image'
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} alignItems='center' sx={{ mt: mobileMode ? 0 : '2rem' }}>
                    <Grid item xs={12} sm={6}>
                        {mobileMode ? (
                            <></>
                        ) : (
                            <Image
                                src={shipImage}
                                alt='Ship Image'
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                            />
                        )}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ textAlign: 'start' }}>
                            {mobileMode ? (
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: '1rem' }}>
                                    <Image
                                        src={visionImage}
                                        alt='Vision Image'
                                        style={{ height: '2.4rem', width: '100', marginLeft: '-0.25rem' }}
                                    />
                                    <Typography variant='h3' sx={{ color: '#1B1B1F', ml: '1rem' }}>
                                        Our Vision
                                    </Typography>
                                </Box>
                            ) : (
                                <>
                                    <Image
                                        src={visionImage}
                                        alt='Vision Image'
                                        style={{ height: 'auto', width: '15%', marginBottom: '2rem' }}
                                    />
                                    <VisibilityTracker animationType={AnimationType.COLLAPSE} timeout={1500}>
                                        <Typography variant='h2' sx={{ mb: '1.5rem', color: '#1B1B1F' }}>
                                            Our Vision
                                        </Typography>
                                    </VisibilityTracker>
                                </>
                            )}

                            <VisibilityTracker animationType={AnimationType.FADE} timeout={2000}>
                                <Typography
                                    paragraph
                                    variant='body1'
                                    sx={{
                                        color: '#1B1B1F',
                                        textAlign: 'justify',
                                        lineHeight: '1.5rem',
                                    }}
                                >
                                    Our pursuit of excellence centers on delivering world-class logistics services. We are consistently
                                    prepared to cater to our customers' requirements around the clock. Our primary objective is to establish
                                    enduring partnerships with our esteemed clients by consistently offering this elevated standard of
                                    service. We exert great effort to present our clients with more than just reactive assistance; our
                                    proactive approach, powered by our expertise, aids in not only delivering exceptional service but also
                                    guiding our clients effectively within the realms of land and sea logistics.
                                </Typography>
                            </VisibilityTracker>
                        </Box>
                    </Grid>
                </Grid>
                {mobileMode ? (
                    <Image
                        src={shipImage}
                        alt='Ship Image'
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    />
                ) : (
                    <></>
                )}
            </Box>
        </Box>
    )
}

function AboutFuture({ body }: { body: String }) {
    return (
        <Typography variant='body2' sx={{ fontWeight: 400, color: '#031225', marginBottom: '1rem', lineHeight: '1.5rem' }} paragraph>
            {body}
        </Typography>
    )
}
