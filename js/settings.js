import * as Fyn from '/node_modules/@fyn-software/component/fyn.js';
import Dialog from '/node_modules/@fyn-software/suite/js/common/overlay/dialog.js';

export default class Settings extends Fyn.Component
{
    static localName = 'eventprikker-app-settings';
    static styles = [ 'fyn.suite.base' ];

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

    static async show()
    {
        const inst = new this;
        const dialog = new Dialog({
            img: '/img/banner.jpg',
            title: 'Settings'
        });
        dialog.appendChild(inst);

        return await dialog.show();
    }
}