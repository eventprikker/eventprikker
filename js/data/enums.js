import Enum from '../../node_modules/@fyn-software/data/type/enum.js';

export class State extends Enum.define({
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
    invited: {
        text: 'Invited',
        icon: 'envelope',
        color: 'var(--info)',
        value: 'invited',
    },
}) {}