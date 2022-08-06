import { FakeValueService } from './value-fake.service';
import { ValueService } from './value.service';
import { MasterService } from './master.service';

describe('MasterService', () => {
  it('should return "My value" from real service', () => {
    const valueService = new ValueService();
    const masterService = new MasterService(valueService);
    expect(masterService.getValue()).toBe('My value');
  });

  it('should return "other value" from fake service', () => {
    const fakeValueService = new FakeValueService();
    const masterService = new MasterService(
      fakeValueService as unknown as ValueService
    );
    expect(masterService.getValue()).toBe('fake value');
  });

  it('should return "other value" from fake object', () => {
    const fake = {
      getValue: () => 'fake from obj',
    };
    const masterService = new MasterService(fake as unknown as ValueService);
    expect(masterService.getValue()).toBe('fake from obj');
  });
});
