const User = require("../models/User");

exports.createUser = async (req, res, next) => {
  const { name, DOB, age, location, email } = req.body;
  try {
    const isPresent = await User.findOne({ email });
    if (isPresent) {
      return res.status(400).json({
        message: "User already exists!",
      });
    }

    const newUser = new User({
      name,
      DOB,
      age,
      location,
      email,
    });

    await newUser.save();
    return res.status(201).json({ newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Oops, Server Error" });
  }
};

exports.getRandomUser = async (req, res, next) => {
  try {
    const count = await User.countDocuments();
    const random = Math.floor(Math.random() * count);
    const user = await User.findOne().skip(random);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Oops, Server Error" });
  }
};

exports.getUser = async (req, res, next) => {
  const email = req.params.email;
  if (!email) {
    return res.status(400).json({
      message: "Invalid email",
    });
  }

  try {
    const user = await User.findOne({ email });
    res.json({ exists: !!user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Oops, Server Error" });
  }
};

exports.getUserAboveAge = async (req, res, next) => {
  const { age } = req.params;
  if (age < 0) {
    return res.status(400).json({
      message: "Invalid age",
    });
  }

  try {
    const users = await User.find({ age: { $gte: age } });
    if (!users.length) {
      return res.status(404).json({
        message: "No users found",
      });
    }

    const usernames = users.map((user) => `User Name: ${user.name}`);
    return res.status(200).json({
      message: "All users fetched!",
      usernames: usernames,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Oops, Server Error" });
  }
};

exports.listUserNames = async (req, res, next) => {
  try {
    const users = await User.find();
    const usernames = users.map((user) => user.name);
    res.status(200).json(usernames);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Oops, Server Error" });
  }
};
