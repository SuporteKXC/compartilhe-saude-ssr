import { Component, OnInit } from '@angular/core';
import { ParceiroEspecialidade } from 'src/app/modules/shared/models/parceiro/parceiro-especialidade.model';
import { FormCadastrarProfissionalService } from 'src/app/modules/admin/services/form-cadastrar-profissional/form-cadastrar-profissional.service';
import { ParceirosService } from 'src/app/modules/shared/services/parceiros/parceiros.service';
import { SelectOption } from 'src/app/modules/shared/components/form/select/models/select-option.model';
import { CategoriaParceiroEnum } from '../../../gestao-parceiros/enums/categoria-parceiro.enum';

@Component({
  selector: 'app-form-especialidade',
  templateUrl: './form-especialidade.component.html',
  styleUrls: ['./form-especialidade.component.scss']
})
export class FormEspecialidadeComponent implements OnInit {

  public especialidadeOptions: SelectOption<ParceiroEspecialidade>[] = [];

  constructor(
    protected formCadastrarProfissionalService: FormCadastrarProfissionalService,
    private parceirosService: ParceirosService
  ) {}

  ngOnInit(): void {
    this.parceirosService.listarSubcategorias([CategoriaParceiroEnum.PROFISSIONAL_SAUDE]).subscribe(tipoEstabelecimentos => {
      this.especialidadeOptions = tipoEstabelecimentos.map(especialidade => ({
        label: especialidade.descricao,
        value: {
          descricao: especialidade.descricao,
          id: especialidade.id
        }
      }));
    });
  }
}
