import Head from 'next/head'
import '../styles/globals.css'
import {AppProps} from 'next/app'
import AppBar from "../components/common/AppBar";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {getDesignTokens} from "../styles/DesginTokens";
import React from "react";
import {PaletteMode} from "@mui/material";
import {UserProvider} from "@auth0/nextjs-auth0";
import {defaultValues, GlobalContext} from "../context/GlobalContext";


const MyApp = ({Component, pageProps}: AppProps) => {
    const [mode, setMode] = React.useState<PaletteMode>('dark');
    const colorMode = React.useMemo(
        () => ({
            // The dark mode switch would invoke this method
            toggleColorMode: () => {
                setMode((prevMode: PaletteMode) =>
                    prevMode === 'light' ? 'dark' : 'light',
                );
            },
        }),
        [],
    );


    const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                />
                <meta name="description" content="Description"/>
                <meta name="keywords" content="Keywords"/>
                <title>Next.js PWA Example</title>

                <link rel="manifest" href="/manifest.json"/>
                <link
                    href="/icons/favicon-16x16.png"
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                />
                <link
                    href="/icons/favicon-32x32.png"
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                />
                <link rel="apple-touch-icon" href="/apple-icon.png"></link>
                <meta name="theme-color" content="#317EFB"/>
            </Head>
            <ThemeProvider theme={theme}>
                <UserProvider>
                    <GlobalContext.Provider value={defaultValues}>
                    <AppBar/>
                    <Component {...pageProps} />
                    </GlobalContext.Provider>
                </UserProvider>
            </ThemeProvider>
        </>
    )
}

export default MyApp;
