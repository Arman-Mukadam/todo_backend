export default (sequelize, DataTypes) => {
    return sequelize.define(
        'Todo',
        {
            todo: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            timestamps: true
        },
    );
}
