import { Component } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Departamento } from './departamento.interface';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styles: [
  ]
})
export class DepartamentoComponent {
  departamentos : Array<Departamento> = [];

  constructor(private apiService : ApiService){}

  ngOnInit(){
    this.apiService.getDepartamentos().subscribe(result =>{
      this.departamentos = result
    })
  }

}
