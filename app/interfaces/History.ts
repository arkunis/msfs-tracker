export interface FlightTrack {
    id: string;
    user_id: string;
    latitude: number;
    longitude: number;
    altitude: number;
    heading: number;
    speed: number;
    aircraft: string;
    timestamp: string;
}

export interface FlightSession {
    tracks: FlightTrack[];
    startTime: string;
    endTime: string;
    aircraft: string;
    distance: number;
}

export type FlightTrackMap = Map<string, FlightTrack>;
export type FlightSessionMap = Map<string, FlightSession>;