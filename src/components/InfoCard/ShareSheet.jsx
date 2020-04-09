import React from 'react';

import {
    Typography,
    Icon,
} from '@material-ui/core';

import {
    FacebookShareButton,
    // FacebookMessengerShareButton,
    // FacebookMessengerIcon,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    EmailShareButton,
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon,
    EmailIcon,
} from 'react-share';

import './ShareSheet.scss';

export default class ShareSheet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            shareUrl: window.location.href,
        };

        this.props.eventBus.on('changeShareSheetState', this.onChangeShareSheetState.bind(this))
    }

    onChangeShareSheetState(show) {
        if (!show) return this.hideShareSheet();

        if (window.navigator.share) {
            navigator.share({
                title: this.props.title,
                text: `${this.props.text}`,
                url: this.state.shareUrl
            }).then(() => {
                console.log('Thanks for sharing!');
            })
            .catch(console.error);
        } else {
            this.setState({ show: true });
            this.props.eventBus.emit('shareSheetShown', true);
        }
    }

    hideShareSheet() {
        this.props.eventBus.emit('shareSheetShown', false);
        this.setState({ show: false });
    }

    render() {
        let classes = 'kr-share-sheet';
        
        if (this.state.show) classes += ' kr-share-sheet__show';

        return (
            <div className={classes}>
                <Typography>
                    Erzähle deinen Freunden von {this.props.title}:
                </Typography>
                <Icon
                    onClick={this.hideShareSheet.bind(this)}
                    className="kr-share-sheet--close"
                >close</Icon>
                <br />
                <ul className="kr-share-sheet--list">
                    <li className="kr-share-sheet--item">
                        <FacebookShareButton
                            url={this.state.shareUrl}
                            quote={this.props.text}
                            hashtag={this.props.hashtag}
                        >
                            <FacebookIcon size={48} round />
                        </FacebookShareButton>
                    </li>
                    <li className="kr-share-sheet--item">
                        <TwitterShareButton
                            url={this.state.shareUrl}
                            title={this.props.text}
                        >
                            <TwitterIcon size={48} round />
                        </TwitterShareButton>
                    </li>
                    <li className="kr-share-sheet--item">
                        <TelegramShareButton
                            url={this.state.shareUrl}
                            title={this.props.text}
                        >
                            <TelegramIcon size={48} round />
                        </TelegramShareButton>
                    </li>
                    <li className="kr-share-sheet--item">
                        <WhatsappShareButton
                            url={this.state.shareUrl}
                            title={this.props.text}
                            separator=":: "
                        >
                            <WhatsappIcon size={48} round />
                        </WhatsappShareButton>
                    </li>
                    <li className="kr-share-sheet--item">
                        <EmailShareButton
                            url={this.state.shareUrl}
                            subject={this.props.title}
                            body={this.props.text}
                        >
                            <EmailIcon size={48} round />
                        </EmailShareButton>
                    </li>
                </ul>
            </div>
        );
    }
}