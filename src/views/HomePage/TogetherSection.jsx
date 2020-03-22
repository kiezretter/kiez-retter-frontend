import React from 'react';

import {
    Container,
    Typography,
} from '@material-ui/core';

export default class TogetherSection extends React.Component {
    render() {
        return (
            <div className="kr-homepage--together">
                <Container maxWidth="md">
                    <Typography variant="h4" component="h3" gutterBottom>Zusammen</Typography>
                    <Typography>
                        Auch wir glauben fest daran, daß wir zusammen mehr erreichen können.<br />
                        Wir freuen uns daher, wenn ihr euch mit uns vernetzen möchtet, Anregungen habt oder uns unterstützen möchtet.<br />
                        <br />
                        #kiezretter #bettertogether
                    </Typography>
                </Container>
            </div>
        );
    }
}