import { D1Orm, DataTypes, Model } from 'd1-orm';

export const getUserModel = (orm: D1Orm) => {
  return new Model(
    {
      D1Orm: orm,
      tableName: 'users',
      primaryKeys: 'id',
      autoIncrement: 'id',
      uniqueKeys: [['id'], ['email'], ['googleId']],
    },
    {
      id: { type: DataTypes.INTEGER, notNull: true },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      googleId: {
        type: DataTypes.STRING,
        notNull: true,
      },
    }
  );
};
