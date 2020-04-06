import React from 'react';

import {
    Typography
} from '@material-ui/core';

import {
    FacebookShareCount,
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
        if (!show) {
            this.props.eventBus.emit('shareSheetShown', false);
            return this.setState({ show: false });
        }

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

    render() {
        let classes = 'kr-share-sheet';
        
        if (this.state.show) classes += ' kr-share-sheet__show';

        return (
            <div className={classes}>
                <Typography>
                    Erzähle deinen Freunden von {this.props.title}:
                </Typography>
                <br />
                <ul className="kr-share-sheet--list">
                    <li className="kr-share-sheet--item">
                        <FacebookShareButton
                            url={this.state.shareUrl}
                            quote={this.props.text}
                            className="Demo__some-network__share-button"
                        >
                            <FacebookIcon size={48} round />
                        </FacebookShareButton>

                        <div>
                            <FacebookShareCount url={this.state.shareUrl} className="Demo__some-network__share-count">
                                {count => <Typography>{count}</Typography>}
                            </FacebookShareCount>
                        </div>
                    </li>
                    {/* <li className="kr-share-sheet--item">
                        <FacebookMessengerShareButton
                            url={this.state.shareUrl}
                            appId="521270401588372"
                            className="Demo__some-network__share-button"
                        >
                            <FacebookMessengerIcon size={48} round />
                        </FacebookMessengerShareButton>
                    </li> */}
                    <li className="kr-share-sheet--item">
                        <TwitterShareButton
                            url={this.state.shareUrl}
                            title={this.props.text}
                            className="Demo__some-network__share-button"
                        >
                            <TwitterIcon size={48} round />
                        </TwitterShareButton>
                    </li>
                    <li className="kr-share-sheet--item">
                        <TelegramShareButton
                            url={this.state.shareUrl}
                            title={this.props.text}
                            className="Demo__some-network__share-button"
                        >
                            <TelegramIcon size={48} round />
                        </TelegramShareButton>
                    </li>
                    <li className="kr-share-sheet--item">
                        <WhatsappShareButton
                            url={this.state.shareUrl}
                            title={this.props.text}
                            separator=":: "
                            className="Demo__some-network__share-button"
                        >
                            <WhatsappIcon size={48} round />
                        </WhatsappShareButton>
                    </li>
                    <li className="kr-share-sheet--item">
                        <EmailShareButton
                            url={this.state.shareUrl}
                            subject={this.props.text}
                            body="body"
                            className="Demo__some-network__share-button"
                        >
                            <EmailIcon size={48} round />
                        </EmailShareButton>
                    </li>
                </ul>
            </div>
        );
    }
}