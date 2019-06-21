import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private endpoint: string = "http://localhost:8989/usuarios"

  constructor(private http: HttpClient) { }

  listUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.endpoint)
  }
}
