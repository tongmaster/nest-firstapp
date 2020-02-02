import { Injectable } from "@nestjs/common";
import { Prescription } from "./prescription.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class PrescriptionsService {
  constructor(
    @InjectRepository(Prescription)
    private doctorsRepository: Repository<Prescription>
  ) {}
}
