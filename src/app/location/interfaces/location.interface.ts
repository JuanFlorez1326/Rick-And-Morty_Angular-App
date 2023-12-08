export interface LocationResponse {
    info: Info;
    results: Locations[];
}

export interface Info {
    count : number;
    pages : number;
    next  : string;
    prev  : string;
}

export interface Locations {
    id        : number;
    name      : string;
    type      : string;
    dimension : string;
    url       : string;
    created   : string;
    residents : string[];
}