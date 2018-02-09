interface IMoveSpeed {

    minSpeed: number;
    maxSpeed: number;

    checkSpeed(speed: number): boolean;
}