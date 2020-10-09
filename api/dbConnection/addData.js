async function upsert(models, data) {
    const user = await models.user.findOne({ where: { email: data.email } });
    if(!user) {
        return models.user.create({ ...data });
    }

    return user;
}

module.exports = async function(models) {
   await upsert(models, { email: "John@gmail.com", password: "Password@1234" });
   await upsert(models, { email: "Catherine@gmail.com", password: "Password@1234" });
   await upsert(models, { email: "Betsy@gmail.com", password: "Password@1234" });
   await upsert(models, { email: "admin@gmail.com", password: "Password@12345", role: "ADMIN" });
   return Promise.resolve("Data Done");
}