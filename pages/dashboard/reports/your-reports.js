import Link from 'next/link'
import Image from 'next/image'
import Layout from 'components/Layout'
import moment from 'moment'
import 'moment/locale/es'

export default function YourReports({ userReports }) {

    moment.locale('es')

    return (
        <Layout title="Tus reportes" description="Mira o edita tus reportes aquí.">
        <div className="prose prose-neutral max-w-none">
        <ul className="space-y-3 mx-7 mt-10">
            {reports.map(userReports => {
                return (
                    <li key={userReports._id} className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md w-full">
                        <small className="text-xs text-neutral-300 ml-auto">({userReports._id})</small>
                        <h2 className="mt-3">{userReports.title}</h2>
                        <p>{userReports.report}</p>
                        <small className="font-medium">{userReports.person_name}</small>
                        <hr className="my-5" />
                        <small className="text-neutral-500">Creado el: {moment(userReports.createdAt).format('lll')}</small><br />
                        <small className="text-neutral-500">Actualizado por última vez el: {moment(userReports.updatedAt).format('lll')}</small>
                    </li>
                )
            })}
        </ul>
    </div>
    </Layout>
)
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