var dbFunction = require('../Service/EmployeeDatabaseService');

exports.findAll = function (req, res) {
    dbFunction.FindAllThermometerData().then(function (data) {
        res.send(data);
    });
};
