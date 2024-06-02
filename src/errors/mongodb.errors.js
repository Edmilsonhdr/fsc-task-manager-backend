const notFoundError = (res) => {
    return res.status(404).send("Essa tarefa não foi encontrada");
};

const objectIdCastError = (res) => {
    return res
        .status(500)
        .send("Ocorreu um erro ao recuperar este dado no banco de dados.");
};

module.exports = {
    notFoundError,
    objectIdCastError,
};
