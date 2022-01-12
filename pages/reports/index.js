import Link from 'next/link'
import moment from 'moment'
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'

export default function Reports({ reports }) {

  if (reports.length === 0) return (
    <p>There isn't reports.</p>
  )

  return (
    <>
    <div className="bg-teal-600 m-5">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-teal-800">
              <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">We announced a new product!</span>
              <span className="hidden md:inline">Big news! We're excited to announce a brand new product.</span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="#"
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-teal-600 bg-white hover:bg-teal-50"
            >
              Learn more
            </a>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex p-2 rounded-md hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
      <Link href="/reports/new">Hola</Link>
      <Link href="/">volver</Link>
      {reports.map(report => {
        return (
          <div key={report._id}>
            <h1>{report.title}</h1>
            <p>{report.report}</p>
            <p>{report.person_name}</p>
            <p>{report.state}</p>
            <p>{moment(report.createdAt).format('LLLL')}</p>
            <p>{moment(report.updatedAt).format('LLLL')}</p>
            <div>
              <button>View</button>
              <button>Edit</button>
            </div>
          </div>
        )
      })}
    </>
  )
}

export async function getServerSideProps(ctx) {
  const res = await fetch('http://localhost:3000/api/reports')
  const reports = await res.json()

  return {
    props: {
      reports
    }
  }
}