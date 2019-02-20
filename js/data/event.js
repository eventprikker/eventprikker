import Model from '/node_modules/@fyn-software/data/model.js';
import * as Types from '/node_modules/@fyn-software/data/types.js';

const state = {
    invited: {
        text: 'Invited',
        icon: 'envelope',
        color: 'var(--info)',
        value: 'invited',
    },
    yes: {
        text: 'Going',
        icon: 'check',
        color: 'var(--success)',
        value: 'yes',
    },
    maybe: {
        text: 'Maybe',
        icon: 'hourglass',
        color: 'var(--warning)',
        value: 'maybe',
    },
    no: {
        text: 'Declined',
        icon: 'times',
        color: 'var(--failure)',
        value: 'no',
    },
};

export default class Event extends Model
{
    static get properties()
    {
        return {
            name: Types.String('the party'),
            start: Types.String(''),
            end: Types.String(''),
            link: Types.String(''),
            participants: Types.Array([]),
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
            .map(([ t, c]) => Object.assign(state[t], { count: c }));
    }

    static get state()
    {
        return state;
    }
}