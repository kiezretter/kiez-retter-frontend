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
                        Vielleicht wollen wir hier noch auf Partnerinitativen verweisen
                    </Typography>
                </Container>
            </div>
        );
    }
}