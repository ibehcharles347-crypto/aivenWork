import { User } from "../models/index.js";


export const NewUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        if (!req.file) {
            return res.status(400).json({ error: "Image file is required" });
        }
        const image = req.file.filename; // Store the filename in the database
        const newUser = await User.create({ name, email, image });
        res.status(201).json(newUser);
        console.log(req.file);
        console.log(req.body);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Failed to create user" });
    }

};

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};


export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    
    const { name, email } = req.body;

    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.name = name;
    user.email = email;
    await user.save();
    res.json(user);
    console.log("Updating user with ID:", id);
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" });
  }
};


export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await User.destroy({ where: { id } });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
};
// const NewUser = User.create(
//     {name: "John Doe",
//     email: "john.doe@example.com"
//     }
    
// )

// export default NewUser; 