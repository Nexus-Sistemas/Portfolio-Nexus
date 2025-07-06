import { Component, inject, OnInit } from '@angular/core';
import { NavbarAltComponent } from "../../shared/components/navbar-alt/navbar-alt.component";
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { ProjectsService } from '../../core/services/projects.service';
import { ProjectCaseStudy } from '../../shared/models/Project';

@Component({
    selector: 'app-project-page',
    imports: [CommonModule, RouterModule, NavbarAltComponent],
    templateUrl: './project-page.component.html',
    styleUrl: './project-page.component.scss'
})

export class ProjectPageComponent implements OnInit {    
    private route = inject(ActivatedRoute);
    private service = inject(ProjectsService);
    
    project: ProjectCaseStudy | undefined;
    isLoading = true;
    
    constructor() { }
    ngOnInit(): void {
        const projectId = this.route.snapshot.paramMap.get('id');
        
        if (projectId) {
            this.service.getProjectById(projectId).subscribe(foundProject => {
                this.project = foundProject;
                this.isLoading = false;
                
                if (!foundProject) {
                    console.error(`Projeto com ID '${projectId}' não foi encontrado.`);
                }
            });
        } else {
            console.error('Nenhum ID de projeto foi fornecido na URL.');
            this.isLoading = false;
        }
    }
}