'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      login: {
        type: Sequelize.STRING
      },
      node_id: {
        type: Sequelize.STRING
      },
      avatar_url: {
        type: Sequelize.STRING
      },
      gravatar_id: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      html_url: {
        type: Sequelize.STRING
      },
      followers_url: {
        type: Sequelize.STRING
      },
      following_url: {
        type: Sequelize.STRING
      },
      gists_url: {
        type: Sequelize.STRING
      },
      starred_url: {
        type: Sequelize.STRING
      },
      subscriptions_url: {
        type: Sequelize.STRING
      },
      organizations_url: {
        type: Sequelize.STRING
      },
      repos_url: {
        type: Sequelize.STRING
      },
      events_url: {
        type: Sequelize.STRING
      },
      received_events_url: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      site_admin: {
        type: Sequelize.BOOLEAN
      },
      name: {
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.TEXT
      },
      blog: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      hireable: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.STRING
      },
      twitter_username: {
        type: Sequelize.STRING
      },
      public_repos: {
        type: Sequelize.INTEGER
      },
      public_gists: {
        type: Sequelize.INTEGER
      },
      followers: {
        type: Sequelize.INTEGER
      },
      following: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};