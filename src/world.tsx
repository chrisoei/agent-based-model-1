import { Agent } from "./agent";
            cash: 100.0
        };
    }
        n: 10,
        t: 0,
        agents: agents
    };
    world.n = 10;
    return world;
}

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