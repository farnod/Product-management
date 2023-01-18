import React, { Component } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { Button } from "@mui/material";

const theme = createTheme({
	direction: "rtl",
	typography:{
		fontFamily:"vazir, roboto"
	}
});

const cacheRTL = createCache({
	key: "muirtl",
	stylisPlugins: [prefixer, rtlPlugin],
});

class App extends Component {
	render() {
		return (
			<CacheProvider value={cacheRTL}>
				<ThemeProvider theme={theme}>
					<HelmetProvider>
						<Helmet>
							<title>مدیریت کالاهای ارسالی</title>
						</Helmet>
						<div>
							<Button variant="contained" >کلیک کن</Button>
						</div>
					</HelmetProvider>
				</ThemeProvider>
			</CacheProvider>
		);
	}
}

export default App;
