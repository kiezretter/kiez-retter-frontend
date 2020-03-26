import React from 'react';
import {
    ThemeProvider,
    createMuiTheme,
} from '@material-ui/core';

import Routes from './Routes';
import { Store } from "./context/StoreContext";
import { Markers } from "./context/MarkerContext";

import './index.scss';

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Montserrat, Arial',
        // fontSize: 16,
        // htmlFontSize: 10,
    },
    palette: {
        primary: {
            main: 'rgb(30, 80, 145)', // brand-blue
        },
        secondary: {
            main: 'rgb(222, 58, 66)', // brand-red
        },
    },
});

if (sessionStorage.getItem('personalLocation')) sessionStorage.removeItem('personalLocation');

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gmapsLoaded: false,
        }

        this.initializeGoogleMapsApi();
    }

    initMap() {
        this.setState({ gmapsLoaded: true });
    }

    initializeGoogleMapsApi() {
        window.initMap = this.initMap.bind(this);
        const gmapScriptEl = document.createElement(`script`)
        gmapScriptEl.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`
        document.querySelector(`body`).insertAdjacentElement(`beforeend`, gmapScriptEl)
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                {this.state.gmapsLoaded && (
                    <Markers>
                        <Store>
                            <Routes />
                        </Store>
                    </Markers>
                )}
            </ThemeProvider>
        );
    }
};