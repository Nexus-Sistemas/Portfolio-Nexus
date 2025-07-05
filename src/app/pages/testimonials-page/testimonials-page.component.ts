import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";

interface Testimonial {
    quote: string;
    author: string;
    role: string;
    company?: string; 
    avatar: string;
}

@Component({
    selector: 'app-testimonials-page',
    imports: [CommonModule, NavbarComponent],
    templateUrl: './testimonials-page.component.html',
    styleUrl: './testimonials-page.component.scss'
})

export class TestimonialsPageComponent implements OnInit {
    testimonials: Testimonial[] = [
        {
            quote: 'O trabalho do [Seu Nome] foi transformador para nossa startup. O site que ele desenvolveu não só superou nossas expectativas em design, mas também nos trouxe um aumento significativo na conversão de leads. Profissionalismo e excelência do início ao fim!',
            author: 'Ana Clara Silva',
            role: 'CEO',
            company: 'Tech Solutions Ltda.',
            avatar: 'https://placehold.co/100x100/1e293b/64ffda?text=AC',
        },
        {
            quote: 'Contratar o [Seu Nome] para desenvolver nosso sistema de gestão foi a melhor decisão. Ele entendeu perfeitamente nossas necessidades e entregou uma solução robusta e intuitiva que otimizou nossos processos internos e economizou horas de trabalho manual.',
            author: 'Bruno Fernandes',
            role: 'Diretor de Operações',
            company: 'Logística Eficiente',
            avatar: 'https://placehold.co/100x100/1e293b/64ffda?text=BF',
        },
        {
            quote: 'A atenção aos detalhes e a capacidade de transformar ideias complexas em soluções digitais elegantes é impressionante. O [Seu Nome] é um parceiro estratégico que realmente se importa com o sucesso do cliente. Recomendo fortemente!',
            author: 'Carla Dias',
            role: 'Empreendedora Digital',
            avatar: 'https://placehold.co/100x100/1e293b/64ffda?text=CD',
        },
        {
            quote: 'Desde a concepção até o lançamento, o [Seu Nome] demonstrou um conhecimento técnico excepcional e uma comunicação clara. Nosso e-commerce está mais rápido e com uma experiência de usuário muito superior, resultando em mais vendas.',
            author: 'Daniel Costa',
            role: 'Gerente de E-commerce',
            company: 'Moda Essencial',
            avatar: 'https://placehold.co/100x100/1e293b/64ffda?text=DC',
        },
        {
            quote: 'A consultoria e o suporte contínuo do [Seu Nome] são inestimáveis. Ele não apenas constrói, mas também nos ajuda a evoluir nossa presença online, sempre atento às novas tendências e otimizações de performance.',
            author: 'Elisa Rodrigues',
            role: 'Marketing Manager',
            company: 'Agência Criativa',
            avatar: 'https://placehold.co/100x100/1e293b/64ffda?text=ER',
        },
    ];
    
    constructor() {}
    
    ngOnInit(): void {
        // Inicializações que não dependem do DOM
    }
}