import React from 'react'
import {Channel, useChatContext, MessageTeam} from "stream-chat-react"

import {ChannelInner, CreateChannel, EditChannel} from "./"

const ChannelContainer = ({
    isCreating,
    isEditing,
    setIsCreating,
    setIsEditing,
    createType,
}) => {
    const {channel} = useChatContext()

    if(isCreating){
        return(
            <div className="channel__container">
                <CreateChannel createType={createType} setIsCreating={isCreating}/>
            </div>
        )
    }

    if(isEditing){
        return(
            <div className="channel__container">
                <EditChannel setIsEditing={setIsEditing} setIsCreating={isCreating}/>
            </div>
        )
    }

    const EmptyState = () => (
        <div className="channel-empty__container">
            <p className="channel-empty__first">This is the beginning of your chat history.</p>
            <p className="channel-empty__second">Send Messages, attachments, links, emojis, gifs and more!</p>
        </div>
    )
    
    return (
        <div className="channel__container">
            <Channel
                EmptyStateIndicator={EmptyState}
                message={(messageProps, index) => <MessageTeam key={index} {...messageProps}/>}
            >
                <ChannelInner setIsEditing={setIsEditing}/>
            </Channel>
        </div>
    )
}

export default ChannelContainer
