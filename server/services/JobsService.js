import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { Exception } from "sass"
import { dbContext } from "../db/DbContext.js"

class JobsService {
  async getJobs(jobReq) {
    const jobs = await dbContext.Jobs.find(jobReq)
    return jobs
  }

}

export const jobsService = new JobsService()