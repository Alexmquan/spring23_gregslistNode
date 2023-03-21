import { jobsService } from "../services/JobsService.js";
import BaseController from "../utils/BaseController.js";

export class JobsController extends BaseController {
  constructor() {
    super('api/jobs')
    this.router
      .get('', this.getJobs)
      .post('', this.createJob)
  }
  async getJobs(req, res, next) {
    try {
      const jobs = req.query
      const jobsData = jobsService.getJobs(jobs)
      res.send(jobsData)
    } catch (error) {
      next(error)
    }
  }
}