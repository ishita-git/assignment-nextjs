import { Box, Grid, Typography } from '@mui/material'
import NumberCounter from '../NumberCounter'
import VisibilityTracker, { AnimationType } from '../VisibilityTracker'

export default function StatisticsCard({ exporterRank, importerRank, tradeBalanceRank, totalTradeAmtList }: { exporterRank: number, importerRank: number, tradeBalanceRank: number, totalTradeAmtList: string[] }) {
    return <Box>
         <VisibilityTracker animationType={AnimationType.NOANIMATION}>
        <Box sx={{ bgcolor: "#FFFFFF", p: "1.25rem", borderRadius: "1.25rem" }}>
            <Grid container spacing={2} sx={{ mb: "2rem" }}>
                <Grid item xs={12} sm={4}>
                    <Box sx={{ bgcolor: "#EFF6FF", borderRadius: "1.5rem", p: "1.25rem", }} >
                        <Typography variant="h6" sx={{ color: '#031225', textAlign: "start" }}>
                            Exporter Rank
                        </Typography >
                        <Box sx={{ display: "flex", alignItems: "baseline", justifyContent: "center" }}>
                            <Typography variant="h1" sx={{ color: '#031225', fontWeight: 400 }}>
                                <NumberCounter targetNumber={exporterRank} duration={1000} /></Typography>
                            <Typography variant="body1" sx={{ color: '#031225' }}>/138</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box sx={{ bgcolor: "#EFF6FF", borderRadius: "1.5rem", p: "1.25rem", }} >
                        <Typography variant="h6" sx={{ color: '#031225', textAlign: "start" }}>
                            Importer Rank
                        </Typography >
                        <Box sx={{ display: "flex", alignItems: "baseline", justifyContent: "center" }}>
                            <Typography variant="h1" sx={{ color: '#031225', fontWeight: 400 }}>
                                <NumberCounter targetNumber={importerRank} duration={1000} />
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#031225' }}>/138</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box sx={{ bgcolor: "#EFF6FF", borderRadius: "1.5rem", p: "1.25rem", }} >
                        <Typography variant="h6" sx={{ color: '#031225', textAlign: "start" }}>
                            Trade Balance Rank
                        </Typography >
                        <Box sx={{ display: "flex", alignItems: "baseline", justifyContent: "center" }}>
                            <Typography variant="h1" sx={{ color: '#031225', fontWeight: 400 }}>
                                <NumberCounter targetNumber={tradeBalanceRank} duration={1000} />
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#031225' }}>/138</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Typography variant='h3' sx={{ textAlign: 'start', mb: '1rem', color: '#1B1B1F' }}>
                Total Trade
            </Typography>
            <Box>
                <Grid container spacing={1} justifyContent={'space-between'}>
                    <Grid item>
                        {totalTradeList.map((item, index) => (
                            <Typography
                                key={index}
                                variant='body1'
                                textAlign={'start'}
                                sx={{ color: '#031225', mb: '1rem', fontWeight: 600 }}
                            >
                                {item}
                            </Typography>
                        ))}
                    </Grid>
                    <Grid item>
                        {totalTradeAmtList.map((item, index) => (
                            <Typography
                                key={index}
                                variant='body1'
                                textAlign={'end'}
                                sx={{ color: '#031225', mb: '1rem', fontWeight: 600 }}
                            >
                                {item}
                            </Typography>
                        ))}
                    </Grid>
                </Grid>
            </Box>
        </Box>
        </VisibilityTracker>
        <Typography variant='h3' sx={{ fontWeight: 600, mt: '2rem', mb: '4rem', color: '#1B1B1F' }}>
            Trade Statistics
        </Typography>
    </Box >
}

const totalTradeList = [
    'Total Exports (2021)',
    'Total Imports (2021)',
    'Total Balance (2021)',
    'Exports of goods and services (2022)',
    'Imports of goods and services (2022)',
]
