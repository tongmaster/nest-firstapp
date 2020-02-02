import { Department } from "./department.entity";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private doctorsRepository: Repository<Department>
  ) {}
}
