import BaseController from "../utils/BaseController.js"
import { housesService } from "../services/HousesService.js"

export class HousesController extends BaseController {
  constructor() {
    super('/api/houses')
    this.router
      .get('', this.getHouses)
      .post('', this.createHouse)
  }
  async getHouses(req, res, next) {
    try {
      const houses = req.query
      const houseData = await housesService.getHouses(houses)
      res.send(houseData)
    } catch (error) {
      next(error)
    }
  }

  async createHouse(req, res, next) {
    try {
      const houseData = req.body
      const house = await housesService.createHouse(houseData)
      res.send(house)
    } catch (error) {
      next(error)
    }
  }
}