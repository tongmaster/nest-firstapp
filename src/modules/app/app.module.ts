import { PrescriptionsModule } from "../../modules/prescriptions/prescriptions.module";
import { PatientsModule } from "../../modules/patients/patients.module";
import { DepartmentsModule } from "./../departments/departments.module";
import { CategoriesModule } from "./../categories/categories.module";
import { UsersModule } from "../users/users.module";
import { CommentsModule } from "./../comments/comments.module";
import { ArticlesModule } from "./../articles/articles.module";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AddressesModule } from "src/modules/addresses/addresses.module";
import { DoctorsModule } from "src/modules/doctors/doctors.module";
@Module({
  imports: [
    ArticlesModule,
    TypeOrmModule.forRoot(),
    CommentsModule,
    UsersModule,
    CategoriesModule,
    AddressesModule,
    DoctorsModule,
    DepartmentsModule,
    PatientsModule,
    PrescriptionsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}