import * as Engine from '/node_modules/@fyn-software/data/engine.js';
import * as Types from '/node_modules/@fyn-software/data/types.js';
import Participant from './participant.js';

const EventprikkerIndexedDB = Engine.Connection.IndexedDB.define('eventprikker', { events: 'name' }, 1);

export default class Event extends Engine.Model
{
    static get properties()
    {
        return {
            name: Types.String.default('the party'),
            start: Types.Datetime.default(''),
            end: Types.Datetime.default(''),
            link: Types.String.default(''),
            image: Types.String.default(''),
            participants: Types.List.type(Participant).default([]),
        };
    }

    static get sources()
    {
        return {
            default: new Engine.Source(
                new EventprikkerIndexedDB('events'),
                new Engine.Adapter.Adapter.default(),
                new Engine.Schema.Schema(),
            ),
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