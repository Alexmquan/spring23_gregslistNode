import BaseController from "../utils/BaseController.js"
import { housesService } from "../services/HousesService.js"

export class HousesController extends BaseController {
  constructor() {
    super('/api/houses')
    this.router
      .get('', this.getHouses)
      .get('/:houseId', this.getHouseById)
      .post('', this.createHouse)
      .put('/:houseId', this.editHouse)
      .delete('/:houseId', this.deleteHouse)

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

  async getHouseById(req, res, next) {
    try {
      const houseId = req.params.houseId
      const getHouse = await housesService.getHouseById(houseId)
      res.send(getHouse)
    } catch (error) {
      next(error)
    }
  }

  async editHouse(req, res, next) {
    try {
      const houseId = req.params.houseId
      const houseData = req.body
      const editedHouse = await housesService.editHouse(houseData, houseId)
      res.send(editedHouse)
    } catch (error) {
      next(error)
    }
  }

  async deleteHouse(req, res, next) {
    try {
      const houseId = req.params.houseId
      await housesService.deleteHouse(houseId)
      res.send('House has now been deleted')
    } catch (error) {

    }
  }
}