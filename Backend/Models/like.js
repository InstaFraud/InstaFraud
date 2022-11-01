
module.exports = (sequelize,DataTypes)=>{
    const Like = sequelize.define("Like",{
        numOfLikes:{
            type:DataTypes.INTEGER,
        }
    })

    Like.associate = (models)=>{
        Like.belongsTo(models.Post); //Or User?
    }

  return Like
};