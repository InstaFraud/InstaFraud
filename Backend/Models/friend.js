module.exports = (sequelize,DataTypes)=>{
    const Friend = sequelize.define("Friend",{
        firstName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        lastName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        avatar:{
            type:DataTypes.STRING,
            //allowNull:false
        }
    })

    Friend.associate = (models)=>{
        Friend.belongsTo(models.User);
    }

  return Friend
};