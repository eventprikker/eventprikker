import Model from '/node_modules/@fyn-software/data/model.js';
import * as Types from '/node_modules/@fyn-software/data/types.js';
import { State } from './enums.js';

export default class Participant extends Model
{
    static get properties()
    {
        return {
            name: Types.String.default(''),
            img: Types.String.default(''),
            state: State.default(State.invited),
        };
    }

    static get state()
    {
        return State;
    }
}