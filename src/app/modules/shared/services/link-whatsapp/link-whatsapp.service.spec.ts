import { TestBed } from "@angular/core/testing";
import { LinkWhatsappService } from "./link-whatsapp.service";

describe('LinkWhatsappService', () => {
    let service: LinkWhatsappService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LinkWhatsappService);
    });

    it('Deve criar', () => {
        expect(service).toBeTruthy();
    });

    it('Gerar link com texto inicial', () => {
        expect(service.gerarLink('boa tarde')).toBe('https://wa.me/552736002121?text=boa%20tarde');
    });

    it('Gerar link sem texto inicial', () => {
        expect(service.gerarLink()).toBe('https://wa.me/552736002121');
    });
});
