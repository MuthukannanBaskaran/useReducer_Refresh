export type type_Person = {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    location: {
        street: {
            number: number;
            name: string;
        };
        city: string;
        state: string;
        country: string;
        postcode: number | string; // sometimes APIs return string
        coordinates: {
            latitude: string;
            longitude: string;
        };
        timezone: {
            offset: string;
            description: string;
        };
    };
    email: string;
    login: {
        uuid: string;
        username: string;
        password: string;
        salt: string;
        md5: string;
        sha1: string;
        sha256: string;
    };
    dob: {
        date: string; // ISO string
        age: number;
    };
    registered: {
        date: string; // ISO string
        age: number;
    };
    phone: string;
    cell: string;
    id: {
        name: string;
        value: string | null; // sometimes APIs return null
    };
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    nat: string;
};

export type CounterState = {
    count: number;
};

export const CounterActions = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    RESET: "RESET"
} as const;

export type CounterActionType =
    | { type: typeof CounterActions.INCREMENT }
    | { type: typeof CounterActions.DECREMENT }
    | { type: typeof CounterActions.RESET };
