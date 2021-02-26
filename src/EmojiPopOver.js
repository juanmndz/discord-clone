  
import PopupState, { bindPopover, bindTrigger } from 'material-ui-popup-state';

import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import React from 'react';
import { IconButton } from '@material-ui/core';
import { Picker } from 'emoji-mart';
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

const EmojiEmotion = ({ input, setInput }) => {
  const handleEmojiSelect = popupState => (emoji) => {
    popupState.close();
    setInput(`${input ? input  : ""}${emoji.native}`)
  }

  return (
    <PopupState variant="popover" popupId="emoji-popup-popover">
      {(popupState) => (
        <div>
          <IconButton size="large" aria-label="gif"

            {...bindTrigger(popupState)}
          >
          <EmojiEmotionsIcon style={{fontSize: 36, color: '#bdbebf'}} />
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

            <Picker onSelect={handleEmojiSelect(popupState)} theme="dark" />

            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export default EmojiEmotion;
