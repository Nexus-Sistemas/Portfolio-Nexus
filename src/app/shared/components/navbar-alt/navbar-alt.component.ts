import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-navbar-alt',
    imports: [CommonModule, RouterModule],
    templateUrl: './navbar-alt.component.html',
    styleUrl: './navbar-alt.component.scss'
})

export class NavbarAltComponent implements OnInit {
    @Input() positionType: 'fixed' | 'sticky' = 'sticky';
    @Input() buttonText: string = '&larr; Voltar ao Início';
    @Input() buttonLink: string = '/';
    
    constructor() { }
    
    ngOnInit(): void {
    }
}