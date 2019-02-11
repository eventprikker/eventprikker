import * as Fyn from '/node_modules/@fyn-software/component/fyn.js';

export default class Entry extends Fyn.Component
{
    ready()
    {
        this.on('fyn-common-form-button[action]', {
            click: (e, t) => {
                for(const n of [ 'google', 'facebook' ])
                {
                    hello(n).logout();
                }

                hello.login(t.getAttribute('action'), { scope: 'email' });
            },
        });
    }
}