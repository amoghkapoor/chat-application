import React, {useState} from 'react'
import { StreamChat } from "stream-chat"
import { Chat } from "stream-chat-react"
import Cookies from "universal-cookie"
import { ChannelListContainer, ChannelContainer, Auth } from "./components"
import 'stream-chat-react/dist/css/index.css'
import "./app.css"

const cookies = new Cookies()

const apiKey = "ub9gpde5qu5k"
const authToken = cookies.get("token")

const client = StreamChat.getInstance(apiKey)

if(authToken){
    client.connectUser({
        fullName: cookies.get("fullName"),
        name: cookies.get("username"),
        id: cookies.get("userId"),
        phoneNumber: cookies.get("phoneNumber"),
        image: cookies.get("avatarUrl"),
        hashedPassword: cookies.get("hashedPassword"),
    }, authToken)
}

const App = () => {
    const [createType, setCreateType] = useState("")
    const [isCreating, setIsCreating] = useState(false)
    const [isEditing, setIsEditing] = useState(false)

    if(!authToken) return <Auth/>

    return (
        <div className="app__wrapper">
            <Chat client={client} theme="team light">

                <ChannelListContainer 
                isCreating={isCreating}
                setCreateType={setCreateType}
                setIsCreating={setIsCreating}
                setIsEditing={setIsEditing}
                />
                <ChannelContainer 
                isCreating={isCreating}
                isEditing={isEditing}
                setIsCreating={setIsCreating}
                setIsEditing={setIsEditing}
                createType={createType}
                />

            </Chat>
        </div>
    )
}

export default App
