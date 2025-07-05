import { Component, OnInit } from '@angular/core';
import { NavbarAltComponent } from "../../shared/components/navbar-alt/navbar-alt.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';

interface ProjectCaseStudy {
    category: string;
    title: string;
    heroDescription: string;
    heroBackgroundImageUrl: string;
    overview: string;
    metrics: { value: string; label: string; }[];
    mainImageUrl: string;
    mainImageAlt: string;
    challenge: string;
    parallaxImageUrl: string;
    parallaxImageAlt: string;
    approach: { icon: string; title: string; description: string; }[];
    galleryImages: { src: string; alt: string; }[];
    technologiesIntro: string;
    technologies: { icon: string; title: string; description: string; }[];
    testimonial: { quote: string; author: string; role: string; }
    nextProject: { title: string; link: string; imageUrl: string; }
}

@Component({
    selector: 'app-project-page',
    imports: [CommonModule, RouterModule, NavbarAltComponent],
    templateUrl: './project-page.component.html',
    styleUrl: './project-page.component.scss'
})

export class ProjectPageComponent implements OnInit {    
    // Dados do projeto de estudo de caso
    project: ProjectCaseStudy = {
        category: 'E-commerce de Alta Performance',
        title: 'Startup de Moda Local',
        heroDescription: 'Um estudo de caso sobre como um e-commerce de alta performance transformou a presença digital da marca e impulsionou as vendas em 40%.',
        heroBackgroundImageUrl: 'https://duck.design/wp-content/uploads/2025/05/3-7.png',
        overview: 'Este projeto envolveu a reconstrução completa de um e-commerce para uma marca de moda local. O objetivo era criar uma plataforma moderna, rápida e autogerenciável que pudesse competir de igual para igual com grandes players do mercado, focando na experiência do usuário e na otimização para conversão.',
        metrics: [
            { value: '+40%', label: 'em Conversão' },
            { value: '&lt;1s', label: 'de Carregamento' },
        ],
        mainImageUrl: 'https://duck.design/wp-content/uploads/2025/05/3-7.png',
        mainImageAlt: 'Imagem principal do projeto',
        challenge: 'A Startup de Moda Local possuía um site antigo, lento e com uma experiência de compra confusa, resultando em altas taxas de abandono de carrinho. A cliente não tinha autonomia para atualizar o conteúdo e os produtos, dependendo de terceiros para qualquer alteração. O desafio era duplo: tecnológico e estratégico.',
        parallaxImageUrl: 'https://duck.design/wp-content/uploads/2025/05/3-7.png',
        parallaxImageAlt: 'Imagem Parallax',
        approach: [
            { icon: '🔍', title: 'Diagnóstico', description: 'Análise do site antigo, estudo de concorrentes e definição dos KPIs do projeto.' },
            { icon: '🎨', title: 'Design UX/UI', description: 'Criação de protótipos focados em uma jornada de compra simples, intuitiva e agradável.' },
            { icon: '💻', title: 'Desenvolvimento', description: 'Construção da plataforma com entregas semanais e feedbacks contínuos da cliente.' },
        ],
        galleryImages: [
            { src: 'https://duck.design/wp-content/uploads/2025/05/3-7.png', alt: 'Página de produto' },
            { src: 'https://duck.design/wp-content/uploads/2025/05/3-7.png', alt: 'Checkout simplificado' },
        ],
        technologiesIntro: 'Para cada projeto, seleciono as ferramentas mais adequadas para garantir segurança, performance e uma ótima experiência para o usuário final. Estas foram as escolhas para este projeto:',
        technologies: [
            { icon: '🚀', title: 'Next.js', description: 'Para um site ultra-rápido que melhora o ranking no Google.' },
            { icon: '💳', title: 'Stripe', description: 'Para pagamentos online seguros e confiáveis.' },
            { icon: '📦', title: 'PostgreSQL', description: 'Para um banco de dados robusto e escalável.' },
            { icon: '☁️', title: 'Vercel', description: 'Para uma hospedagem global rápida e segura.' },
        ],
        testimonial: {
            quote: 'O trabalho do [Seu Nome] foi um divisor de águas. Ele não só entregou um site rápido e bonito, como também nos ajudou a entender como usar a tecnologia para vender mais.',
            author: 'Joana Silva',
            role: 'CEO, Startup de Moda Local',
        },
        nextProject: {
            title: 'Plataforma de Cursos',
            link: 'pagina-projeto-2.html', // Placeholder link
            imageUrl: 'https://duck.design/wp-content/uploads/2025/05/3-7.png',
        }
    };
    
    constructor() { }
    
    ngOnInit(): void {
        
    }
}