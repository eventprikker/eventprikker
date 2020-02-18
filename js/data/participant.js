import * as Engine from '/node_modules/@fyn-software/data/engine.js';
import * as Types from '/node_modules/@fyn-software/data/types.js';
import { State } from './enums.js';

export default class Participant extends Engine.Model
{
    static get properties()
    {
        return {
            id: Types.Number.default(-1),
            name: Types.String.default(''),
            img: Types.String.default(''),
            state: State.default(State.invited),
        };
    }

    static get sources()
    {
        return {
            default: new Engine.Source(
                new Engine.Connection.Connection(),
                new Engine.Adapter.Adapter(),
                new Engine.Schema.Schema(),
            ),
        };
    }

    static get state()
    {
        return State;
    }
}