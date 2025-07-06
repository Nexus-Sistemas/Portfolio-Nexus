import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, OnInit } from '@angular/core';

import Swiper from 'swiper';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { NavbarAltComponent } from "../../shared/components/navbar-alt/navbar-alt.component";
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProjectsService } from '../../core/services/projects.service';
import { Project } from '../../shared/models/Project';

Swiper.use([Pagination, Navigation, Autoplay]);

@Component({
    selector: 'app-results-page',
    imports: [CommonModule, RouterModule, NavbarAltComponent],
    templateUrl: './results-page.component.html',
    styleUrl: './results-page.component.scss'
})

export class ResultsPageComponent implements OnInit, AfterViewInit {    
    projects: Project[] = [];
    
    constructor(private el: ElementRef, private titleService: Title, private service: ProjectsService) {
        this.titleService.setTitle('Nexus Sistemas | Projetos');
    }
    
    ngOnInit() {
        this.service.getAll().subscribe((response) => {
            if (response) {
                this.projects = response;
                this.initializeSwipers();
            }
        })
    }
    
    ngAfterViewInit(): void {
    }
    
    private initializeSwipers(): void {
        setTimeout(() => {
            const swiperContainers = this.el.nativeElement.querySelectorAll('.project-swiper');
            swiperContainers.forEach((swiperElement: HTMLElement) => {
                new Swiper(swiperElement, {
                    loop: true,
                    pagination: {
                        el: swiperElement.querySelector('.swiper-pagination') as HTMLElement,
                        clickable: true,
                    },
                    navigation: {
                        nextEl: swiperElement.querySelector('.swiper-button-next') as HTMLElement,
                        prevEl: swiperElement.querySelector('.swiper-button-prev') as HTMLElement,
                    },
                    autoplay: {
                        delay: 5000, 
                        disableOnInteraction: false,
                    },
                });
            });
        });
    }
}