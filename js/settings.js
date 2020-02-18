import * as Fyn from '/node_modules/@fyn-software/component/fyn.js';

export default class Settings extends Fyn.Component
{
    static localName = 'eventprikker-settings';

    static get properties()
    {
        return {
        };
    }

    ready()
    {
        this.on({
            click: () => {
                
            },
        });
    }
}