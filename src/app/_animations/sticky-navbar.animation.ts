import { trigger, state, animate, transition, style } from '@angular/animations';

export const stickyNavBarAnimation = 

trigger('stickyNavBarAnimation', [
    state('init', style({
        height: '100px',
        backgroundColor: 'transparent'
    })),
    state('partial-scrolled', style({
        height: '50px'
    })),
    state('scrolled', style({
        color: '#ffffff',
        backgroundColor: '#222222'
    })),
    transition('* => *', animate('250ms')),
]);