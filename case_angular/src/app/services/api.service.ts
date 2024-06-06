import { HttpClient } from '@angular/common/http'
import { Inject } from '@angular/core'
import { User } from '../model/user.model'

@Inject({
  providedIt: 'root'
})
export class ApiService {
  private baseUrl: string = "http://localhost:3000/items"

  constructor(private http: HttpClient) { }

  postRegistered(registarterObj: User) {
    return this.http.post<User>(`${this.baseUrl}`, registarterObj)
  }

  getRegistered() {
    return this.http.get<User>(`${this.baseUrl}`)
  }

  updateRegistered(registarterObj: User) {
    return this.http.put<User>(`${this.baseUrl}`, registarterObj)
  }

  deleteRegistered(id: number) {
    return this.http.delete<User>(`${this.baseUrl}/${id}`)
  }

  getRegisteredUserId(id: number) {
    return this.http.get<User>(`${this.baseUrl}/${id}`)
  }
}