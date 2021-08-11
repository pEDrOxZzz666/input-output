import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user:any;

  @Output() borrar = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  borrarUsuario(id: number) {
    this.borrar.emit(id);
  }

}
