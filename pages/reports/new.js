import { useState, useEffect } from "react"

import { useRouter } from "next/router"

const NewReport = () => {
  const [newReport, setNewReport] = useState({
    'person_name': "",
    'title': "",
    'report': "",
    'state': ""
})
  const { query, push } = useRouter()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  const getReport = async () => {
    const res = await fetch("http://localhost:3000/api/reports/" + query.id)
    const data = await res.json()
    setNewReport({ title: data.title, description: data.description })
  }

  useEffect(() => {
    if (query.id) getReport()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    let errs = validate()

    if (Object.keys(errs).length) return setErrors(errs)

    setIsSubmitting(true)

    if (query.id) {
      await updateReport()
    } else {
      await createReport()
    }

   /*  await push("/reports") */
  }

  const handleChange = (e) =>
    setNewReport({ ...newReport, [e.target.name]: e.target.value })

  const validate = () => {
    let errors = {}

    if (!newReport.title) {
      errors.title = "Title is required"
    }
    if (!newReport.report) {
      errors.report = "Report is required"
    }
    if (!newReport.person_name) {
      errors.person_name = "Title is required"
    }
    if (!newReport.state) {
      errors.state = "State is required"
    }

    return errors
  }

  const createReport = async () => {
    try {
      await fetch("http://localhost:3000/api/reports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(newReport),
      })
    } catch (error) {
      console.error(error)
    }
  }

  const updateReport = async () => {
    try {
      await fetch("http://localhost:3000/api/reports/" + query.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReport),
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <h1>{query.id ? 'edit report' : 'create report'}</h1>
      <input type="text" name="person_name" placeholder="name" onChange={handleChange} />
      <input type="text" name="title" placeholder="title" onChange={handleChange} />
      <input type="text" name="report" placeholder="report" onChange={handleChange} />
      <input type="text" name="state" placeholder="state" onChange={handleChange} />
      <button type="submit">save</button>
      <p>{errors ? errors : 'no errors'}</p>
      </form>
  )
}

export default NewReport