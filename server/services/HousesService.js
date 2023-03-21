import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { Exception } from "sass"
import { dbContext } from "../db/DbContext.js"

class HousesService {

  async getHouses(query) {
    const houses = await dbContext.Houses.find(query)
    return houses
  }


  async createHouse(houseData) {
    let newHouse = await dbContext.Houses.create(houseData)
    return newHouse
  }

}

export const housesService = new HousesService()