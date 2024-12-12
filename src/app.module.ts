import { Module } from '@nestjs/common';
import { CovidModule } from './covid-19/covid.module';
import { UserModule } from './users/user.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [CovidModule, UserModule, ProductModule]
})
export class AppModule {}
