import { EventEmitter, Injectable } from '@angular/core';
import { Category } from '../model/category.model';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class CategoryService {
  categoryUpdated = new EventEmitter<Category>();
  categoryList: Category[] = [];
  
  constructor(private http: Http) { }
  
  loadCategories() {
    return this.http.get("/api/category")
      .map((respone: Response) => {
          const data = respone.json();
          this.categoryList = data;
          return data;
      },
      (error) => console.log(error));
  }

  getCategories() {
    return this.categoryList.slice();
  }

  selectCategory(cat_id: string) {
    const result = this.categoryList.find((elem) => {
      return (elem.cat_id == cat_id);
    });

    if (result != undefined) {
      this.categoryUpdated.emit(result);
    }
    return result;
  }
}