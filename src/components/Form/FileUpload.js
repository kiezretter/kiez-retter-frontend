import React from 'react';
import {
  Card,
  CardMedia,
  Button
} from '@material-ui/core';
import storeImage from '../../assets/images/laden3.png';
import superWomanImage from '../../assets/images/superman_f_klein.png';

class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: this.props.name === 'owner_image' ? superWomanImage : storeImage
    }
    this.fileChanged = false;
    this.useStyles = {
      weight: 250,
      height: 250
    };
  }

  handleFileUpload = (evt) => {
    // User cancelled upload
    if (!evt.target.files[0]) {
      return
    }
    // Read file and convert it to base64
    const reader = new FileReader()
    reader.readAsDataURL(evt.target.files[0])
    reader.onloadend = e => {
      this.setState({
        file: reader.result,
        name: this.props.name,
        fileChanged: true
      });
      this.props.onChange(this.state)
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.props.showImagePreview && <Card>
          <CardMedia
            style={this.useStyles}
            image={this.state.file}
            title="Foto"
          ></CardMedia>
        </Card>}
        <Button
          variant={this.state.fileChanged ? 'outlined' : 'contained'}
          component="label"
        >
          <i className="material-icons">cloud_upload</i>&nbsp; {this.props.label}
          <input
            type="file"
            onChange={this.handleFileUpload}
            style={{ display: "none" }}
          />
        </Button>
      </React.Fragment>
    )
  }
}

export default FileUpload;