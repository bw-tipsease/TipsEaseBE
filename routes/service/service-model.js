const db = require("../../data/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db("tips_ease_workers").select("id", "service_name");
}

function findBy(filter) {
  return db("tips_ease_workers").where(filter);
}

async function add(service) {
  const [id] = await db("tips_ease_workers").insert(service);

  return findById(id);
}

function findById(id) {
  return db("tips_ease_workers")
    .where({ id })
    .first();
}