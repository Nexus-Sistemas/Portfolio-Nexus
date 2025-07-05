import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';

import Swiper from 'swiper';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { NavbarAltComponent } from "../../shared/components/navbar-alt/navbar-alt.component";
import { RouterModule } from '@angular/router';
Swiper.use([Pagination, Navigation, Autoplay]);

interface Project {
    id: string;
    category: string;
    title: string;
    challenge: string;
    solution: string;
    technologies: string[];
    results: string[];
    siteLink: string;
    images: string[];
    reverseLayout: boolean;
}

@Component({
    selector: 'app-results-page',
    imports: [CommonModule, RouterModule, NavbarAltComponent],
    templateUrl: './results-page.component.html',
    styleUrl: './results-page.component.scss'
})

export class ResultsPageComponent implements OnInit, AfterViewInit, OnDestroy {
    projects: Project[] = [
        {
            id: 'project1',
            category: 'E-commerce de Alta Performance',
            title: 'Startup de Moda Local',
            challenge: 'A cliente precisava de uma loja virtual com identidade visual forte, extremamente rápida e com um processo de compra intuitivo para competir com grandes marcas do setor de moda.',
            solution: 'Desenvolvi um e-commerce completo utilizando Next.js para garantir performance máxima e otimização para o Google (SEO). Criei um painel administrativo simples para que a cliente pudesse gerenciar produtos e pedidos sem dificuldade, com integração direta aos sistemas de pagamento e logística.',
            technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Vercel'],
            results: [
                'Aumento de <span class="brand-text font-bold">40% na taxa de conversão</span> de visitantes para clientes.',
                'Tempo de carregamento da página <span class="brand-text font-bold">abaixo de 1 segundo</span>.',
                'Nota <span class="brand-text font-bold">98/100 no Google PageSpeed Insights</span>.',
            ],
            siteLink: '1',
            images: [
                'https://placehold.co/800x600/1e293b/64ffda?text=Tela+Principal',
                'https://placehold.co/800x600/1e293b/64ffda?text=Painel+Admin',
                'https://placehold.co/800x600/1e293b/64ffda?text=Versão+Mobile',
            ],
            reverseLayout: false,
        },
        {
            id: 'project2',
            category: 'Plataforma de Cursos Online',
            title: 'Educadora Digital',
            challenge: 'A cliente vendia seus cursos manualmente por redes sociais e precisava de uma plataforma profissional para hospedar as aulas, gerenciar o acesso dos alunos e automatizar os pagamentos.',
            solution: 'Criei uma área de membros exclusiva e segura, onde os alunos podem assistir às aulas, baixar materiais e acompanhar seu progresso. A plataforma foi integrada com a Hotmart para automatizar a liberação de acesso após a compra.',
            technologies: ['React', 'Node.js', 'Firebase', 'API Hotmart'],
            results: [
                'Redução de <span class="brand-text font-bold">10 horas de trabalho manual</span> por semana na gestão de alunos.',
                'Aumento de <span class="brand-text font-bold">25% na taxa de satisfação</span> dos alunos (NPS).',
                'Possibilitou a criação de <span class="brand-text font-bold">3 novos produtos</span> na esteira de vendas.',
            ],
            siteLink: '2',
            images: [
                'https://placehold.co/800x600/1e293b/64ffda?text=Área+de+Membros',
                'https://placehold.co/800x600/1e293b/64ffda?text=Página+da+Aula',
                'https://placehold.co/800x600/1e293b/64ffda?text=Login+Seguro',
            ],
            reverseLayout: true,
        },
    ];
    
    constructor(private el: ElementRef) {}
    
    ngOnInit(): void {
    }
    
    ngAfterViewInit(): void {
        this.initializeSwipers();
    }
    
    ngOnDestroy(): void {
        // Limpeza de recursos se necessário
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