// 'use strict';

// module.exports = {
//   async up(knex) {
//     // Create header table
//     await knex.schema.createTable('headers', (table) => {
//       table.increments('id').primary();
//       table.string('title').notNullable();
//       table.string('facebookUrl').notNullable();
//       table.string('instagramUrl').notNullable();
//       table.timestamps();
//     });

//     // Create hero table
//     await knex.schema.createTable('heroes', (table) => {
//       table.increments('id').primary();
//       table.string('preTitle').notNullable();
//       table.string('title').notNullable();
//       table.string('subtitle').notNullable();
//       table.integer('backgroundImage').references('id').inTable('files').onDelete('SET NULL');
//       table.timestamps();
//     });

//     // Create about table
//     await knex.schema.createTable('abouts', (table) => {
//       table.increments('id').primary();
//       table.string('preTitle').notNullable();
//       table.string('title').notNullable();
//       table.text('content').notNullable();
//       table.integer('image').references('id').inTable('files').onDelete('SET NULL');
//       table.timestamps();
//     });

//     // Create footer table
//     await knex.schema.createTable('footers', (table) => {
//       table.increments('id').primary();
//       table.text('content').notNullable();
//       table.timestamps();
//     });

//     // Create menu table
//     await knex.schema.createTable('menus', (table) => {
//       table.increments('id').primary();
//       table.string('label').notNullable();
//       table.string('targetId').notNullable();
//       table.string('componentType').notNullable();
//       table.timestamps();
//     });

//     // Create rooms table
//     await knex.schema.createTable('rooms', (table) => {
//       table.increments('id').primary();
//       table.string('title').notNullable();
//       table.text('description').notNullable();
//       table.string('price').notNullable();
//       table.string('amenities').notNullable();
//       table.jsonb('images').notNullable();
//       table.timestamps();
//     });

//     // Create services table
//     await knex.schema.createTable('services', (table) => {
//       table.increments('id').primary();
//       table.string('title').notNullable();
//       table.string('icon').notNullable();
//       table.text('description').notNullable();
//       table.timestamps();
//     });

//     // Create gallery table
//     await knex.schema.createTable('galleries', (table) => {
//       table.increments('id').primary();
//       table.string('title').notNullable();
//       table.text('description').notNullable();
//       table.integer('image').references('id').inTable('files').onDelete('SET NULL');
//       table.timestamps();
//     });
//   },

//   async down(knex) {
//     // Drop tables in reverse order
//     await knex.schema.dropTableIfExists('galleries');
//     await knex.schema.dropTableIfExists('services');
//     await knex.schema.dropTableIfExists('rooms');
//     await knex.schema.dropTableIfExists('menus');
//     await knex.schema.dropTableIfExists('footers');
//     await knex.schema.dropTableIfExists('abouts');
//     await knex.schema.dropTableIfExists('heroes');
//     await knex.schema.dropTableIfExists('headers');
//   }
// };
