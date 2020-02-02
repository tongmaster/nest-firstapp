import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Patient } from "./patient.entity";
import { PatientQuery } from "./patient-query";

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(Patient)
    private doctorsRepository: Repository<Patient>
  ) {}

  findAllWithQuery(query: PatientQuery) {
    return this.doctorsRepository.find(query);
  }
}
