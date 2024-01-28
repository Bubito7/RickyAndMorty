import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';//Importa el servicio de enrutamiento de Angular, que se utiliza para navegar entre diferentes vistas.
import { Character } from '../modelo/character';//Importa el modelo Character, que define la estructura de los objetos de personajes en tu aplicación.

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 

  // Variables
  titulo: string = "API RickyAndMorty GLS";
  data: Character[] = [];//aqui almacenamos la información de los personajes obtenida del servicio.
  pageInfo: any; //almacena información adicional de la página. 
  page: number = 1;//numero pag inicial

  //en el constructor inyectamos los servicios 
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.loadPage();
  }

  // Para traernos la información de una página específica
  loadPage() {
    this.apiService.getData().subscribe(data => {
      console.log(data);  // Log the response to the console
      const { info, results } = data;
      this.data = results;
      this.pageInfo = info;
    });
  }
  
  // metodo para cargar la página siguiente
  loadNextPage(): void {
    if (this.pageInfo && this.pageInfo.next) {
      this.page++;
      this.loadPage();
    }
  }

  // metodo para cargar la página anterior
  loadPrevPage(): void {
    if (this.page > 1) {
      this.page--;
      this.loadPage();
    }
  }
  //Método para navegar a la vista de detalles de un personaje utilizando el servicio de enrutamiento.
  showCharacterDetails(characterId: number): void {
    this.router.navigate(['character', characterId]);
  }
}
