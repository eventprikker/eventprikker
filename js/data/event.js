import Model from '/node_modules/@fyn-software/data/model.js';
import * as Types from '/node_modules/@fyn-software/data/types.js';
import Participant from './participant.js';

export default class Event extends Model
{
    static get properties()
    {
        return {
            name: Types.String.default('the party'),
            start: Types.String.default(''),
            end: Types.String.default(''),
            link: Types.String.default(''),
            participants: Types.List.type(Participant).default([]),
        };
    }

    get stats()
    {
        const stats = {
            invited: 0,
            yes: 0,
            maybe: 0,
            no: 0,
        };

        for(const participant of this.participants)
        {
            stats[participant.state.value]++;
        }

        return Object.entries(stats)
            .filter(([ ,c ]) => c > 0)
            .map(([ t, c]) => Object.assign({ count: c }, Participant.state.valueOf(Participant.state[t])));
    }
}