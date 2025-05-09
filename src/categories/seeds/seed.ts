import { AppDataSource } from "../../../data-source"; 
import { Category } from "../entities/category.entity";

export class Seeder {
  static async run() {
    console.log("Iniciando el seed..."); // Este log debe aparecer si la función está ejecutándose
    try {
      const dataSource = await AppDataSource.initialize();
      const repository = dataSource.getRepository(Category);

      // Insertar datos de ejemplo
      await repository.save([
        {
          id: 1,
          nombre: "Neumáticos"
        },
        {
          id: 2,
          nombre: "Chasis"
        },
        {
          id: 3,
          nombre: "Motor"
        },
        {
          id: 4,
          nombre: "Accesorios"
        }
      ]);

      console.log("Seed realizado correctamente");
    } catch (error) {
      console.error("Error en el seed:", error);
    }
  }
}


Seeder.run();
