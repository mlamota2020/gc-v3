import { dbConnect } from 'utils/mongoose'
import ResolvedReport from 'models/ResolvedReport'

dbConnect()

export default async function handler(req, res) {

    const { method, body } = req

    switch (method) {
      case "GET":
        try {
          const reports = await ResolvedReport.find().sort({"updatedAt": -1})
          return res.status(200).json(reports)
        } catch (error) {
          return res.status(400).json({error: error.message})
        }
      break
      case "POST":
        try {
          const newReport = new ResolvedReport(body)
          const savedReport = await newReport.save()
          return res.status(201).json(savedReport)
        } catch (error) {
          return res.status(400).json({error: error.message})
        }
      break
      default:
        return res.status(400).json({msg: "That method isn't supported."})
    }
}
