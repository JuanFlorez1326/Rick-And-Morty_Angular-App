export interface EpisodesResponse {
    info   : Info;
    results: Episodes[];
}

export interface Info {
    count : number;
    pages : number;
    next  : string;
    prev  : string;
}

export interface Episodes {
    id         : number;
    name       : string;
    air_date   : string;
    episode    : string;
    url        : string;
    created    : string;
    characters : string[];
}