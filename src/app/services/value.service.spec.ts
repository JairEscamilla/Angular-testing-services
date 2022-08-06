import { ValueService } from './value.service';

describe('ValueService', () => {
  let service: ValueService;

  beforeEach(() => {
    service = new ValueService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Tests for get value', () => {
    it("should return 'my value'", () => {
      expect(service.getValue()).toBe('My value');
    });
  });
  describe('Tests for set value', () => {
    it('should change the value', () => {
      expect(service.getValue()).toBe('My value');
      service.setValue('change');
      expect(service.getValue()).toBe('change');
    });
  });

  describe('Tests for getPromise with then', () => {
    it('should return  "promise value" from promise', (done) => {
      service.getPromiseValue().then((value) => {
        expect(value).toBe('promise value');
        done();
      });
    });
  });

  describe('Tests for getPromise using async', () => {
    it('should return  "promise value" from promise', async () => {
      const response = await service.getPromiseValue();
      expect(response).toBe('promise value');
    });
  });

  describe('Tests for getObservable', () => {
    it('should return observable value', (done) => {
      service.getObservable().subscribe((response) => {
        expect(response).toBe('observable value');
        done();
      });
    });
  });
});
