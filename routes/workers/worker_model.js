module.exports = {
    add,
    find,
    findBy,
    findById,
    findByService,
    findByTagline,
    findByName
};

function find() {
    return db("workers").select("id", "services_id", "name", "tagline", "worker_info");
}

function findBy(filter) {
    return db("workers").where(filter);
}

async function add(worker) {
    const [id] = await db("workers").insert(worker);
return findById(id);
}

function findById(id) {
    return db("workers").where({ id }).first();
}
function findByService(services_type) {
    return db("workers").where({ services_type }).first();
}
function findById(tagline) {
    return db("workers").where({ tagline }).first();
}
function findById(name) {
    return db("workers").where({ name }).first();
}