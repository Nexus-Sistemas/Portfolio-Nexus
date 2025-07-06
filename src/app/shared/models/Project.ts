export interface Project {
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
    caseStudy: ProjectCaseStudy;
}

export interface ProjectCaseStudy {
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