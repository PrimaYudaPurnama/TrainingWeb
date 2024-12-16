const { DataTypes } = require('sequelize')
const sequelize = require('../../database/mysql.connection')
const { UUIDv7DataType } = require('../../utility/sequelize-lib')

const Table = sequelize.define(
  'event',
  {
    id_event: {
      type: DataTypes.CHAR(36),
      defaultValue: new UUIDv7DataType(),
      primaryKey: true,
    },
    nama: {
      type: DataTypes.STRING,
    },
    tempat_acara: {
      type: DataTypes.STRING,
    },
    waktu_mulai: {
      type: DataTypes.DATE
    },
    waktu_selesai: {
      type: DataTypes.DATE
    },
    created_at: {
      type: DataTypes.DATE
    },
    update_at: {
      type: DataTypes.DATE
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
)

module.exports = Table
