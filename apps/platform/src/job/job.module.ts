import { Module } from "@nestjs/common";
import { JobModuleBase } from "./base/job.module.base";
import { JobService } from "./job.service";
import { JobResolver } from "./job.resolver";

@Module({
  imports: [JobModuleBase],
  providers: [JobService, JobResolver],
  exports: [JobService],
})
export class JobModule {}
