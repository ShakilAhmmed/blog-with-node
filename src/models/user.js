'use strict';
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: DataTypes.STRING,
    }, {});
};