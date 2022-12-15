import { Component } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Persona } from './persona.interface';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styles: [
  ]
})
export class PersonaComponent {
  personas : Array<Persona> = [];

  constructor(private apiService : ApiService){}

  ngOnInit(){
    this.apiService.getPersonas().subscribe(result => {
      this.personas = result;
    })
  }
}
