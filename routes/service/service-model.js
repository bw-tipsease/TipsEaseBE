const db = require("../../data/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
  findByName
};

function find() {
  return db("services").select("id", "service_type");
}

function findBy(id) {
  return db("services").where({id});
}

async function add(services) {
  const [id] = await db("services").insert(services);

  return findById(id);
}

function findById(id) {
  return db("services")
    .where({ id })
    .first();
}
function findByName(service_type) {
    return db("services")
      .where({ service_type })
      .first();
}