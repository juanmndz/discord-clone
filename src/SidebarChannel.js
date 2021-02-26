import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectChannelName, setChannelInfo } from './features/appSlice'
import './SidebarChannel.css'

function SidebarChannel({id, channelName}) {
    const channel = useSelector(selectChannelName);
    console.log(channelName, 'channel')
    const isSelected = typeof channel === "string" && channel.toUpperCase() === channelName.toUpperCase() && true
    console.log(isSelected, 'isSelected')
    const highlightStyle = {backgroundColor: '#40464b', color: '#fff'}

    const dispatch = useDispatch()
    return (
        <div className="sidebarChannel"  onClick={() => dispatch(setChannelInfo({channelId: id, channelName: channelName}))}>
            <h4 style={isSelected ? highlightStyle: {}}><span className="sidebarChannel__hash">#</span>{channelName}</h4>

        </div>
    )
}

export default SidebarChannel
