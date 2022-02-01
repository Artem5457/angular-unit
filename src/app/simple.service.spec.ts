import { SimpleService } from "./simple.service";

describe('Simple service', () => {
  let service: SimpleService;

  beforeEach(() => {
    service = new SimpleService();
  })

  it('Must create ecsemplar of class', () => {
    expect(service).toBeTruthy();
  });

  it('must add two numbers', () => {
    const sum = service.sum(1, 2);
    expect(sum).toBe(3);
  });

  it("return undefined, if we don't havesecond argument", () => {
    const sum = service.sum(1);
    expect(sum).toBeUndefined();
  })
})