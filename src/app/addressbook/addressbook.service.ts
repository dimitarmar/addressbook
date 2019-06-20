import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressbookService {

  private addresslistmodelJSON = 'assets/json/addresslistmodel.json';

  constructor(private http: HttpClient) {

  }

  getAddressListModel(): Observable<any> {
      return this.http.get(this.addresslistmodelJSON);
  }


}
