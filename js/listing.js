import * as Fyn from '/node_modules/@fyn-software/component/fyn.js';
import * as Types from '/node_modules/@fyn-software/data/types.js';
import Event from './data/event.js';
import Participant from './data/participant.js';

export default class Listing extends Fyn.Component
{
    static localName = 'eventprikker-listing';

    static get properties()
    {
        return {
            events: Types.List.type(Event).default([
                new Event({
                    name: 'the party',
                    start: '19-04-2019',
                    end: '21-04-2019',
                    link: 'https://the-party.nl',
                    image: '/img/party.jpg',
                    participants: [
                        new Participant({
                            name: 'Chris P Bacon',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e8/e8015e4e96f5d55e4326e796c15daa4ea0822c09_full.jpg',
                            state: Participant.state.yes,
                        }),
                        new Participant({
                            name: 'GieltjE',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/15/154f5631dd97bc4284716bad2230f8ed115a1234_full.jpg',
                            state: Participant.state.yes,
                        }),
                        new Participant({
                            name: 'Fineas',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2e/2e9c3a4a93ad0424a4c0055474f7ada8a5a82175_full.jpg',
                            state: Participant.state.yes,
                        }),
                        new Participant({
                            name: 'satan JR',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c9/c96cc316a34375029379be358ba4543752b8c563_full.jpg',
                            state: Participant.state.yes,
                        }),
                        new Participant({
                            name: 'Chris P Bacon',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e8/e8015e4e96f5d55e4326e796c15daa4ea0822c09_full.jpg',
                            state: Participant.state.invited,
                        }),
                        new Participant({
                            name: 'GieltjE',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/15/154f5631dd97bc4284716bad2230f8ed115a1234_full.jpg',
                            state: Participant.state.invited,
                        }),
                        new Participant({
                            name: 'Fineas',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2e/2e9c3a4a93ad0424a4c0055474f7ada8a5a82175_full.jpg',
                            state: Participant.state.invited,
                        }),
                        new Participant({
                            name: 'satan JR',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c9/c96cc316a34375029379be358ba4543752b8c563_full.jpg',
                            state: Participant.state.invited,
                        }),
                        new Participant({
                            name: 'Chris P Bacon',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e8/e8015e4e96f5d55e4326e796c15daa4ea0822c09_full.jpg',
                            state: Participant.state.no,
                        }),
                        new Participant({
                            name: 'GieltjE',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/15/154f5631dd97bc4284716bad2230f8ed115a1234_full.jpg',
                            state: Participant.state.no,
                        }),
                        new Participant({
                            name: 'Fineas',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2e/2e9c3a4a93ad0424a4c0055474f7ada8a5a82175_full.jpg',
                            state: Participant.state.no,
                        }),
                        new Participant({
                            name: 'satan JR',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c9/c96cc316a34375029379be358ba4543752b8c563_full.jpg',
                            state: Participant.state.no,
                        }),
                        new Participant({
                            name: 'Chris P Bacon',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e8/e8015e4e96f5d55e4326e796c15daa4ea0822c09_full.jpg',
                            state: Participant.state.maybe,
                        }),
                        new Participant({
                            name: 'GieltjE',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/15/154f5631dd97bc4284716bad2230f8ed115a1234_full.jpg',
                            state: Participant.state.maybe,
                        }),
                        new Participant({
                            name: 'Fineas',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2e/2e9c3a4a93ad0424a4c0055474f7ada8a5a82175_full.jpg',
                            state: Participant.state.maybe,
                        }),
                        new Participant({
                            name: 'satan JR',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c9/c96cc316a34375029379be358ba4543752b8c563_full.jpg',
                            state: Participant.state.maybe,
                        }),
                    ],
                }),
                new Event({
                    name: 'campzone',
                    start: '26-07-2019',
                    end: '05-08-2019',
                    link: 'https://campzone.nl',
                    image: '/img/campzone.jpg',
                    participants: [
                        new Participant({
                            name: 'Chris P Bacon',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e8/e8015e4e96f5d55e4326e796c15daa4ea0822c09_full.jpg',
                            state: Participant.state.yes,
                        }),
                        new Participant({
                            name: 'GieltjE',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/15/154f5631dd97bc4284716bad2230f8ed115a1234_full.jpg',
                            state: Participant.state.yes,
                        }),
                    ],
                }),
            ]),
            user: Types.Object,
        };
    }

    async ready()
    {
        console.log(await Array.fromAsync(Event.findAll()));

        const settings = this.shadow.querySelector('fyn-common-overlay-dialog[settings]');
        const dialog = this.shadow.getElementById('newEvent');

        this.shadow.on('[fab]', {
            click: async e => {
                const { name, start, end } = await dialog.show();
                this.shadow.querySelector('#newEvent > fyn-common-form-form').clear();

                console.log(new Event({ name, start, end }));
            },
        });

        this.shadow.on('[user]', {
            click: ({ action }) => {
                switch(action)
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