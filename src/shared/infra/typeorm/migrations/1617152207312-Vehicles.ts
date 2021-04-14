import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class Vehicles1617152207312 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'vehicles',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          isNullable: false,
          default: 'uuid_generate_v4()',
        },
        {
          name: 'plate',
          type: 'varchar',
        },
        {
          name: 'chassi',
          type: 'varchar',
        },
        {
          name: 'renavam',
          type: 'int',
        },
        {
          name: 'model',
          type: 'varchar',
        },
        {
          name: 'trademark',
          type: 'varchar',
        },
        {
          name: 'year',
          type: 'int',
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()',
        },
      ],
    }), true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('vehicles');
  }
}
