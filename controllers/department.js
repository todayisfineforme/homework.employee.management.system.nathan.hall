const Department = require('../classes/department');

exports.create = async (req, res) => {
    const organization = new Department(req.body);
    await organization.insert();
    res.json(organization.getLiteral());
}

exports.readAll = async (req, res) => {
    const organization = new Department();
    await organization.getAll();
    res.json(organization.getLiteral());
}

exports.read = async (req, res) => {
    const id = req.params.id;
    const organization = new Department();
    await organization.getById(id);
    res.json(organization.getLiteral());
}

exports.update = async (req, res) => {
    const id = req.params.id;
    const organization = new Department();
    await organization.getById(id);
    await organization.merge(req.body);
    console.log(organization, "merge");
    await organization.update(id);
    res.json(organization.getLiteral());
}