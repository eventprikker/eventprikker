import * as Fyn from '/node_modules/@fyn-software/component/fyn.js';

export default class Listing extends Fyn.Component
{
    static get properties()
    {
        return {
            activities: [
                {
                    name: 'the party',
                    start: '19-04-2019',
                    end: '21-04-2019',
                    link: 'https://the-party.nl',
                    participants: [
                        {
                            name: 'Chris P Bacon',
                            img: '/img/chris-p-bacon.png',
                            state: {
                                text: 'Going',
                                icon: 'check',
                                color: 'var(--success)',
                            },
                        },
                        {
                            name: 'GieltjE',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/15/154f5631dd97bc4284716bad2230f8ed115a1234_full.jpg',
                            state: {
                                text: 'Going',
                                icon: 'check',
                                color: 'var(--success)',
                            },
                        },
                        {
                            name: 'Fineas',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2e/2e9c3a4a93ad0424a4c0055474f7ada8a5a82175_full.jpg',
                            state: {
                                text: 'Going',
                                icon: 'check',
                                color: 'var(--success)',
                            },
                        },
                        {
                            name: 'satan JR',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c9/c96cc316a34375029379be358ba4543752b8c563_full.jpg',
                            state: {
                                text: 'Going',
                                icon: 'check',
                                color: 'var(--success)',
                            },
                        },
                    ],
                },
                {
                    name: 'campzone',
                    start: '26-07-2019',
                    end: '05-08-2019',
                    link: 'https://campzone.nl',
                    participants: [
                        {
                            name: 'Chris P Bacon',
                            img: '/img/chris-p-bacon.png',
                            state: {
                                text: 'Going',
                                icon: 'check',
                                color: 'var(--success)',
                            },
                        },
                        {
                            name: 'GieltjE',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/15/154f5631dd97bc4284716bad2230f8ed115a1234_full.jpg',
                            state: {
                                text: 'Going',
                                icon: 'check',
                                color: 'var(--success)',
                            },
                        },
                    ],
                },
            ],
        };
    }

    ready()
    {
        const activity = this.shadow.querySelector('fyn-common-overlay-dialog[new]');
        const settings = this.shadow.querySelector('fyn-common-overlay-dialog[settings]');

        this.on('[user]', {
            click: e => {
                switch(e.detail.action)
                {
                    case 'new':
                        activity.show();
                        return;

                    case 'settings':
                        settings.show();

                        return;
                        
                    case 'logout':
                        return;
                }
            },
        });
    }
}