import { createTheme, Theme } from '@mui/material/styles'
import { nunito, inter, oswald } from './fonts'

const theme = createTheme({
    spacing: (factor: number) => `${1 * factor}rem`,

    palette: {
        common: {
            white: '#FFFFFF',
            black: '#000000',
        },
        primary: {
            main: '#003A9B',
        },
        secondary: {
            main: '#031225',
            dark: '#1B1B1F',
        },
        background: {
            default: '#EFF6FF',
            paper: '#003A9B',
        },
    },

    typography: {
        htmlFontSize: 16,
        fontFamily: nunito.style.fontFamily,

        h1: {
            fontFamily: oswald.style.fontFamily,
            fontSize: '6rem',
            fontWeight: '600',
            lineHeight: '8.875rem',
            textAlign: 'center',
            color: '#FFFFFF',
        },
        h2: {
            fontSize: '4rem',
            fontWeight: '600',
            lineHeight: '6rem',
            textAlign: 'center',
            color: '#031225',
        },
        h3: {
            fontSize: '3rem',
            fontWeight: '600',
            lineHeight: '4rem',
            textAlign: 'center',
            color: '#FFFFFF',
        },
        h4: {
            fontFamily: inter.style.fontFamily,
            fontSize: '1.5rem',
            fontWeight: '600',
            lineHeight: '1.875rem',
            color: '#FFFFFF',
        },
        h5: {
            fontSize: '1.5rem',
            lineHeight: '2rem',
            textAlign: 'center',
            color: '#FFFFFF',
        },
        h6: {
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
            color: '#003A9B',
        },
        body1: {
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
            color: '#03122580',
        },
        body2: {
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
            color: '#031225B3',
            textAlign: 'center',
        },
        overline: {
            fontSize: '1.5rem',
            lineHeight: '2rem',
            color: '#031225CC',
        },
        subtitle1: {
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
            color: '#FFFFFF',
        },
        subtitle2: {
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
            color: '#FFFFFF',
        },
    },
})

export default theme
