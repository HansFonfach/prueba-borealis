import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialSetup1746740061043 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS category (
                id integer PRIMARY KEY,
                nombre varchar NOT NULL
            )
        `);
        
        await queryRunner.query(`
            INSERT INTO category (id, nombre) VALUES
                (1, 'Neumáticos'),
                (2, 'Chasis'),
                (3, 'Motor'),
                (4, 'Accesorios')
            ON CONFLICT (id) DO NOTHING
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS category`);
    }
}