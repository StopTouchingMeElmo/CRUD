import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';
import { ItemModel } from 'src/app/models/item-model';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  displayedColumns: string[] = ['name', 'price', 'brand', 'created_date', 'desc','type'];
  data:ItemModel [] = [];
  isLoadingResults = true;

  constructor(private loader: LoaderService) { }

  itemModel: ItemModel = new ItemModel();

  ngOnInit() {
    this.loader.getItem(this.itemModel)
    .subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

 /*  downloadItems() {
    this.loader.getItem(this.itemModel).subscribe(s => s);
    alert('Downloaded');
  } */

}
