import { Directive, TemplateRef } from "@angular/core";

@Directive({ selector: "[queryDragHandler]" })
export class QueryDragHandlerDirective {
  constructor(public template: TemplateRef<any>) {}
}
