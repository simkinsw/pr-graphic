export type Player = {
    tag: string;
    realName: string;
    twitterHandle: string;
    rank: number;
    character: string;
    voterAverage: number;
    winLoss: string;
    prEvents: number;
    placements: Placement[];
    blurb: string[];
}

export type Placement = {
    placing: string;
    event: string;
}