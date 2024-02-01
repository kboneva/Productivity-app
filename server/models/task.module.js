module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("task", {
        id: {
            primaryKey: true,
            allowNull: false,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING(8192)
        },
        status: {
            type: Sequelize.ENUM,
            values: ['pending', 'inprogress', 'onhold', 'completed', 'archived', 'cancelled'],
            defaultValue: 'pending'
        },
        priority: {
            type: Sequelize.ENUM,
            values: ['low', 'medium', 'high'],
            defaultValue: 'low'
        },
        deadline: {
            type: Sequelize.DATE
        }
    })

    return Task;
};