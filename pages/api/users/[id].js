import { dbConnect } from 'utils/mongoose'
import User from 'models/User'

dbConnect()

export default async function handler(req, res) {
    const { method, body, query: {id} } = req

    switch (method) {
        case "DELETE":
            try {
                const deletedUser = await User.findByIdAndDelete(id)
                if (!deletedUser) return res.status(400).json({msg: "User not founded."})
                return res.status(204).json()
            } catch (error) {
                return res.status(400).json({msg: error.message})
            }
        case "PUT":
            try {
                const updatedUser = await User.findByIdAndUpdate(id, body, { new: true })
                if (!updatedUser) return res.status(404).json({msg: "User not founded."})
                return res.status(200).json(updatedUser)
            } catch (error) {
                return res.status(400).json({msg: error.message})
            }
            case "GET":
                try {
                    const user = await User.findById(id)
                    if (!user) return res.status(400).json({msg: "User not founded."})
                    return res.status(200).json(user)
                } catch (error) {
                    return res.status(400).json({msg: error.message })
                }
        default:
            return res.status(400).json({msg: "That method isn't supported."})
    }
}