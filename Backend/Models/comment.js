
module.exports = (sequelize,DataTypes)=>{
    const Comment = sequelize.define("Comment",{
        commentedBy:{
            type:DataTypes.STRING,
            allowNull:false
        },
        commentContent:{
            type:DataTypes.STRING,
            allowNull:false
        }
    })

    Comment.associate = (models)=>{
        Comment.belongsTo(models.User);
    }

  return Comment
};