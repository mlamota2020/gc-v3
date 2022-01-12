import { dbConnect } from "utils/mongoose";
import Report from 'models/Report'
import User from 'models/User'

dbConnect()

export default async function handler(req, res) {
    const { query: {id} } = req

    try {
        const user = await User.findById(id)
        const userReports = await Report.find({ person_name: user.name })
        return res.status(200).json(userReports)
    } catch (error) {
        return res.status(404).json({ msg: error.message })

    }
}