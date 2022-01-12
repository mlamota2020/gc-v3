import Link from 'next/link'
import Image from 'next/image'
import Layout from 'components/Layout'
import {
  TrashIcon,
  AdjustmentsIcon
} from '@heroicons/react/outline'
import {
  DocumentReportIcon,
  ChevronRightIcon
} from '@heroicons/react/solid'
import moment from 'moment'
import 'moment/locale/es'
const cards = [
  { name: 'Basura en el parque Simón Bolivar', href: '#', icon: TrashIcon, amount: 'Hace poco, con la ayu...' },
  { name: 'Árbol caído por sismo', href: '#', icon: AdjustmentsIcon, amount: 'Este sismo de 6.3 ha...' }
]
const transactions = [
  {
    id: 1,
    name: 'Esquina hecha basurero por el monumento a la Madre',
    href: '#',
    amount: ' Al andar por es...',
    currency: '',
    status: 'listo',
    date: 'Julio 11, 2020',
    datetime: '2020-07-11',
  },

  {
    id: 2,
    name: 'Terreno baldío cerca de ILGA',
    href: '#',
    amount: 'Mi familia y yo he...',
    currency: '',
    status: 'peligro',
    date: 'Junio 25, 2021',
    datetime: '2021-06-25'
  },
  {
    id: 3,
    name: 'Quema de árboles en San Gerónimo 2',
    href: '#',
    amount: 'La quema de ár...',
    currency: '',
    status: 'arreglando',
    date: 'Junio27, 2021',
    datetime: '2021-06-27'
  }
]
const statusStyles = {
  nuevo: 'bg-green-100 text-green-800',
  arreglando: 'bg-yellow-100 text-yellow-800',
  peligro: 'bg-red-100 text-red-800',
}

function classNames(...classNamees) {
  return classNamees.filter(Boolean).join(' ')
}

export default function Example({ reports }) {
  moment.locale('es')
  return (
    <Layout title="Panel de control" description="Todo está aquí.">
      <div className="mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg leading-6 font-medium text-neutral-900">
            Tus reportes más recientes
          </h2>
          <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            {cards.map((card) => (
              <div key={card.name} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <card.icon className="h-6 w-6 text-neutral-400" aria-hidden="true" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-neutral-500 truncate">{card.name}</dt>
                        <dd>
                          <div className="text-lg font-medium text-neutral-900">{card.amount}</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-neutral-50 px-5 py-3">
                  <div className="text-sm">
                    <Link href={card.href}>
                      <a className="font-medium text-teal-700 hover:text-teal-900">Leer más...</a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-neutral-900 sm:px-6 lg:px-8">
          Reportes recientes
        </h2>

        {/* Activity list (smallest breakpoint only) */}
        <div className="shadow sm:hidden">
          <ul className="mt-2 divide-y divide-neutral-200 overflow-hidden shadow sm:hidden">
            {transactions.map((transaction) => (
              <li key={transaction.id}>
                <Link href={transaction.href}>
                  <a className="block px-4 py-4 bg-white hover:bg-neutral-50">
                    <span className="flex items-center space-x-4">
                      <span className="flex-1 flex space-x-2 truncate">
                        <DocumentReportIcon className="flex-shrink-0 h-5 w-5 text-neutral-400" aria-hidden="true" />
                        <span className="flex flex-col text-neutral-500 text-sm truncate">
                          <span className="truncate">{transaction.name}</span>
                          <span>
                            <span className="text-neutral-900 font-medium">{transaction.amount}</span>{' '}
                            {transaction.currency}
                          </span>
                          <time dateTime={transaction.datetime}>{transaction.date}</time>
                        </span>
                      </span>
                      <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-neutral-400" aria-hidden="true" />
                    </span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          <nav
            className="bg-white px-4 py-3 flex items-center justify-between border-t border-neutral-200"
            aria-label="Pagination"
          >
            <div className="flex-1 flex justify-between">
              <Link
                href="#"
              >
                <a className="relative inline-flex items-center px-4 py-2 border border-neutral-300 text-sm font-medium rounded-md text-neutral-700 bg-white hover:text-neutral-500">Previous</a>
              </Link>
              <Link
                href="#"
              >
                <a className="relative inline-flex items-center px-4 py-2 border border-neutral-300 text-sm font-medium rounded-md text-neutral-700 bg-white hover:text-neutral-500">Next</a>
              </Link>
            </div>
          </nav>
        </div>

        {/* Activity table (small breakpoint and up) */}
        <div className="hidden sm:block">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col mt-2">
              <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
                <table className="min-w-full divide-y divide-neutral-200 table-auto overflow-hidden">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-neutral-50 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        Titulo
                      </th>
                      <th className="px-6 py-3 bg-neutral-50 text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        Reporte
                      </th>
                      <th className="hidden px-6 py-3 bg-neutral-50 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider md:block">
                        Status
                      </th>
                      <th className="px-6 py-3 bg-neutral-50 text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        Fecha
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral-200">
                    {reports.slice(0, 5).map((report) => (
                      <tr key={report._id} className="bg-white">
                        <td className="w-24 px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                          <div className="flex">
                            <Link href={'/dashboard/show/' + report._id}>
                              <a className="group inline-flex space-x-2 truncate text-sm">
                                <DocumentReportIcon
                                  className="flex-shrink-0 h-5 w-5 text-neutral-400 group-hover:text-neutral-500"
                                  aria-hidden="true"
                                />
                                <p className="text-neutral-500 truncate group-hover:text-neutral-900">{report.title}</p></a>
                            </Link>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-neutral-500">
                          <span className="text-neutral-900 font-medium">{report.report}</span>
                        </td>
                        <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-neutral-500 md:block w-8">
                          <span
                            className={classNames(
                              statusStyles[report.state],
                              'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize'
                            )}
                          >
                            {report.state}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-neutral-500">
                          <time dateTime={moment(report.updatedAt).format('lll')}>{moment(report.updatedAt).format('lll')}</time>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* Pagination */}
                <nav
                  className="bg-white px-4 py-3 flex items-center justify-between border-t border-neutral-200 sm:px-6"
                  aria-label="Pagination"
                >
                  <div className="hidden sm:block">
                    <p className="text-sm text-neutral-700">
                      Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of the reports
                    </p>
                  </div>
                  <div className="flex-1 flex justify-between sm:justify-end">
                    <Link
                      href="#"
                    >
                      <a className="relative inline-flex items-center px-4 py-2 border border-neutral-300 text-sm font-medium rounded-md text-neutral-700 bg-white hover:text-neutral-500">Previous</a>
                    </Link>
                    <Link
                      href="#"
                    >
                      <a className="relative inline-flex items-center px-4 py-2 border border-neutral-300 text-sm font-medium rounded-md text-neutral-700 bg-white hover:text-neutral-500">Next</a>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://127.0.0.1:3000/api/reports')
  const reports = await res.json()

  return {
    props: { reports }
  }
}