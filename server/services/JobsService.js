import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { Exception } from "sass"
import { dbContext } from "../db/DbContext.js"

class JobsService {
  async getJobs(jobReq) {
    const jobs = await dbContext.Jobs.find(jobReq)
    return jobs
  }

  async createJob(jobData) {
    const newJob = await dbContext.Jobs.create(jobData)
    return newJob
  }

  async getJobById(jobId) {
    const job = await dbContext.Jobs.findById(jobId)
    if (!job) {
      throw new BadRequest('Please use a valid job ID')
    }
    return job
  }

  async editJob(editInfo, jobId) {
    const originalJob = await this.getJobById(jobId)

    originalJob.title = editInfo.title ? editInfo.title : originalJob.title
    originalJob.hourlyPay = editInfo.hourlyPay ? editInfo.hourlyPay : originalJob.hourlyPay
    originalJob.weeklyHours = editInfo.weeklyHours ? editInfo.weeklyHours : originalJob.weeklyHours
    originalJob.temporary = editInfo.temporary ? editInfo.temporary : originalJob.temporary
    originalJob.description = editInfo.description ? editInfo.description : originalJob.description

    originalJob.save()
    return originalJob


  }



}

export const jobsService = new JobsService()