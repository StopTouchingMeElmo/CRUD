import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';
import { ItemModel } from 'src/app/models/item-model';
import { ActivatedRoute, Router } from '@angular/router';
/* import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { post } from 'selenium-webdriver/http'; */

@Component({
  selector: 'app-item-creation-form',
  templateUrl: './item-creation-form.component.html',
  styleUrls: ['./item-creation-form.component.css']
})
export class ItemCreationFormComponent implements OnInit {

  /* public uploader: FileUploader = new FileUploader({ 
    url: "animals",
    

  }); */

  constructor(private route: ActivatedRoute, private loader: LoaderService, private router: Router) { }

  itemModel: ItemModel = new ItemModel();

  editMode: boolean;

  ngOnInit() {

    let itemId = this.route.snapshot.params['id'];

    if (itemId && itemId.length > 0) {
      this.editMode = true;
      this.loader.getItemDetails(itemId).subscribe(
        (response: ItemModel) => {
          this.itemModel = response;
        }
      )
    }

  }

  submit() {
    if (this.editMode) {
      this.loader.editItem(this.itemModel).subscribe
        (s => s);
      this.router.navigate(['/catalogue']);
    }
    else {
      this.loader.postItem(this.itemModel).subscribe(s => s);
      alert('Created');
    }
  }


}
