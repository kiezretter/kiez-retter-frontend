import React from 'react';
import {
  Card,
  CardMedia,
  Button
} from '@material-ui/core';
import KiezheroImage from '../../assets/images/kiezhero_shadow.png';

class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: KiezheroImage
    }
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
        name: this.props.name
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
          variant="contained"
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