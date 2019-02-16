import * as Fyn from '/node_modules/@fyn-software/component/fyn.js';
import Event from './data/event.js';

export default class Listing extends Fyn.Component
{
    static get properties()
    {
        return {
            activities: [
                Event.fromData({
                    name: 'the party',
                    start: '19-04-2019',
                    end: '21-04-2019',
                    link: 'https://the-party.nl',
                    participants: [
                        {
                            name: 'Chris P Bacon',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e8/e8015e4e96f5d55e4326e796c15daa4ea0822c09_full.jpg',
                            state: Event.state.yes,
                        },
                        {
                            name: 'GieltjE',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/15/154f5631dd97bc4284716bad2230f8ed115a1234_full.jpg',
                            state: Event.state.yes,
                        },
                        {
                            name: 'Fineas',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2e/2e9c3a4a93ad0424a4c0055474f7ada8a5a82175_full.jpg',
                            state: Event.state.yes,
                        },
                        {
                            name: 'satan JR',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c9/c96cc316a34375029379be358ba4543752b8c563_full.jpg',
                            state: Event.state.yes,
                        },
                        {
                            name: 'Chris P Bacon',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e8/e8015e4e96f5d55e4326e796c15daa4ea0822c09_full.jpg',
                            state: Event.state.invited,
                        },
                        {
                            name: 'GieltjE',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/15/154f5631dd97bc4284716bad2230f8ed115a1234_full.jpg',
                            state: Event.state.invited,
                        },
                        {
                            name: 'Fineas',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2e/2e9c3a4a93ad0424a4c0055474f7ada8a5a82175_full.jpg',
                            state: Event.state.invited,
                        },
                        {
                            name: 'satan JR',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c9/c96cc316a34375029379be358ba4543752b8c563_full.jpg',
                            state: Event.state.invited,
                        },
                        {
                            name: 'Chris P Bacon',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e8/e8015e4e96f5d55e4326e796c15daa4ea0822c09_full.jpg',
                            state: Event.state.no,
                        },
                        {
                            name: 'GieltjE',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/15/154f5631dd97bc4284716bad2230f8ed115a1234_full.jpg',
                            state: Event.state.no,
                        },
                        {
                            name: 'Fineas',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2e/2e9c3a4a93ad0424a4c0055474f7ada8a5a82175_full.jpg',
                            state: Event.state.no,
                        },
                        {
                            name: 'satan JR',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c9/c96cc316a34375029379be358ba4543752b8c563_full.jpg',
                            state: Event.state.no,
                        },
                        {
                            name: 'Chris P Bacon',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e8/e8015e4e96f5d55e4326e796c15daa4ea0822c09_full.jpg',
                            state: Event.state.maybe,
                        },
                        {
                            name: 'GieltjE',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/15/154f5631dd97bc4284716bad2230f8ed115a1234_full.jpg',
                            state: Event.state.maybe,
                        },
                        {
                            name: 'Fineas',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2e/2e9c3a4a93ad0424a4c0055474f7ada8a5a82175_full.jpg',
                            state: Event.state.maybe,
                        },
                        {
                            name: 'satan JR',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c9/c96cc316a34375029379be358ba4543752b8c563_full.jpg',
                            state: Event.state.maybe,
                        },
                    ],
                }),
                Event.fromData({
                    name: 'campzone',
                    start: '26-07-2019',
                    end: '05-08-2019',
                    link: 'https://campzone.nl',
                    participants: [
                        {
                            name: 'Chris P Bacon',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e8/e8015e4e96f5d55e4326e796c15daa4ea0822c09_full.jpg',
                            state: Event.state.yes,
                        },
                        {
                            name: 'GieltjE',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/15/154f5631dd97bc4284716bad2230f8ed115a1234_full.jpg',
                            state: Event.state.yes,
                        },
                    ],
                }),
            ],
            user: null,
        };
    }

    ready()
    {
        console.log(this.activities);

        const activity = this.shadow.querySelector('fyn-common-overlay-dialog[new]');
        const settings = this.shadow.querySelector('fyn-common-overlay-dialog[settings]');

        this.on('[fab]', {
            click: e => {
                activity.show();
            },
        });

        this.on('[user]', {
            click: e => {
                switch(e.detail.action)
                {
                    case 'settings':
                        settings.show();

                        return;
                        
                    case 'logout':
                        for(const n of [ 'google', 'facebook' ])
                        {
                            hello(n).logout();
                        }

                        window.location.reload();

                        return;
                }
            },
        });
    }
}