import React, { Component } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

const theme = createTheme({
	direction: "rtl",
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
							<h1>مدیریت کالاهای ارسالی</h1>
						</div>
					</HelmetProvider>
				</ThemeProvider>
			</CacheProvider>
		);
	}
}

export default App;
