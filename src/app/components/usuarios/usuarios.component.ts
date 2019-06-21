import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from 'src/app/clases/usuario';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  private usuarios: Usuario[] = []

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.listUsuarios().subscribe( data => {
      this.usuarios = data
      console.log(this.usuarios)
    })
  }
  

}
