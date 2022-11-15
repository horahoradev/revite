export interface Video {
    Title: string;
    ID: number;
    Location: string;
}

export interface User {
    UserID: number;
    Name: string;
    IsLeader: boolean;
}

export interface PartyState {
    Users: User[];
    Videos: Video[];
}

/*
        e.POST("/api/newwatchparty/:id", r.handleNewWatchParty)
        e.POST("/api/joinwatchparty", r.handleJoinWatchParty)
        e.POST("/api/heartbeat", r.handleHeartbeat)
        e.GET("/api/partystate/:id", r.handleGetPartyState)
        e.POST("/api/addvideo/:id", r.handleAddVideo)
        e.POST("/api/nextvideo/:id", r.handleNextVideo)
*/

export async function GetPartyState(PartyID: BigInt): Promise<PartyState> {
    const resp = await fetch(
        `http://localhost/api/partystate/${PartyID.toString()}`,
    );
    return await resp.json();

    // return {
    //     Users: [
    //         {
    //             UserID: 1,
    //             Name: "Otoman",
    //             IsLeader: true,
    //         },
    //         {
    //             UserID: 2,
    //             Name: "Other",
    //             IsLeader: false,
    //         },
    //     ],
    //     Videos: [
    //         {
    //             Title: "sm28190236",
    //             ID: 1,
    //             Location: "https://f002.backblazeb2.com/file/otomadsold/sm28190236.mp4.mpd",
    //         },
    //     ],
    // };
}

// returns the new watch party ID
export async function CreateWatchParty(ChannelID: number): Promise<number> {
    const options = {
        method: 'POST'
    };

    await fetch(`http://localhost/api/newwatchparty/${ChannelID}`, options);
    return ChannelID;
}

export async function Heartbeat(PartyID: number): Promise<boolean> {
    const options = {
        method: 'POST'
    };

    await fetch(`http://localhost/api/heartbeat`, options);
}

export async function JoinParty(PartyID: number): Promise<boolean> {
    const options = {
        method: 'POST',
    };

    await fetch(`http://localhost/api/joinwatchparty/${PartyID}`, options);
    return true;
}

export async function BecomeLeader(PartyID: number): Promise<boolean> {
    return true;
}

// TODO: return some kind of channel
export async function SubscribeToParty(PartyID: number): Promise<boolean> {
    return true;
}
