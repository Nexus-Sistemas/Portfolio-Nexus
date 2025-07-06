import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

import { Project, ProjectCaseStudy } from '../../shared/models/Project';

@Injectable({
    providedIn: 'root'
})

export class ProjectsService {
    private dataUrl = 'data/projectsData.json';
    
    constructor(private http: HttpClient) { }
    
    getAll(): Observable<Project[]> {
        return this.http.get<Project[]>(this.dataUrl);
    }
    
    getProjectById(id: string | null): Observable<ProjectCaseStudy | undefined> {
        return this.getAll().pipe(
            map((projects) => projects.find((project) => project.id === id)?.caseStudy)
        );
    }
}
