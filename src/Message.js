import { Avatar, Box, CardMedia, makeStyles, Typography } from "@material-ui/core";
import isUrl from "is-url";
import clsx from 'clsx';
import React, { useEffect, useState } from "react";
import "./Message.css";

const styles = (theme) => ({
  breakAll: {
    wordBreak: 'break-all',
    color: 'white',
  },
  link: {
    '&:hover': {
      color: 'navy'
    },
    '&:visited': {
      color: 'black'
    }
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    maxWidth: '340px',
    maxHeight: 'auto'
  
  }
});
const useStyles = makeStyles(styles);

function Message({ timestamp, user, message }) {
  const [imageUrl, setImageUrl] = useState('');
  const classes = useStyles();

  
  useEffect(() => {
    if(isUrl(message)) {    
      fetch(message)
        .then(response => response.blob())
        .then(image => {
          if(image.type.startsWith('image')) {
            setImageUrl(message);
          }
        })
        .catch(() => {
          const noCorsUrlPrefix = 'https://cors-anywhere.herokuapp.com/';
          const seperateStartPosition = message.indexOf('//') + 2;
          const cuttedUrl = message.substring(seperateStartPosition);
          const noCorsUrl = noCorsUrlPrefix + cuttedUrl;
          fetch(noCorsUrl)
            .then(res => res.blob())
            .then(img => {
              if(img.type.startsWith('image')) {
                setImageUrl(message);
              }
            })
            .catch(error => {
              console.error('Error', error)
            })
        }
      );
    }
  },[message])

  return (
    <div className="message">
      <Avatar src={user.photo} />
      <div className="message_info">
        <h4>
          {user.displayName}{" "}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <Typography
            variant="h6"
            className={isUrl(message) ? clsx([classes.breakAll, classes.link]) : classes.breakAll}
            component={isUrl(message) ? 'a' : undefined}
            href={isUrl(message) ? message : undefined}
            target={isUrl(message) ? '_blank' : undefined}
          >
            {message}
          </Typography>
          {imageUrl !== '' && 
        <Box py={1}>
          <CardMedia
            className={classes.media}
            image={imageUrl}

          />
        </Box>
      }

      </div>
    </div>
  );
}

export default Message;
