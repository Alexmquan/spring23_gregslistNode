import { jobsService } from "../services/JobsService.js";
import BaseController from "../utils/BaseController.js";

export class JobsController extends BaseController {
  constructor() {
    super('api/jobs')
    this.router
      .get('', this.getJobs)
      .get('/:jobId', this.getJobById)
      .post('', this.createJob)
      .put('/:jobId', this.editJob)

  }
  async getJobs(req, res, next) {
    try {
      const jobs = req.query
      const jobsData = await jobsService.getJobs(jobs)
      res.send(jobsData)
    } catch (error) {
      next(error)
    }
  }

  async createJob(req, res, next) {
    try {
      const job = req.body
      const jobData = await jobsService.createJob(job)
      res.send(jobData)
    } catch (error) {
      next(error)
    }
  }

  async getJobById(req, res, next) {
    try {
      const jobId = req.params.jobId
      const jobData = await jobsService.getJobById(jobId)
      res.send(jobData)
    } catch (error) {
      next(error)
    }
  }

  async editJob(req, res, next) {
    try {
      const jobId = req.params.jobId
      const editInfo = req.body
      const editedJob = await jobsService.editJob(editInfo, jobId)
      res.send(editedJob)
    } catch (error) {
      next(error)
    }
  }
}