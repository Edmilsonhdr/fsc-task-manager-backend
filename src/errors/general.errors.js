const notAllowedFieldsToUpdateError = (res) => {
    return res.status(500).send("Uma ou mais campos não são editaveis");
};

module.exports = {
    notAllowedFieldsToUpdateError,
};
