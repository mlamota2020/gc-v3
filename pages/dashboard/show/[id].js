import Layout from 'components/Layout'
import ErrorPage from 'next/error'
import moment from 'moment'
import 'moment/locale/es'

export default function Report({ report, error }) {
    moment.locale('es')
    if (!error) {
        return (
            <Layout title="Reporte" description="Ten una vista completa del reporte requerido.">
                <div className="prose prose-neutral max-w-none">
                    <ul className="space-y-3 mx-7 mt-10">
                            <li className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md w-full">
                            <small className="text-xs text-neutral-300 ml-auto">({report._id})</small>
                            <h2 className="mt-3">{report.title}</h2>
                            <p>{report.report}</p>
                            <small className="font-medium">{report.person_name}</small>
                            <hr className="my-5" />
                            <small className="text-neutral-500">Creado el: {moment(report.createdAt).format('lll')}</small><br />
                            <small className="text-neutral-500">Actualizado por última vez el: {moment(report.updatedAt).format('lll')}</small>
                        </li>
                    </ul>
                </div>
            </Layout>
        )
    } else {
        return (
            <ErrorPage statusCode={error.code} title={error.text} />
        )
    }
}

export async function getServerSideProps({ query: { id } }) {
    const res = await fetch(`http://127.0.0.1:3000/api/reports/${id}`)

    if (res.status === 200) {
        const report = await res.json()
        console.log(report)

        return {
            props: { report }
        }
    } else {
        return {
            props: {
                error: {
                    code: res.status,
                    text: "El ID del reporte, es incorrecto. Verifique que esté bien digitado"
                }
            }
        }
    }
}