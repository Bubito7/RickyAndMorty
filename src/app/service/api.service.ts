import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../modelo/response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Definimos una variable que será la URL de la API
  private baseUrl = 'https://rickandmortyapi.com/api/character';
  private currentPage = 1;

  // En el constructor, llamamos a la clase HttpClient para que podamos utilizar los métodos HTTP
  constructor(private http: HttpClient) { }

  // Método para obtener datos de la API y devolver un Observable del tipo Response
  public getData(): Observable<Response> {
    // Construimos la URL con la página actual
    const url = `${this.baseUrl}?page=${this.currentPage}`;
    // Realizamos una solicitud GET a la API y esperamos un objeto Response
    return this.http.get<Response>(url);
  }

  // Método para avanzar a la página siguiente
  public nextPage(): void {
    // Incrementamos el número de la página actual
    this.currentPage++;
  }

  // Método para retroceder a la página anterior
  public prevPage(): void {
    // Verificamos que la página actual sea mayor que 1 antes de decrementar
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Método para obtener los detalles de un personaje específico por su ID
  public getCharacter(id: number): Observable<any> {
    // Construimos la URL con el ID del personaje
    const url = `${this.baseUrl}/${id}`;
    // Realizamos una solicitud GET a la API para obtener los detalles del personaje
    return this.http.get(url);
  }
}
