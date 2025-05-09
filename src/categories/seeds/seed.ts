import { AppDataSource } from "../../../data-source"; 
import { Category } from "../entities/category.entity";

export class Seeder {
  static async run() {
    console.log("Iniciando el seed...");

    const dataSource = AppDataSource.isInitialized
      ? AppDataSource
      : await AppDataSource.initialize();
    const repository = dataSource.getRepository(Category);

    try {
 
      const categoriesExist = await repository.count();
      if (categoriesExist > 0) {
        console.log("Datos ya existen, el seed no se ejecutará.");
        return;
      }

      const categories = [
        { id: 1, nombre: "Neumáticos" },
        { id: 2, nombre: "Chasis" },
        { id: 3, nombre: "Motor" },
        { id: 4, nombre: "Accesorios" }
      ];

      await repository.save(categories);
      console.log("Seed realizado correctamente");
    } catch (error) {
      console.error("Error en el seed:", error);
    }
  }
}

(async () => {
  await Seeder.run();
})();
