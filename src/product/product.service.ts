import { Injectable, Scope } from '@nestjs/common';
import { Product } from './dto/product.dto';
import { mockProductsData } from './mock/product.mock';
import { ApiResponse } from '../models/response.model';
import { HttpStatus } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable({ scope: Scope.TRANSIENT })
export class ProductService {
  private products: Product[] = [...mockProductsData];

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: string): Product {
    return this.products.find(product => product.id === id);
  }

  createProduct(product: Product) {
    const newProduct = { ...product, id: uuidv4() }; 
    this.products.push(newProduct);
    return new ApiResponse(
      'Product created successfully',
      HttpStatus.CREATED,
      newProduct
    );
  }

  updateProduct(id: string, product: Product) {
    const existingProductIndex = this.products.findIndex(p => p.id === id);
    if (existingProductIndex === -1) {
      throw new Error('Product not found');
    }
    const updatedProduct = { ...this.products[existingProductIndex], ...product };
    this.products[existingProductIndex] = updatedProduct;
    return new ApiResponse(
      'Product updated successfully',
      HttpStatus.OK,
      updatedProduct
    );
  }

  deleteProduct(id: string) {
    const productIndex = this.products.findIndex(product => product.id === id);
    if (productIndex === -1) {
      throw new Error('Product not found');
    }
    this.products.splice(productIndex, 1);
    return new ApiResponse(
      'Product deleted successfully',
      HttpStatus.OK,
      { id }
    );
  }
}
