export interface CharactersResponse {
    info   : Info;
    results: Character[];
}

export interface Info {
    count : number;
    pages : number;
    next  : string;
    prev  : null;
}

export interface Character {
    id      : number;
    name    : string;
    status  : string;
    species : string;
    type    : string;
    gender  : string;
    image   : string;
    url     : string;
    created : string;
    episode : string[];
    origin  : OriginAndLocation;
    location: OriginAndLocation;
}

export interface OriginAndLocation {
    name?: string;
    url? : string;
}