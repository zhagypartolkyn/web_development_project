import { Component, OnInit } from '@angular/core';
import { Category, Product } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public categories: Category[] = [];
  public products: Product[] = [];
  public category: Category;
  public IsCatalog = true;
  public BuyFood: number[] = [];
  constructor(private categoryService: CategoryService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getCategories();
  }

  // tslint:disable-next-line:typedef
  ChangeStatus(catalog1: Category){
    this.category = catalog1;
    this.IsCatalog = !this.IsCatalog;
    if (this.IsCatalog === false){
      this.getProducts();
    }
  }
  // tslint:disable-next-line:typedef
  getCategories(){
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
  // tslint:disable-next-line:typedef
  getProducts(){
    this.categoryService.getProducts(this.category.id).subscribe((products) => {this.products = products; });
  }












}
