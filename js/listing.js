import * as Fyn from '/node_modules/@fyn-software/component/fyn.js';
import * as Types from '/node_modules/@fyn-software/data/types.js';
import Dialog from '/node_modules/@fyn-software/suite/js/common/overlay/dialog.js';
import Event from './data/event.js';
import Participant from './data/participant.js';

export default class Listing extends Fyn.Component
{
    static get properties()
    {
        return {
            events: Types.List.type(Event).default([
                Event.fromData({
                    name: 'the party',
                    start: '19-04-2019',
                    end: '21-04-2019',
                    link: 'https://the-party.nl',
                    image: '/img/party.jpg',
                    participants: [
                        Participant.fromData({
                            name: 'Chris P Bacon',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e8/e8015e4e96f5d55e4326e796c15daa4ea0822c09_full.jpg',
                            state: Participant.state.yes,
                        }),
                        Participant.fromData({
                            name: 'GieltjE',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/15/154f5631dd97bc4284716bad2230f8ed115a1234_full.jpg',
                            state: Participant.state.yes,
                        }),
                        Participant.fromData({
                            name: 'Fineas',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2e/2e9c3a4a93ad0424a4c0055474f7ada8a5a82175_full.jpg',
                            state: Participant.state.yes,
                        }),
                        Participant.fromData({
                            name: 'satan JR',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c9/c96cc316a34375029379be358ba4543752b8c563_full.jpg',
                            state: Participant.state.yes,
                        }),
                        Participant.fromData({
                            name: 'Chris P Bacon',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e8/e8015e4e96f5d55e4326e796c15daa4ea0822c09_full.jpg',
                            state: Participant.state.invited,
                        }),
                        Participant.fromData({
                            name: 'GieltjE',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/15/154f5631dd97bc4284716bad2230f8ed115a1234_full.jpg',
                            state: Participant.state.invited,
                        }),
                        Participant.fromData({
                            name: 'Fineas',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2e/2e9c3a4a93ad0424a4c0055474f7ada8a5a82175_full.jpg',
                            state: Participant.state.invited,
                        }),
                        Participant.fromData({
                            name: 'satan JR',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c9/c96cc316a34375029379be358ba4543752b8c563_full.jpg',
                            state: Participant.state.invited,
                        }),
                        Participant.fromData({
                            name: 'Chris P Bacon',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e8/e8015e4e96f5d55e4326e796c15daa4ea0822c09_full.jpg',
                            state: Participant.state.no,
                        }),
                        Participant.fromData({
                            name: 'GieltjE',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/15/154f5631dd97bc4284716bad2230f8ed115a1234_full.jpg',
                            state: Participant.state.no,
                        }),
                        Participant.fromData({
                            name: 'Fineas',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2e/2e9c3a4a93ad0424a4c0055474f7ada8a5a82175_full.jpg',
                            state: Participant.state.no,
                        }),
                        Participant.fromData({
                            name: 'satan JR',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c9/c96cc316a34375029379be358ba4543752b8c563_full.jpg',
                            state: Participant.state.no,
                        }),
                        Participant.fromData({
                            name: 'Chris P Bacon',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e8/e8015e4e96f5d55e4326e796c15daa4ea0822c09_full.jpg',
                            state: Participant.state.maybe,
                        }),
                        Participant.fromData({
                            name: 'GieltjE',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/15/154f5631dd97bc4284716bad2230f8ed115a1234_full.jpg',
                            state: Participant.state.maybe,
                        }),
                        Participant.fromData({
                            name: 'Fineas',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2e/2e9c3a4a93ad0424a4c0055474f7ada8a5a82175_full.jpg',
                            state: Participant.state.maybe,
                        }),
                        Participant.fromData({
                            name: 'satan JR',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c9/c96cc316a34375029379be358ba4543752b8c563_full.jpg',
                            state: Participant.state.maybe,
                        }),
                    ],
                }),
                Event.fromData({
                    name: 'campzone',
                    start: '26-07-2019',
                    end: '05-08-2019',
                    link: 'https://campzone.nl',
                    image: '/img/campzone.jpg',
                    participants: [
                        Participant.fromData({
                            name: 'Chris P Bacon',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e8/e8015e4e96f5d55e4326e796c15daa4ea0822c09_full.jpg',
                            state: Participant.state.yes,
                        }),
                        Participant.fromData({
                            name: 'GieltjE',
                            img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/15/154f5631dd97bc4284716bad2230f8ed115a1234_full.jpg',
                            state: Participant.state.yes,
                        }),
                    ],
                }),
            ]),
            user: User,
        };
    }

    ready()
    {
        const settings = this.shadow.querySelector('fyn-common-overlay-dialog[settings]');

        this.on('[fab]', {
            click: async e => {
                const event = new Event;
                const dialog = new Dialog;

                dialog.appendChild(await event.toComponent());
                const res = await dialog.show();

                console.log(res);

                // const [ result, data ] = await event.show();
                //
                // if(result === false)
                // {
                //     return;
                // }
                //
                // console.log(Event.fromData(data), data);
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