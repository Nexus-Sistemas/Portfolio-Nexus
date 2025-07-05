import { Component } from '@angular/core';

import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

import { NavbarComponent } from "../../shared/components/navbar/navbar.component";

import { HeroSectionComponent } from "../../shared/components/homePage/hero-section/hero-section.component";
import { AboutSectionComponent } from "../../shared/components/homePage/about-section/about-section.component";
import { IntroductionSectionComponent } from "../../shared/components/homePage/introduction-section/introduction-section.component";
import { ResultsSectionComponent } from "../../shared/components/homePage/results-section/results-section.component";
import { TestimonialsSectionComponent } from "../../shared/components/homePage/testimonials-section/testimonials-section.component";
import { ContactSectionComponent } from "../../shared/components/homePage/contact-section/contact-section.component";
import { SolutionsSectionComponent } from "../../shared/components/homePage/solutions-section/solutions-section.component";
import { SocialLinksComponent } from "../../shared/components/homePage/social-links/social-links.component";

@Component({
    selector: 'app-home-page',
    imports: [HeroSectionComponent, AboutSectionComponent, IntroductionSectionComponent, ResultsSectionComponent, TestimonialsSectionComponent, ContactSectionComponent, SolutionsSectionComponent, NavbarComponent, SocialLinksComponent],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss'
})

export class HomePageComponent {
    
}
