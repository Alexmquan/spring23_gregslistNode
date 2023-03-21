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

  async getHouseById(houseId) {
    const house = await dbContext.Houses.findById(houseId)
    if (!house) {
      throw new BadRequest("Can not find House with that ID, please enter a valid ID")
    }
    return house
  }

  async editHouse(houseData, houseId) {
    const originalHouse = await this.getHouseById(houseId)

    originalHouse.price = houseData.price ? houseData.price : originalHouse.price
    originalHouse.year = houseData.year ? houseData.year : originalHouse.year
    originalHouse.description = houseData.description ? houseData.description : originalHouse.description
    originalHouse.bedrooms = houseData.bedrooms ? houseData.bedrooms : originalHouse.bedrooms
    originalHouse.bathrooms = houseData.bathrooms ? houseData.bathrooms : originalHouse.bathrooms
    originalHouse.imgUrl = houseData.imgUrl ? houseData.imgUrl : originalHouse.imgUrl

    //saves the changes in our database
    await originalHouse.save()
    return originalHouse
  }

  async deleteHouse(houseId) {
    const foundHouse = await this.getHouseById(houseId)
    await foundHouse.remove()
    return
  }

}

export const housesService = new HousesService()