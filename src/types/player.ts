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
    blurbAuthor: string;
    blurb: string[];
}

export type Placement = {
    placing: string;
    event: string;
}