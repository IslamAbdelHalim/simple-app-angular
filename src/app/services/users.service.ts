import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from '../models/UserInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = 'http://localhost:5000/users';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(this.url);
  }

  getUserById(id: string): Observable<UserInterface> {
    return this.http.get<UserInterface>(`${this.url}/${id}`);
  }

  addUser(user: UserInterface): Observable<UserInterface> {
    return this.http.post<UserInterface>(this.url, user);
  }

  updateUser(user: UserInterface): Observable<UserInterface> {
    return this.http.put<UserInterface>(`${this.url}/${user.id}`, user);
  }

  deleteUser(user: UserInterface): Observable<void> {
    return this.http.delete<void>(`${this.url}/${user.id}`);
  }
}
