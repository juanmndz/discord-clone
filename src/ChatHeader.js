import { EditLocation, HelpRounded, Notifications, PeopleAltRounded, SearchRounded, SendRounded } from '@material-ui/icons'
import React from 'react'
import './ChatHeader.css'

function ChatHeader({channelName}) {

    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <h3>
                    <div className="chatHeader__hash">
                        #
                    </div>
                    {channelName}
                </h3>
            </div>

            <div className="chatHeader__right">
                <Notifications />
                <EditLocation />
                <PeopleAltRounded />

                <div className="chatHeader__search">
                    <input placeholderSearch="Search" />
                    <SearchRounded />
                </div>

                <SendRounded />
                <HelpRounded />
            </div>
        </div>
    )
}

export default ChatHeader
