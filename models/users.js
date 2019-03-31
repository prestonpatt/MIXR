module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
                len: [1, 140],
                is: /^[a-z]+$/i,
            }
        },
        lastName: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
                len: [1, 140],
                is: /^[a-z]+$/i,
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
                isEmail: true,
            }
        },
        age: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
                isNumeric: true,
            }
        },
    });
    return Users;
};