import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SolutionsPageComponent } from './pages/solutions-page/solutions-page.component';
import { ResultsPageComponent } from './pages/results-page/results-page.component';
import { TestimonialsPageComponent } from './pages/testimonials-page/testimonials-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'inicio', 
        pathMatch: 'full' 
    },
    {
        path: 'inicio',
        component: HomePageComponent
    },
    {
        path: 'solucoes',
        component: SolutionsPageComponent
    },
    {
        path: 'projetos',
        component: ResultsPageComponent
    },
    {
        path: 'depoimentos',
        component: TestimonialsPageComponent
    },
    {
        path: 'projeto/:id',
        component: ProjectPageComponent
    },
];
