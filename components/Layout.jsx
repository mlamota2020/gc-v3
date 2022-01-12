import Link from "next/link";
import Image from "next/image";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import {
  BellIcon,
  MenuAlt1Icon,
  XIcon,
  FlagIcon,
  CheckIcon,
  PlusIcon,
  ChatAlt2Icon,
  HomeIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon, SearchIcon } from "@heroicons/react/solid";

function classNames(...classNamees) {
  return classNamees.filter(Boolean).join(" ");
}

export default function Layout({ children, title, description, activePage }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (title && description) {
    return (
      <div className="relative h-screen flex overflow-hidden bg-neutral-100">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            static
            className="fixed inset-0 flex z-40 lg:hidden"
            open={sidebarOpen}
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-neutral-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-teal-700">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-shrink-0 flex items-center px-4">
                  <Image
                    className="h-8 w-auto"
                    src="/icons/logo-white.png"
                    alt="Green Complaint"
                    width={32}
                    height={32}
                  />
                  <span className="ml-3 text-lg text-white font-semibold">
                    Green Complaint
                  </span>
                </div>
                <nav
                  className="mt-5 flex-shrink-0 h-full divide-y divide-teal-800 overflow-y-auto"
                  aria-label="Sidebar"
                >
                  <div className="px-2 space-y-1">
                    <Link href="/dashboard">
                      <a className="text-teal-100 hover:text-white hover:bg-teal-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                        <HomeIcon className="mr-4 flex-shrink-0 h-6 w-6 text-teal-200" />
                        Inicio
                      </a>
                    </Link>

                    <Link href="/dashboard/reports" aria-current="page">
                      <a className="text-teal-100 hover:text-white hover:bg-teal-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                        <FlagIcon className="mr-4 flex-shrink-0 h-6 w-6 text-teal-200" />
                        Reportes
                      </a>
                    </Link>

                    <Link href="/dashboard/reports/resolved">
                      <a className="text-teal-100 hover:text-white hover:bg-teal-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                        <CheckIcon className="mr-4 flex-shrink-0 h-6 w-6 text-teal-200" />
                        Resueltos
                      </a>
                    </Link>

                    <Link href="/dashboard/reports/add">
                      <a className="text-teal-100 hover:text-white hover:bg-teal-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                        <PlusIcon className="mr-4 flex-shrink-0 h-6 w-6 text-teal-200" />
                        Crear reporte
                      </a>
                    </Link>

                    <Link href="/blog">
                      <a className="text-teal-100 hover:text-white hover:bg-teal-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                        <ChatAlt2Icon className="mr-4 flex-shrink-0 h-6 w-6 text-teal-200" />
                        Blog
                      </a>
                    </Link>
                  </div>
                  <div className="mt-6 pt-6">
                    <div className="px-2 space-y-1">
                      <Link href="/user/settings">
                        <a className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-teal-100 hover:text-white hover:bg-teal-600">
                          <svg
                            className="mr-4 h-6 w-6 text-teal-200"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              stroke-linejoin="round"
                              strokeWidth="2"
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            />
                            <path
                              strokeLinecap="round"
                              stroke-linejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          Ajustes
                        </a>
                      </Link>

                      <Link href="/help">
                        <a className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-teal-100 hover:text-white hover:bg-teal-600">
                          <svg
                            className="mr-4 h-6 w-6 text-teal-200"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              stroke-linejoin="round"
                              strokeWidth="2"
                              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          Ayuda
                        </a>
                      </Link>
                    </div>
                  </div>
                </nav>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:flex-shrink-0 min-h-screen overflow-hidden">
          <div className="flex flex-col w-64 overflow-hidden">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex flex-col flex-grow bg-teal-700 pt-5 pb-4 overflow-y-hidden">
              <div className="flex items-center flex-shrink-0 px-4 text-white font-semibold text-xl">
                <Image
                  className="h-8 w-auto"
                  src="/icons/logo-white.png"
                  alt="Green Complaint"
                  width={32}
                  height={32}
                />
                <span className="ml-3">Green Complaint</span>
              </div>
              <nav
                className="mt-5 flex-shrink-0 h-full divide-y divide-teal-800 overflow-y-hidden"
                aria-label="Sidebar"
              >
                <div className="px-2 space-y-1">
                  <Link href="/dashboard">
                    <a className="text-teal-100 hover:text-white hover:bg-teal-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                      <svg
                        className="mr-4 flex-shrink-0 h-6 w-6 text-teal-200"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          stroke-linejoin="round"
                          strokeWidth="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      Inicio
                    </a>
                  </Link>

                  <Link href="/dashboard/reports" aria-current="page">
                    <a className="text-teal-100 hover:text-white hover:bg-teal-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                      <FlagIcon className="mr-4 flex-shrink-0 h-6 w-6 text-teal-200" />
                      Reportes
                    </a>
                  </Link>

                  <Link href="/dashboard/reports/resolved">
                    <a className="text-teal-100 hover:text-white hover:bg-teal-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                      <CheckIcon className="mr-4 flex-shrink-0 h-6 w-6 text-teal-200" />
                      Resueltos
                    </a>
                  </Link>

                  <Link href="/dashboard/reports/add">
                    <a className="text-teal-100 hover:text-white hover:bg-teal-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                      <PlusIcon className="mr-4 flex-shrink-0 h-6 w-6 text-teal-200" />
                      Crear reporte
                    </a>
                  </Link>

                  <Link href="/blog">
                    <a className="text-teal-100 hover:text-white hover:bg-teal-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                      <ChatAlt2Icon className="mr-4 flex-shrink-0 h-6 w-6 text-teal-200" />
                      Blog
                    </a>
                  </Link>
                </div>
                <div className="mt-6 pt-6">
                  <div className="px-2 space-y-1">
                    <Link href="/user/settings">
                      <a className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-teal-100 hover:text-white hover:bg-teal-600">
                        <svg
                          className="mr-4 h-6 w-6 text-teal-200"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            stroke-linejoin="round"
                            strokeWidth="2"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            stroke-linejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        Ajustes
                      </a>
                    </Link>

                    <Link href="/help">
                      <a className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-teal-100 hover:text-white hover:bg-teal-600">
                        <svg
                          className="mr-4 h-6 w-6 text-teal-200"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            stroke-linejoin="round"
                            strokeWidth="2"
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Ayuda
                      </a>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto focus:outline-none">
          <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-neutral-200 lg:border-none">
            <button
              className="px-4 border-r border-neutral-200 text-neutral-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            {/* Search bar */}
            <div className="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
              <div className="flex-1 flex">
                <form className="w-full flex md:ml-0" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Buscar
                  </label>
                  <div className="relative w-full text-neutral-400 focus-within:text-neutral-600">
                    <div
                      className="absolute inset-y-0 left-0 flex items-center pointer-events-none"
                      aria-hidden="true"
                    >
                      <SearchIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <input
                      id="search-field"
                      name="search-field"
                      className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
                      placeholder="Buscar reportes"
                      type="search"
                    />
                  </div>
                </form>
              </div>
              <div className="ml-4 flex items-center md:ml-6">
                <button className="bg-white p-1 rounded-full text-neutral-400 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 lg:p-2 lg:rounded-md lg:hover:bg-neutral-50">
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <span className="hidden ml-3 text-neutral-700 text-sm font-medium lg:block">
                            <span className="sr-only">Open user menu for </span>
                            Emilia Birch
                          </span>
                          <ChevronDownIcon
                            className="hidden flex-shrink-0 ml-1 h-5 w-5 text-neutral-400 lg:block"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-neutral-900 ring-opacity-5 focus:outline-none"
                        >
                          <Menu.Item>
                            {({ active }) => (
                              <Link href="/dashboard/profile/176587419681">
                                <a
                                  className={classNames(
                                    active ? "bg-neutral-100" : "",
                                    "block px-4 py-2 text-sm text-neutral-700"
                                  )}
                                >
                                  Tu perfil
                                </a>
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/user/settings"
                                className={classNames(
                                  active ? "bg-neutral-100" : "",
                                  "block px-4 py-2 text-sm text-neutral-700"
                                )}
                              >
                                Ajustes
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link href="/">
                                <a
                                  className={classNames(
                                    active ? "bg-neutral-100" : "",
                                    "block px-4 py-2 text-sm text-neutral-700"
                                  )}
                                >
                                  Cerrar sesión
                                </a>
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </div>
            </div>
          </div>
          <main className="flex-1 relative pb-8 z-0 overflow-y-auto">
            <div className="bg-white shadow">
              <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-neutral-200">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center">
                      <div>
                        <div className="flex items-center">
                          <h1 className="ml-3 text-2xl font-bold leading-7 text-neutral-900 sm:leading-9 sm:truncate">
                            {title}
                          </h1>
                        </div>
                        <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                          <dt className="sr-only">Descripción</dt>
                          <dd className="mt-3 flex items-center text-sm text-neutral-500 font-medium sm:mr-6 sm:mt-0">
                            {description}
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {children}
          </main>
        </div>
      </div>
    )
  } else {
    return (
        <div className="relative h-screen flex overflow-hidden bg-neutral-100">
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog
                    as="div"
                    static
                    className="fixed inset-0 flex z-40 lg:hidden"
                    open={sidebarOpen}
                    onClose={setSidebarOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-neutral-600 bg-opacity-75" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-teal-700">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="absolute top-0 right-0 -mr-12 pt-2">
                                    <button
                                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <span className="sr-only">Close sidebar</span>
                                        <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </button>
                                </div>
                            </Transition.Child>
                            <div className="flex-shrink-0 flex items-center px-4">
                                <Image
                                    className="h-8 w-auto"
                                    src="/icons/logo-white.png"
                                    alt="Green Complaint"
                                    width={32}
                                    height={32}
                                />
                                <span className="ml-3 text-lg text-white font-semibold">Green Complaint</span>
                            </div>
                            <nav className="mt-5 flex-shrink-0 h-full divide-y divide-teal-800 overflow-y-auto" aria-label="Sidebar">
                                <div className="px-2 space-y-1">
                                    <Link href="/dashboard">
                                        <a className='text-teal-100 hover:text-white hover:bg-teal-600 group flex items-center px-2 py-2 text-base font-medium rounded-md'>
                                            <HomeIcon className="mr-4 flex-shrink-0 h-6 w-6 text-teal-200" />
                                            Inicio</a>
                                    </Link>

                                    <Link href="/dashboard/reports" aria-current="page">
                                        <a className="text-teal-100 hover:text-white hover:bg-teal-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                                            <FlagIcon className="mr-4 flex-shrink-0 h-6 w-6 text-teal-200" />
                                            Reportes</a>
                                    </Link>

                                    <Link href="/dashboard/reports/resolved">
                                        <a className='text-teal-100 hover:text-white hover:bg-teal-600 group flex items-center px-2 py-2 text-base font-medium rounded-md'>
                                            <CheckIcon className="mr-4 flex-shrink-0 h-6 w-6 text-teal-200" />
                                            Resueltos
                                        </a>
                                    </Link>

                                    <Link href="/dashboard/reports/add">
                                        <a className='text-teal-100 hover:text-white hover:bg-teal-600 group flex items-center px-2 py-2 text-base font-medium rounded-md'>
                                            <PlusIcon className="mr-4 flex-shrink-0 h-6 w-6 text-teal-200" />
                                            Crear reporte</a>
                                    </Link>

                                    <Link href="/blog">
                                        <a className='text-teal-100 hover:text-white hover:bg-teal-600 group flex items-center px-2 py-2 text-base font-medium rounded-md'>
                                            <ChatAlt2Icon className="mr-4 flex-shrink-0 h-6 w-6 text-teal-200" />
                                            Blog</a>
                                    </Link>
                                </div>
                                <div className="mt-6 pt-6">
                                    <div className="px-2 space-y-1">
                                        <Link href="/user/settings"><a className='group flex items-center px-2 py-2 text-base font-medium rounded-md text-teal-100 hover:text-white hover:bg-teal-600'>
                                            <svg className="mr-4 h-6 w-6 text-teal-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            Ajustes</a>
                                        </Link>

                                        <Link href="/help">
                                            <a className='group flex items-center px-2 py-2 text-base font-medium rounded-md text-teal-100 hover:text-white hover:bg-teal-600'><svg className="mr-4 h-6 w-6 text-teal-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                                Ayuda</a>
                                        </Link>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </Transition.Child>
                    <div className="flex-shrink-0 w-14" aria-hidden="true">
                        {/* Dummy element to force sidebar to shrink to fit close icon */}
                    </div>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:flex lg:flex-shrink-0 min-h-screen overflow-hidden">
                <div className="flex flex-col w-64 overflow-hidden">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex flex-col flex-grow bg-teal-700 pt-5 pb-4 overflow-y-hidden">
                        <div className="flex items-center flex-shrink-0 px-4 text-white font-semibold text-xl">
                            <Image
                                className="h-8 w-auto"
                                src="/icons/logo-white.png"
                                alt="Green Complaint"
                                width={32}
                                height={32}
                            />
                            <span className="ml-3">Green Complaint</span>
                        </div>
                        <nav className="mt-5 flex-shrink-0 h-full divide-y divide-teal-800 overflow-y-hidden" aria-label="Sidebar">
                            <div className="px-2 space-y-1">
                                <Link href="/dashboard">
                                    <a className="text-teal-100 hover:text-white hover:bg-teal-600 group flex items-center px-2 py-2 text-base font-medium rounded-md"><svg className="mr-4 flex-shrink-0 h-6 w-6 text-teal-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                        Inicio</a>
                                </Link>

                                <Link href="/dashboard/reports" aria-current="page">
                                    <a className="text-teal-100 hover:text-white hover:bg-teal-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                                        <FlagIcon className="mr-4 flex-shrink-0 h-6 w-6 text-teal-200" />
                                        Reportes</a>
                                </Link>

                                <Link href="/dashboard/reports/resolved">
                                    <a className="text-teal-100 hover:text-white hover:bg-teal-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                                        <CheckIcon className="mr-4 flex-shrink-0 h-6 w-6 text-teal-200" />
                                        Resueltos</a>
                                </Link>

                                <Link href="/dashboard/reports/add">
                                    <a className="text-teal-100 hover:text-white hover:bg-teal-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                                        <PlusIcon className="mr-4 flex-shrink-0 h-6 w-6 text-teal-200" />
                                        Crear reporte</a>
                                </Link>

                                <Link href="/blog">
                                    <a className="text-teal-100 hover:text-white hover:bg-teal-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                                        <ChatAlt2Icon className="mr-4 flex-shrink-0 h-6 w-6 text-teal-200" />
                                        Blog</a>
                                </Link>
                            </div>
                            <div className="mt-6 pt-6">
                                <div className="px-2 space-y-1">
                                    <Link href="/user/settings">
                                        <a className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-teal-100 hover:text-white hover:bg-teal-600"><svg className="mr-4 h-6 w-6 text-teal-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                            Ajustes</a>
                                    </Link>

                                    <Link href="/help">
                                        <a className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-teal-100 hover:text-white hover:bg-teal-600"><svg className="mr-4 h-6 w-6 text-teal-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                            Ayuda</a>
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-auto focus:outline-none">
                <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-neutral-200 lg:border-none">
                    <button
                        className="px-4 border-r border-neutral-200 text-neutral-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 lg:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    {/* Search bar */}
                    <div className="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                        <div className="flex-1 flex">
                            <form className="w-full flex md:ml-0" action="#" method="GET">
                                <label htmlFor="search-field" className="sr-only">
                                    Buscar
                                </label>
                                <div className="relative w-full text-neutral-400 focus-within:text-neutral-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" aria-hidden="true">
                                        <SearchIcon className="h-5 w-5" aria-hidden="true" />
                                    </div>
                                    <input
                                        id="search-field"
                                        name="search-field"
                                        className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
                                        placeholder="Buscar reportes"
                                        type="search"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="ml-4 flex items-center md:ml-6">
                            <button className="bg-white p-1 rounded-full text-neutral-400 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                                <span className="sr-only">View notifications</span>
                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                            </button>

                            {/* Profile dropdown */}
                            <Menu as="div" className="ml-3 relative">
                                {({ open }) => (
                                    <>
                                        <div>
                                            <Menu.Button className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 lg:p-2 lg:rounded-md lg:hover:bg-neutral-50">
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                                <span className="hidden ml-3 text-neutral-700 text-sm font-medium lg:block">
                                                    <span className="sr-only">Open user menu for </span>Emilia Birch
                                                </span>
                                                <ChevronDownIcon
                                                    className="hidden flex-shrink-0 ml-1 h-5 w-5 text-neutral-400 lg:block"
                                                    aria-hidden="true"
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            show={open}
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items
                                                static
                                                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-neutral-900 ring-opacity-5 focus:outline-none"
                                            >
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link href="/dashboard/profile/176587419681">
                                                        <a
                                                            className={classNames(
                                                                active ? 'bg-neutral-100' : '',
                                                                'block px-4 py-2 text-sm text-neutral-700'
                                                            )}
                                                        >
                                                            Tu perfil
                                                        </a>
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="/user/settings"
                                                            className={classNames(
                                                                active ? 'bg-neutral-100' : '',
                                                                'block px-4 py-2 text-sm text-neutral-700'
                                                            )}
                                                        >
                                                            Ajustes
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            href="/"

                                                        >
                                                            <a className={classNames(
                                                                active ? 'bg-neutral-100' : '',
                                                                'block px-4 py-2 text-sm text-neutral-700'
                                                            )}>Cerrar sesión</a>
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </>
                                )}
                            </Menu>
                        </div>
                    </div>
                </div>
                <main className="flex-1 relative pb-8 z-0 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    )
  }
}