export interface Plane {
    userId: string;
    username: string;
    latitude: number;
    longitude: number;
    altitude: number;
    heading: number;
    speed: number;
    aircraft: string;
}

export interface WeatherData {
    wind: {
        speed: number;
        deg: number;
        gusts: number;
    };
    main: {
        temp: number;
        pressure: number;
        humidity: number;
        feels_like: number;
    };
    precipitation: number;
    weather_code: number;
}

export type WeatherDataMap = Map<string, WeatherData>;
export type PlaneMap = Map<string, Plane>;