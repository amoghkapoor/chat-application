import {AddChannel} from "./AddChannel";

const TeamChannelList = ({children, error = false, loading, type, isCreating, setCreateType, setIsCreating,setIsEditing, setToggleContainer}) => {
    if(error){
        return type === "team" ? (
            <div className="team-channel-list">
                <p className="team-channel-list__message">
                    Connection error, please wait a moment and try again.
                </p>
            </div>
        ) : null
    }

    if(loading){
        return (
            <div className="team-channel-list">
                <p className="team-channel-list__message">
                    {type === "team" ? "Channels" : "Messages"} loading...
                </p>
            </div>
        )
    }

    return (
        <div className="team-channel-list">
            <div className="team-channel-list__header">
                <p className="team-channel-list__header__title">
                {type === "team" ? "Channels" : "Direct Messages"}
                </p>
                <AddChannel
                    type={type === "team" ? "team" : "messaging"} 
                    isCreating={isCreating}
                    setCreateType={setCreateType}
                    setIsCreating={setIsCreating}
                    setIsEditing={setIsEditing}
                    setToggleContainer={setToggleContainer}
                />
            </div>
            {children}
        </div>
    )
}

export default TeamChannelList