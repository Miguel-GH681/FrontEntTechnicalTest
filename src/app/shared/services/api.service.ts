import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pais } from 'src/app/components/pais/pais.interface';
import { Departamento } from 'src/app/components/departamento/departamento.interface';
import { Persona } from 'src/app/components/persona/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private endpoint = environment.baseUrl;

  constructor(private httpClient : HttpClient) { }

  getPaises() : Observable<Array<Pais>>{
    return this.httpClient.get<Array<Pais>>(`${this.endpoint}/getPaises`)
  }

  getDepartamentos() : Observable<Array<Departamento>> {
    return this.httpClient.get<Array<Departamento>>(`${this.endpoint}/getDepartamentos`);
  }

  getPersonas() : Observable<Array<Persona>> {
    return this.httpClient.get<Array<Persona>>(`${this.endpoint}/getPersonas`);
  }
}

