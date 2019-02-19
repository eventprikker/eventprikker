import Model from '/node_modules/@fyn-software/data/model.js';
import String from '/node_modules/@fyn-software/data/type/string.js';
import Array from '/node_modules/@fyn-software/data/type/array.js';

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
            name: String('the party'),
            start: String(''),
            end: String(''),
            link: String(''),
            participants: Array([]),
        };
    }

    get stats()
    {
        this.participants = null;

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

        return Array(Object.entries(stats).filter(([ ,c ]) => c > 0).map(([ t, c]) => Object.assign(state[t], { count: c })));
    }

    static get state()
    {
        return state;
    }
}