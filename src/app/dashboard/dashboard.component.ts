import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { Product } from '../Model/Product';
import { Products } from '../Model/ProductsDetailList';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'title',
    'ProductImage',
    'description',
    'category',
    'rating',
    'price',
    'action',
  ];
  dataSource!: MatTableDataSource<Product>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  clickedRows = new Set<Product>();
  productArr: Product[] = [];
  productsNum = 0;

  constructor(
    private productService: ProductsService,
    private dialogRef: MatDialog
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.productService.fetchProductList().subscribe((data) => {
      // console.log(data);
      this.productArr = data;
      this.productsNum = this.productArr.length;
      this.dataSource = new MatTableDataSource(this.productArr);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  editProduct(type: string, data: any) {
    this.dialogRef.open(EditProductComponent, {
      data: {
        product: data,
        type: type,
      },
    });
  }

  addProduct(type: string) {
    let newProduct = Products[0];
    newProduct.id = this.productsNum + 1;
    newProduct.image = "assets/default-Image.jpg"

    this.dialogRef.open(EditProductComponent, {
      data: {
        product: newProduct,
        type: type,
      },
    });
  }

  deleteProduct(index: number, data: any) {
    this.productArr.forEach((element, i) => {
      if (element.id == index) this.productArr.splice(i, 1);
    });

    this.productsNum = this.productArr.length;
    this.dataSource = new MatTableDataSource(this.productArr);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    console.log(this.productArr);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



}
