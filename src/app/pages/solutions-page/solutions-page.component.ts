import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Solution {
    title: string;
    description: string;
    points: string[];
    callToAction: string;
    callToActionLink: string;
    imageUrl: string;
    imageAlt: string;
    reverseLayout: boolean;
}

@Component({
    selector: 'app-solutions-page',
    imports: [CommonModule, RouterModule, NavbarComponent],
    templateUrl: './solutions-page.component.html',
    styleUrl: './solutions-page.component.scss'
})

export class SolutionsPageComponent implements OnInit {
    solutions: Solution[] = [
        {
            title: 'Sites e Landing Pages que Geram Vendas',
            description: 'No cenário digital atual, sua presença online é crucial. Eu desenvolvo websites e landing pages que não são apenas visualmente atraentes, mas estrategicamente pensados para **converter visitantes em clientes**.',
            points: [
                '**Design Otimizado:** Layouts intuitivos e responsivos para qualquer dispositivo.',
                '**SEO Robusto:** Estratégias para que seu site seja encontrado nos buscadores.',
                '**Performance Superior:** Carregamento rápido para garantir uma ótima experiência do usuário.',
                '**Chamadas para Ação Claras:** Guiando o visitante para o próximo passo.',
            ],
            callToAction: 'Solicitar Orçamento de Site',
            callToActionLink: 'index.html#contato',
            imageUrl: 'https://placehold.co/700x450/1e293b/64ffda?text=Sites+e+Landing+Pages',
            imageAlt: 'Ilustração de website responsivo',
            reverseLayout: false,
        },
        {
            title: 'Sistemas Web que Otimizam sua Operação',
            description: 'Muitas empresas ainda perdem tempo e recursos com processos manuais e desorganizados. Eu desenvolvo **sistemas web personalizados** que automatizam tarefas, centralizam informações e otimizam sua gestão diária.',
            points: [
                '**Dashboards Interativos:** Visualize seus dados de forma clara para tomar decisões estratégicas.',
                '**Plataformas de Gestão:** Controle financeiro, estoque, clientes, projetos, tudo em um só lugar.',
                '**Áreas de Membros:** Ofereça conteúdo exclusivo e gerencie acessos de forma segura.',
                '**Automação de Processos:** Reduza erros e economize tempo com automação inteligente.',
            ],
            callToAction: 'Discutir um Sistema Personalizado',
            callToActionLink: 'index.html#contato',
            imageUrl: 'https://placehold.co/700x450/1e293b/64ffda?text=Sistemas+Web',
            imageAlt: 'Ilustração de dashboard de sistema',
            reverseLayout: true,
        },
        {
            title: 'Parceria Estratégica e Evolução Contínua',
            description: 'Meu trabalho não termina na entrega do projeto. Eu ofereço uma parceria estratégica contínua para garantir que sua presença digital esteja sempre otimizada e evoluindo com as demandas do mercado.',
            points: [
                '**Consultoria de Performance:** Análise e otimização para velocidade e SEO.',
                '**Manutenção e Suporte:** Garantia de que seu site esteja sempre online e seguro.',
                '**Evolução de Funcionalidades:** Planejamento e implementação de novas features.',
                '**Integrações:** Conexão com outras ferramentas e APIs para expandir suas capacidades.',
            ],
            callToAction: 'Agendar Consultoria Estratégica',
            callToActionLink: 'index.html#contato',
            imageUrl: 'https://placehold.co/700x450/1e293b/64ffda?text=Parceria+e+Evolução',
            imageAlt: 'Ilustração de trabalho em equipe e estratégia',
            reverseLayout: false,
        },
    ];
    
    constructor() {}
    
    ngOnInit(): void {}
}