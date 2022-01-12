import Layout from 'components/Layout'
import ErrorPage from 'next/error'
import {
    ChevronLeftIcon
} from '@heroicons/react/solid'
import moment from 'moment'
import 'moment/locale/es'

export default function Example({ user, userReports, error }) {
    moment.locale('es')
    if (!error) {return (
        <Layout>
        <nav className="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden" aria-label="Breadcrumb">
        <a href="#" className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900">
            <ChevronLeftIcon className="-ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
            <span>Directory</span>
        </a>
    </nav>

    <article>
        {/* Profile header */}
        <div>
            <div>
                <img className="h-32 w-full object-cover lg:h-48" src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="" />
            </div>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                    <div className="flex">
                        <span className="inline-block h-24 w-24 sm:h-32 sm:w-32 rounded-full overflow-hidden bg-gray-100 ring-4 ring-white">
                            <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </span>
                    </div>
                    <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                        <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                            <h1 className="text-2xl font-bold text-gray-900 truncate">{user.name}</h1>
                        </div>
                    </div>
                </div>
                <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                    <h1 className="text-2xl font-bold text-gray-900 truncate">{user.name}</h1>
                </div>
                <div className="user-content mt-6">
                    <p className="text-neutral-500">{user.email}</p>
                    <div className="reports mt-6">
                        <h1 className="text-2xl font-bold text-gray-900">Sus reportes más recientes</h1>
                        <div className="prose prose-neutral max-w-none">
                            <ul className="space-y-3 mx-7 mt-10">
                                {userReports.map(report => {
                                    return (
                                        <li className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md w-full" key={report._id}>
                                    <small className="text-xs text-neutral-300 ml-auto">({report._id})</small>
                                    <h2 className="mt-3">{report.person_name}</h2>
                                    <p>{report.report}</p>
                                    <hr className="my-5" />
                                    <small className="text-neutral-500">Creado el: {moment(report.updatedAt).format('lll')}</small><br />
                                    <small className="text-neutral-500">Actualizado por última vez el: {moment(report.createdAt).format('lll')}</small>
                                </li>   
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
    </Layout>
    )} else {return <ErrorPage statusCode={error.code} title={error.msg} />}
}

export async function getServerSideProps({ query: { id } }) {
    const res = await fetch(`http://127.0.0.1:3000/api/users/${id}`)
    const res2 = await fetch(`http://127.0.0.1:3000/api/reports/searchByUser/${id}`)

    if (res.status === 200) {
        const user = await res.json()
        const userReports = await res2.json()
        return {
            props: { user, userReports }
        }
    }

    return {
        props: {
            error: {
                code: res.status,
                msg: "El ID es inválido, asegurese de que lo haya ingresado bien"
            }
        }
    }
}