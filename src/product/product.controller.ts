import { Controller, Get, Post, Put, Delete, Param, Body, HttpException, HttpStatus, ParseUUIDPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './dto/product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAllProducts(): Product[] {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  getProductById(@Param('id', ParseUUIDPipe) id: string) {  
    const product = this.productService.getProductById(id);
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
    return product;
  }

  @Post()
  createProduct(@Body() product: Product) {
    return this.productService.createProduct(product);
  }

  @Put(':id')
  updateProduct(@Param('id', ParseUUIDPipe) id: string, @Body() product: Product) {  
    return this.productService.updateProduct(id, product);
  }

  @Delete(':id')
  deleteProduct(@Param('id', ParseUUIDPipe) id: string) {  
    return this.productService.deleteProduct(id);
  }
}
