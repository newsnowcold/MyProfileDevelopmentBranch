import { trigger, state, animate, transition, style } from '@angular/animations';

export const sidebarNavigation =

    trigger('sidebarNavigation', [
        state('close', style({
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            width: 0,
            'background-color': 'white',
            overflow: 'hidden',
            'z-index': 2
        })),
        state('open', style({
            width: '45%',
            bottom: 0,
            position: 'fixed',
            'background-color': 'white',
            top: 0,
            'z-index': 2
        })),
        transition('* => *', animate('250ms')),
    ]);