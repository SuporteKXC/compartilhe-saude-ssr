import { TestBed } from "@angular/core/testing";
import { LocalStorageService } from "./local-storage.service";

describe('LocalStorageService', () => {
    let service: LocalStorageService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LocalStorageService);
    });

    it('Deve criar', () => {
        expect(service).toBeTruthy();
    });

});
