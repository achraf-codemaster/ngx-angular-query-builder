import { TestBed } from "@angular/core/testing";

import { QueryBuilderFactoryService } from "./query-builder-factory.service";

describe("QueryBuilderFactoryService", () => {
  let service: QueryBuilderFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueryBuilderFactoryService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
