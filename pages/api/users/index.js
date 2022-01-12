import { dbConnect } from 'utils/mongoose'
import User from 'models/User'

dbConnect()

export default async function handler(req, res) {
    const { method, body } = req

    switch (method) {
        case "GET":
            try {
                const allUsers = await User.find()
                return res.status(201).json(allUsers)
            } catch (error) {
                return res.status(400).json({error: error.message})
            }
            break;
        case "POST":
            try {
                const newUser = new User(body)
                const savedUser = await newUser.save()
                return res.status(201).json(savedUser)
            } catch (error) {
                return res.status(400).json({error: error.message})
            }
            break
        default:
            return res.status(400).json({msg: "That method isn't supported"})
            break
    }
}