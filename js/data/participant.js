import Model from '/node_modules/@fyn-software/data/model.js';

export default class Participant extends Model
{
    static get properties()
    {
        return {
            name: '',
            img: '',
            state: '',
        };
    }
}