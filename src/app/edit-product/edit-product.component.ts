import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../Model/Product';
import { EditProductService } from './edit-product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

productInfo: any
type: any

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any, 
    private editProductService: EditProductService,
    private dialogRef : MatDialog
    ) {
    console.log(data)
    this.productInfo = data.product
    this.type = data.type
   }

  ngOnInit(): void {
  }

  createProduct(product: any){
    console.log(product)
    this.dialogRef.closeAll()
    if(this.type == "Add"){
      this.editProductService.addProduct(product).subscribe(
        response => {
          console.log(response);
        }, 
        (error) => {
          console.error(error.error);
        });
    }
    else{
      this.editProductService.updateProduct(this.productInfo.id ,product).subscribe(
        response => {
          console.log(response);
        }, 
        (error) => {
          console.error(error.error);
        });

    }
  }

}
