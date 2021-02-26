  
import PopupState, { bindPopover, bindTrigger } from 'material-ui-popup-state';

import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import React from 'react';
import ReactGiphySearchbox from "react-giphy-searchbox";
import GifIcon from "@material-ui/icons/Gif";
import { IconButton } from '@material-ui/core';

const GifPopover = ({ sendMessageGifs }) => {
  const handleGifSelect = popupState => (item) => {
    popupState.close();
    sendMessageGifs(item.images.original.url)
  }

  return (
    <PopupState variant="popover" popupId="gifs-popup-popover">
      {(popupState) => (
        <div>
          <IconButton size="large" aria-label="gif"

            {...bindTrigger(popupState)}
          >
          <GifIcon style={{fontSize: 36, color: '#bdbebf'}} />
          </IconButton>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
            <Box p={2} style={{backgroundColor: '#474b53'}}>
              <ReactGiphySearchbox
                apiKey="9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7"
                onSelect={handleGifSelect(popupState)}
                masonryConfig={[
                  { columns: 2, imageWidth: 110, gutter: 5 },
                  { mq: "700px", columns: 3, imageWidth: 120, gutter: 5 }
                ]}
              />
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export default GifPopover;
