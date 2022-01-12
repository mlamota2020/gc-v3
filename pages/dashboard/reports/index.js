import Link from 'next/link'
import Image from 'next/image'
import Layout from 'components/Layout'
import moment from 'moment'
import 'moment/locale/es'

export default function Reports({ reports }) {

    moment.locale('es')

    return (
                    <Layout title="Reportes" description="Busca los reportes más recientes.">
                        <div className="prose prose-neutral max-w-none">
                        <ul className="space-y-3 mx-7 mt-10">
                            {reports.map(item => {
                                return (
                                    <li key={item._id} className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md w-full">
                                        <small className="text-xs text-neutral-300 ml-auto">({item._id})</small>
                                        <h2 className="mt-3">{item.title}</h2>
                                        <p>{item.report}</p>
                                        <small className="font-medium">{item.person_name}</small>
                                        <hr className="my-5" />
                                        <small className="text-neutral-500">Creado el: {moment(item.createdAt).format('lll')}</small><br />
                                        <small className="text-neutral-500">Actualizado por última vez el: {moment(item.updatedAt).format('lll')}</small>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    </Layout>
    )
}

export async function getServerSideProps(ctx) {
    const res = await fetch('http://127.0.0.1:3000/api/reports')
    const reports = await res.json()

    return {
        props: { reports }
    }
}