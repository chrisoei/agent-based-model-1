import { Agent } from "./agent";export interface World {    t: number;    n: number;    agents: Agent[];}export const initWorld = (): World => {    var agents: Agent[] = [];    for (var i = 0; i < 10; i++) {        agents[i] = {
            cash: 100.0
        };
    }    var world: World = {
        n: 10,
        t: 0,
        agents: agents
    };
    world.n = 10;
    return world;
}export const timestep = (world: World) => {    for (var i = 0; i < world.n; i++) {

    }
}

export const displayWorld = (world: World): JSX.Element => {
    return (
        <ul>
            {
                world.n.toString()
            }
        </ul>
    );
}
