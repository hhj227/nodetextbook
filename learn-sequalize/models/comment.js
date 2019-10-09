module.exports = (sequelize, DataTypes) => {
    return sequelize.define('comment', {
        comment: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('now()'),
        }
    }, {
        timestamps: false,
        underscored: true,
    });
};

// comment table
// 작성자, 댓글 내용, 생성일