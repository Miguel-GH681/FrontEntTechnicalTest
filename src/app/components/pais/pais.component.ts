import { Component } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Pais } from './pais.interface';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styles: [
  ]
})
export class PaisComponent {

  paises : Array<Pais> = [];

  constructor(private apiService : ApiService){ }

  ngOnInit(){
    this.apiService.getPaises().subscribe((res) =>{
      this.paises = res      
    })
  }

}
