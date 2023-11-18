import { CitiData } from "src/orm/entities/CitiData";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(CitiData)
export class CityRepository extends Repository<CitiData> {
  async findByName(name: string): Promise<CitiData | null> {
    return await this.createQueryBuilder("citidata")
      .where("citidata.name = :name", { name })
      .getOne();
  }

  // updateName(id: number, fullname: string) {
  //   return this.createQueryBuilder("people")
  //     .update()
  //     .set({ fullname: fullname })
  //     .where("people.id = :id", { id })
  //     .execute();
  // }
}