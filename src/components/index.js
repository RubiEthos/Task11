import { Fragment } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Payment Invoices", to: "/PaymentI", current: true },
  { name: "Distribution objects", to: "/DistributionO", current: false },
  { name: "Starting distribution", to: "/StartD", current: false },
  { name: "Distribution management", to: "/DistributionM", current: false },
  {
    name: "Distributed invoices for payment",
    to: "/DistributionI",
    current: false,
  },
  { name: "Cost Estimating and Control", to: "/CostE", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to={"/"}>
                    <svg
                      version="1.0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="25pt"
                      height="25pt"
                      class="bg-gray-500 border-4 rounded-full hover:bg-gray-700"
                      viewBox="0 0 300.000000 300.000000"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g
                        transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                        fill="#000000"
                        stroke="none"
                      >
                        <path
                          d="M1607 2416 c-59 -22 -97 -57 -127 -121 -17 -36 -20 -64 -20 -261 0
                    -216 1 -221 25 -271 27 -54 78 -97 136 -113 19 -6 119 -10 224 -10 105 0 205
                    4 224 10 58 16 109 59 136 113 24 50 25 55 25 271 0 192 -3 226 -19 261 -26
                    57 -77 103 -135 120 -67 20 -413 20 -469 1z m478 -35 c51 -23 102 -81 110
                    -123 3 -18 5 -130 3 -249 -3 -211 -4 -216 -28 -252 -14 -22 -46 -48 -74 -62
                    -48 -24 -57 -25 -250 -25 -222 0 -253 7 -308 66 -44 48 -48 72 -48 299 0 227
                    4 251 48 299 55 59 86 66 307 66 172 0 206 -3 240 -19z"
                        />
                        <path
                          d="M802 2390 c-18 -11 -41 -34 -52 -52 -19 -31 -20 -51 -20 -307 0 -388
                    -16 -371 345 -371 258 0 280 4 320 58 19 25 20 45 23 307 3 279 3 281 -20 315
                    -44 66 -65 70 -328 70 -217 0 -238 -2 -268 -20z m549 -58 l29 -32 0 -260 c0
                    -165 -4 -268 -11 -283 -24 -52 -48 -57 -293 -57 -153 0 -233 4 -251 12 -51 23
                    -55 45 -55 327 l0 259 25 31 c14 16 36 32 48 34 12 3 125 4 250 3 l229 -1 29
                    -33z"
                        />
                        <path
                          d="M772 1596 l-37 -34 -3 -436 c-3 -482 -4 -477 61 -516 29 -18 52 -20
                    282 -20 230 0 253 2 282 20 65 39 64 34 61 516 l-3 436 -37 34 -38 34 -265 0
                    -265 0 -38 -34z m542 -10 c68 -28 66 -15 66 -474 0 -264 -4 -420 -10 -433 -24
                    -44 -55 -49 -305 -49 l-237 0 -29 29 -29 29 0 420 c0 408 1 420 21 446 11 14
                    35 30 52 35 54 16 432 13 471 -3z"
                        />
                        <path
                          d="M1470 1345 l0 -145 145 0 145 0 0 -115 0 -115 111 0 111 0 -4 -100
                    -4 -100 98 0 98 0 0 95 c0 52 1 98 3 101 1 4 -42 6 -95 5 l-98 -2 0 115 0 116
                    -110 0 -110 0 0 145 0 145 -145 0 -145 0 0 -145z m228 97 c9 -6 12 -34 10
                    -103 l-3 -94 -83 -3 c-53 -2 -89 1 -98 9 -18 15 -20 169 -2 187 14 14 155 16
                    176 4z m230 -355 l3 -68 -63 3 -63 3 -3 54 c-5 79 -2 82 65 79 l58 -3 3 -68z
                    m197 -217 l0 -55 -50 0 -50 0 -3 44 c-5 66 1 73 55 69 l48 -3 0 -55z"
                        />
                        <path
                          fill="#E0115F"
                          d="M2180 736 c0 -19 -3 -41 -6 -50 -5 -13 3 -16 50 -16 l56 0 0 50 0 50
                    -50 0 -50 0 0 -34z"
                        />
                      </g>
                    </svg>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </MenuButton>
                  </div>
                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(
                              focus ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(
                              focus ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(
                              focus ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </MenuItem>
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
