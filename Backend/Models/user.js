
module.exports = (sequelize,DataTypes)=>{
    const User = sequelize.define("User",{
        firstName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        lastName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        avatar:{
            type:DataTypes.STRING,
            //allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        dateOfBirth:{
            type:DataTypes.STRING,
            //allowNull:false
        }
    })

    User.associate = (models)=>{
        User.hasMany(models.Post, {
            onDelete: 'cascade',
            foreignKey: 'userId',
            as: 'Author'
        });
    }

  return User
};