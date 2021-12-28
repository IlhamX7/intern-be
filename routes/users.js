var express = require("express");
var router = express.Router();
const Validator = require("fastest-validator");

const { User } = require("../models");

const v = new Validator();

router.get("/", async (req, res) => {
  const users = await User.findAll({
    attributes: [
      "login",
      "id",
      "node_id",
      "avatar_url",
      "gravatar_id",
      "url",
      "html_url",
      "followers_url",
      "following_url",
      "gists_url",
      "starred_url",
      "subscriptions_url",
      "organizations_url",
      "repos_url",
      "events_url",
      "received_events_url",
      "type",
      "site_admin",
    ],
  });
  return res.json(users);
});

router.get("/:login", async (req, res) => {
  const user = await User.findOne({
    attributes: [
      "login",
      "id",
      "node_id",
      "avatar_url",
      "gravatar_id",
      "url",
      "html_url",
      "followers_url",
      "following_url",
      "gists_url",
      "starred_url",
      "subscriptions_url",
      "organizations_url",
      "repos_url",
      "events_url",
      "received_events_url",
      "type",
      "site_admin",
      "name",
      "company",
      "blog",
      "location",
      "email",
      "hireable",
      "bio",
      "twitter_username",
      "public_repos",
      "public_gists",
      "followers",
      "following",
      "createdAt",
      "updatedAt",
    ],
    where: {
      login: req.params.login,
    },
  });
  return res.json(user || {});
});

router.post("/", async (req, res) => {
  const schema = {
    login: "string",
    node_id: "string",
    avatar_url: "string",
  };
  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  const user = await User.create(req.body);
  res.json(user);
});

router.put("/:id", async (req, res) => {
  let users = await User.findOne({
    attributes: ["login", "id", "node_id", "avatar_url"],
    where: {
      id: req.params.id,
    },
  });

  if (!users) {
    return res.json({ message: "User not found" });
  }

  const schema = {
    login: "string||optional",
    node_id: "string||optional",
    avatar_url: "string||optional",
  };
  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  users = await users.update(req.body);
  res.json(users);
});

router.delete("/:id", async (req, res) => {
  let user = await User.findOne({
    attributes: ["login", "id", "node_id", "avatar_url"],
    where: {
      id: req.params.id,
    },
  });

  if (!user) {
    return res.json({ message: "User not found" });
  }

  await user.destroy();

  res.json({
    message: "User is deleted",
  });
});

module.exports = router;
