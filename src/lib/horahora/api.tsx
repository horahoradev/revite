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

export async function GetPartyState(PartyID: number): Promise<PartyState> {
    return {
        Users: [
            {
                UserID: 1,
                Name: "Otoman",
                IsLeader: true,
            },
            {
                UserID: 2,
                Name: "RegularUser",
                IsLeader: false,
            },
        ],
        Videos: [
            {
                Title: "my great video",
                ID: 1,
                Location: "here",
            },
            {
                Title: "another video",
                ID: 1,
                Location: "here",
            },
        ],
    };
}

// returns the new watch party ID
export async function CreateWatchParty(ChannelID: number): Promise<number> {
    return 1;
}

export async function Heartbeat(PartyID: number): Promise<boolean> {
    return true;
}

export async function JoinParty(PartyID: number): Promise<boolean> {
    return true;
}

export async function BecomeLeader(PartyID: number): Promise<boolean> {
    return true;
}

// TODO: return some kind of channel
export async function SubscribeToParty(PartyID: number): Promise<boolean> {
    return true;
}
