import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function Header() {
	function ElevationScroll(props: Props) {
		const { children } = props;
		// Note that you normally won't need to set the window ref as useScrollTrigger
		// will default to window.
		// This is only being set here because the demo is in an iframe.
		const trigger = useScrollTrigger({
			disableHysteresis: true,
			threshold: 0,
		});

		return React.cloneElement(children, {
			elevation: trigger ? 4 : 0,
		});
	}

	return <>
    <ElevationScroll>
        <AppBar>
            <Toolbar>
                
            </Toolbar>
        </AppBar>
    </ElevationScroll>
    </> ;
}

export default Header;
