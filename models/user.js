'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    login: DataTypes.STRING,
    node_id: DataTypes.STRING,
    avatar_url: DataTypes.STRING,
    gavatar_id: DataTypes.STRING,
    url: DataTypes.STRING,
    html_url: DataTypes.STRING,
    followers_url: DataTypes.STRING,
    following_url: DataTypes.STRING,
    gits_url: DataTypes.STRING,
    starred_url: DataTypes.STRING,
    subscriptions_url: DataTypes.STRING,
    organizations_url: DataTypes.STRING,
    repos_url: DataTypes.STRING,
    events_url: DataTypes.STRING,
    received_events_url: DataTypes.STRING,
    type: DataTypes.STRING,
    site_admin: DataTypes.BOOLEAN,
    name: DataTypes.STRING,
    company: DataTypes.TEXT,
    blog: DataTypes.STRING,
    location: DataTypes.STRING,
    email: DataTypes.STRING,
    hireable: DataTypes.STRING,
    bio: DataTypes.STRING,
    twitter_username: DataTypes.STRING,
    public_repos: DataTypes.INTEGER,
    public_gists: DataTypes.INTEGER,
    followers: DataTypes.INTEGER,
    following: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};