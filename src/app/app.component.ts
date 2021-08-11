import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '@Input y @Output';

  usuarios:any = [];

  constructor(private _http:HttpClient) {

  }

  ngOnInit() {
    this._http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe((datos:any) => this.usuarios = datos);
  }

  borrarUsuario(id: number) {
    this.usuarios = this.usuarios.filter((usuario: { id: number; }) => usuario.id != id);
  }

}
