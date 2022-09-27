import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[capUnless]'
})
export class UnlessDirective {

    private hasView = false;

    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

    @Input() set capUnless(condition: boolean) {
        if (!condition && !this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        } else if (condition && this.hasView) {
            this.viewContainer.clear();
            this.hasView = false;
        }
    }
}
