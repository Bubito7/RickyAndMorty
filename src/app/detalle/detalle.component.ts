import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit{

  //vble para la informacion detallada de un personaje
  detalle: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService){

  }

  ngOnInit(): void {
    this.getDetalle();
  }

  //metodo para obtener detalles de un personaje especifico
  getDetalle(): void{
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getCharacter(+id)
        .subscribe(character => this.detalle = character);
    }
  }
}
