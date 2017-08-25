module.exports = (sequelize, DataTypes) => {
    const Photos = sequelize.define('photos', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            validate: { isUUID: 4 }
        },
        productId: {
            type: DataTypes.UUID,
            allowNull: true,
            validate: { isUUID: 4 }
        },
        primary: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        originalName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        encoding: {
            type: DataTypes.STRING,
            allowNull: true
        },
        mimeType: {
            type: DataTypes.STRING,
            allowNull: true
        },
        size: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        data: {
            type: DataTypes.BLOB,
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        name: {
            singular: 'photo',
            plural: 'photos'
        }
    })
    return Photos
}