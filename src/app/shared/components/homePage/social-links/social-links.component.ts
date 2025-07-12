import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faWhatsapp, faGithub, faTiktok } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-social-links',
    imports: [CommonModule, FontAwesomeModule],
    templateUrl: './social-links.component.html',
    styleUrl: './social-links.component.scss'
})

export class SocialLinksComponent {
    socialLinks = [
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/nexus.sistemas.ofc/',
            icon: faInstagram,
            title: 'Instagram da Nexus Sistemas'
        },
        {
            name: 'Whatsapp',
            url: `https://api.whatsapp.com/send?phone=5513991838939&text=Olá! Vim pelo seu site e gostaria de mais informações.`,
            icon: faWhatsapp,
            title: 'Entre em contato pelo WhatsApp'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/Nexus-Sistemas',
            icon: faGithub,
            title: 'GitHub da Nexus Sistemas'
        },
        {
            name: 'TikTok',
            url: 'https://www.tiktok.com/@nexus.sistemas.ofc',
            icon: faTiktok,
            title: 'TikTok da Nexus Sistemas'
        }
    ];
    
    constructor() { }
}