import { Agent } from "./agent";

export interface World {
    t: number;
    n: number;
    agents: Agent[];
}

export const initWorld = (): World => {
    var agents: Agent[] = [];
    for (var i = 0; i < 10; i++) {
        agents[i] = {
            cash: 100.0
        };
    }
    var world: World = {
        n: 10,
        t: 0,
        agents: agents
    };
    world.n = 10;
    return world;
}

export const timestep = (world: World): World => {
    let newAgents: Agent[] = [];
    for (var i = 0; i < world.n; i++) {
        newAgents[i] = {
            cash: world.agents[i].cash - 1
        }
    }
    let newWorld = {
        t: world.t + 1,
        n: world.n,
        agents: newAgents
    }

    console.log("world.t = " + newWorld.t.toString());
    return newWorld;
}

const totalCash = (world: World): number => {
    var sum = 0;
    for (var i = 0; i < world.n; i++) {
        sum += world.agents[i].cash;
    }
    return sum;
}

const displayAgents = (world: World): JSX.Element[] => {
    return (world.agents.map((a) =>
        <li>{a.cash}</li>
    ));
}

export const displayWorld = (world: World): JSX.Element => {
    return (
        <ul>
            <li>Total # of agents: {world.n.toString()}</li>
            <li>Current time: {world.t}</li>
            <li>Total cash: {totalCash(world).toFixed(2)}</li>
            <li>Agents: <ul>{displayAgents(world)}</ul></li>
        </ul>
    );
}
