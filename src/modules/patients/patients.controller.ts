import { PatientsService } from "./patients.service";
import { Controller, Get, Query } from "@nestjs/common";
import { PatientQuery } from "./patient-query";

@Controller("patients")
export class PatientsController {
  constructor(private patientsService: PatientsService) {}

  @Get("/a")
  findAll(@Query() query: PatientQuery) {
    return this.patientsService.findAllWithQuery(query);
  }
}
