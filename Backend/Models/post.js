
module.exports = (sequelize,DataTypes)=>{
    const Post = sequelize.define("Post",{
        image:{
            type:DataTypes.STRING,
            //allowNull:false
        },
        time:{
            type:DataTypes.STRING,
            //allowNull:false
        },
        description:{
            type:DataTypes.STRING,
            //allowNull:false
        }
    })

    Post.associate = (models)=>{
        Post.belongsTo(models.User);
    }

  return Post
};