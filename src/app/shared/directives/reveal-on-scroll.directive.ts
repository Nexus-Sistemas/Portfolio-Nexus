import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appRevealOnScroll]'
})
export class RevealOnScrollDirective implements OnInit, OnDestroy {
    private observer!: IntersectionObserver;
    
    constructor(private el: ElementRef, private renderer: Renderer2) { }
    
    ngOnInit() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.renderer.addClass(this.el.nativeElement, 'is-visible');
                    // Opcional: Para animar apenas uma vez, desconecte o observer
                    this.observer.unobserve(this.el.nativeElement);
                } else {
                    // Opcional: Se quiser que a animação se reverta ao sair da viewport
                    // this.renderer.removeClass(this.el.nativeElement, 'is-visible');
                }
            });
        }, {
            root: null, // viewport
            rootMargin: '0px',
            threshold: 0.1 // 10% do elemento visível
        });
        
        this.observer.observe(this.el.nativeElement);
        
        // Adiciona a classe 'reveal' inicialmente para o estado oculto
        this.renderer.addClass(this.el.nativeElement, 'reveal');
    }
    
    ngOnDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}
