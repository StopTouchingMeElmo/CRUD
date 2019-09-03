import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemModel } from 'src/app/models/item-model';


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  product: ItemModel = new ItemModel();
  isLoadingResults: boolean;

  constructor(private route: ActivatedRoute, private loader: LoaderService, private router: Router) { }

  ngOnInit() {
    this.loader.getItemDetails(this.route.snapshot.params['id']).subscribe(
      (response: ItemModel) => {
        this.product = response;
        this.isLoadingResults = true;
      }
    )
  }

  //delete
  deleteProduct(id: any) {
    this.loader.deleteItem(id)
      .subscribe((response: ItemModel) => {
        this.product = response;
        this.isLoadingResults = true;
        this.router.navigate(['/catalogue']);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
      );

  }

}
