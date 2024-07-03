import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:1452';
  private apiUrl = `${this.baseUrl}/api`;

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products/`).pipe(
      map(products => products.map(product => this.transformProductImages(product)))
    );
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products/${id}`);
  }

  getAllProductsByCategory(categoryId: number): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/category/${categoryId}`).pipe(
      map(products => {
        const filters = this.generateFilters(products);
        const transformedProducts = products.map(product => this.transformProductImages(product));
        return { products: transformedProducts, filters };
      })
    );
  }

  private generateFilters(products: any[]): any {
    const filters: any = {};

    products.forEach(product => {
      product.characteristics.forEach((char: any) => {
        let charWithType = char.unit_type === 'значение' ? char.value : `${char.value} ${char.unit_type}`;
        if (!filters[char.characteristic]) {
          filters[char.characteristic] = [];
        }
        filters[char.characteristic].push(charWithType);
      });
    });

    return filters;
  }

  private transformProductImages(product: any): any {
    if (product.images && product.images.length > 0) {
      product.images = product.images.map((image: string) => this.getImage(image));
    }
    return product;
  }

  getImage(imageName: string): string {
    return `${this.baseUrl}/${imageName}`;
  }
}
