import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tasinmaz } from '../models/tasinmaz.model';

@Injectable({
  providedIn: 'root'
})
export class TasinmazService {
  private apiUrl = 'https://localhost:7241/api/tasinmaz';

  constructor(private http: HttpClient) { }

  getTasinmazlar(): Observable<Tasinmaz[]> {
    return this.http.get<Tasinmaz[]>(this.apiUrl);
  }

  getTasinmaz(id: number): Observable<Tasinmaz> {
    return this.http.get<Tasinmaz>(`${this.apiUrl}/${id}`);
  }

  createTasinmaz(tasinmaz: Tasinmaz): Observable<Tasinmaz> {
    return this.http.post<Tasinmaz>(this.apiUrl, tasinmaz);
  }

  updateTasinmaz(id: number, tasinmaz: Tasinmaz): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, tasinmaz);
  }

  deleteTasinmaz(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
} 