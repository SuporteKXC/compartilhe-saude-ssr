import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PedidoAdmService } from './pedidos-adm.service';

describe('PedidoAdmService', () => {
    let service: PedidoAdmService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        service = TestBed.inject(PedidoAdmService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
