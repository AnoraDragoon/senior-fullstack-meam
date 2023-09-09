export interface Club {
    name: string;
    text: string;
    image?: string;
    created?: Date;
}

export interface ClubUser {
    club: string;
    username: string;
    activated: boolean;
}
