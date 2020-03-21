import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardMedia,
  Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  mediaImage: {
    height: 250
  },
}));
const FileUpload = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Card>
        <CardMedia
          className={classes.mediaImage}
          image="https://via.placeholder.com/250"
          title="Foto"
        ></CardMedia>
      </Card>
      <Button
        variant="contained"
        component="label"
      >
        <i className="material-icons">cloud_upload</i>&nbsp; {props.label}
        <input
          type="file"
          style={{ display: "none" }}
        />
      </Button>
    </React.Fragment>
  )
}

export default FileUpload;