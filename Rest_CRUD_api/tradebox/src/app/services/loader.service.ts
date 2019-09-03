import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ItemModel, EditItemModel } from '../models/item-model';



const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
}) export class LoaderService {
  constructor(private httpClient: HttpClient) {

  }

  postItem(item) {
    return this.httpClient.post("animals", item, httpOptions);
  }

  getItem(item) {
    return this.httpClient.get("animals", item);
  }

  getItemDetails(id) {
    return this.httpClient.get<ItemModel>(`animals/${id}`);
  }

  deleteItem(id) {
    return this.httpClient.delete<ItemModel>(`animals/${id}`);
  }

  editItem(item) {
    let editItem = new EditItemModel(item.name, item.price, item.brand, item.created_date, item.desc, item.type); 
    return this.httpClient.put<ItemModel>(`animals/${item.id}`, editItem);
  }

}
