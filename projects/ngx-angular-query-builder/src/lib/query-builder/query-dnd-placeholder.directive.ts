import { Directive, TemplateRef } from "@angular/core";

@Directive({ selector: "[queryDndPlaceholder]" })
export class QueryDndPlaceholderDirective {
  constructor(public template: TemplateRef<any>) {}
}
