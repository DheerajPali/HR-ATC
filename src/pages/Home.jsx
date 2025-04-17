import SimpleLineChart from "../components/SimpleLineChart";
import ProgressBar from "../components/ProgressBar";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import recentImg1 from "../assets/images/recent-img1.png";
import BarChartComponent from "../components/candidateTrafficChart";
const Home = () => {
  return (
    <>
      <div className="w-full pt-4 pb-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-4">Overview</h1>
          <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex w-full flex-col bg-violet-50 p-5 rounded-lg border border-violet-200">
              <h3 className="font-normal text-lg text-black">Views</h3>
              <div className="flex justify-between mt-4">
                <span className="font-medium text-3xl">7,265</span>
                <div className="flex items-center">
                  <small className="font-semibold text-base text-green-600 mr-2">
                    +11.01%
                  </small>
                  <i>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-green-600"
                    >
                      <g id="Icon">
                        <g id="ArrowRise">
                          <path
                            id="Vector"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z"
                            fill="currentColor"
                          />
                        </g>
                      </g>
                    </svg>
                  </i>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col bg-blue-50 p-5 rounded-lg border border-blue-200">
              <h3 className="font-normal text-lg text-black">Visits</h3>
              <div className="flex justify-between mt-4">
                <span className="font-medium text-3xl">3,671</span>
                <div className="flex items-center">
                  <small className="font-semibold text-base text-rose-600 mr-2">
                    -0.03%
                  </small>
                  <i>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-rose-600"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.3463 3.63931C14.5455 3.83054 14.5519 4.14706 14.3607 4.34627L11.0007 7.84627C10.9064 7.94448 10.7761 8 10.64 8C10.5039 8 10.3736 7.94448 10.2793 7.84627L8.24 5.72199L5.82335 8.23933L7.54513 9.89223L2 11.5L3.38019 5.8939L5.10197 7.5468L7.87931 4.65373C7.97359 4.55552 8.10385 4.5 8.24 4.5C8.37615 4.5 8.50641 4.55552 8.60069 4.65373L10.64 6.77801L13.6393 3.65373C13.8305 3.45453 14.1471 3.44807 14.3463 3.63931Z"
                        fill="currentcolor"
                      />
                    </svg>
                  </i>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col bg-violet-50 p-5 rounded-lg border border-violet-200">
              <h3 className="font-normal text-lg text-black">New Candidates</h3>
              <div className="flex justify-between mt-4">
                <span className="font-medium text-3xl">156</span>
                <div className="flex items-center">
                  <small className="font-semibold text-base text-green-600 mr-2">
                    +15.05%
                  </small>
                  <i>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-green-600"
                    >
                      <g id="Icon">
                        <g id="ArrowRise">
                          <path
                            id="Vector"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z"
                            fill="currentColor"
                          />
                        </g>
                      </g>
                    </svg>
                  </i>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col bg-blue-50 p-5 rounded-lg border border-blue-200">
              <h3 className="font-normal text-lg text-black">
                Active Candidates
              </h3>
              <div className="flex justify-between mt-4">
                <span className="font-medium text-3xl">1,050</span>
                <div className="flex items-center">
                  <small className="font-semibold text-base text-rose-600 mr-2">
                    -0.03%
                  </small>
                  <i>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-rose-600"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.3463 3.63931C14.5455 3.83054 14.5519 4.14706 14.3607 4.34627L11.0007 7.84627C10.9064 7.94448 10.7761 8 10.64 8C10.5039 8 10.3736 7.94448 10.2793 7.84627L8.24 5.72199L5.82335 8.23933L7.54513 9.89223L2 11.5L3.38019 5.8939L5.10197 7.5468L7.87931 4.65373C7.97359 4.55552 8.10385 4.5 8.24 4.5C8.37615 4.5 8.50641 4.55552 8.60069 4.65373L10.64 6.77801L13.6393 3.65373C13.8305 3.45453 14.1471 3.44807 14.3463 3.63931Z"
                        fill="currentcolor"
                      />
                    </svg>
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="container mx-auto">
          <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-4 pb-4 lg:mx-0 lg:max-w-none lg:grid-cols-1">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-8">
                <SimpleLineChart />
              </div>
              <div className="col-span-12 md:col-span-4 bg-white p-4 md:p-8 md:py-4 rounded-lg border shadow-md">
                <div className="w-full">
                  <div className="flex items-center justify-between mb-7">
                    <h2 className="text-xl font-bold">Traffic Sources</h2>
                    <div className="relative w-40">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 border"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.585l3.71-4.355a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <ProgressBar
                    label="Azure Data"
                    value={70}
                    color="bg-purple-700"
                  />
                  <ProgressBar label="PowerBI" value={40} />
                  <ProgressBar label="Data AI" value={35} />
                  <ProgressBar label="SharePoint" value={40} />
                  <ProgressBar label="React Native" value={40} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-4 pb-4 ">
        <div className="container mx-auto">
          <div className="grid max-w-2xl grid-cols-1 gap-x-8 pt-4 pb-4 lg:mx-0 lg:max-w-none lg:grid-cols-1">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-8">
                <div className="bg-white p-4 rounded-lg border shadow-md">
                  <div className="mb-5">
                    <h2 className="text-xl font-bold mb-1">Transactions</h2>
                    <p className="text-sm font-normal text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipis.
                    </p>
                  </div>
                  <table className="table-auto w-full">
                    <tbody>
                      <tr>
                        <td className="border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                          <span className="bg-green-200 font-medium text-base text-green-800 py-2 px-5 rounded-full">
                            <small className="w-2 h-2 bg-green-800 rounded-full inline-block align-middle mr-2"></small>
                            Completed
                          </span>
                        </td>
                        <td className="border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                          <div className="w-full">
                            <h4 className="font-bold text-base text-black">
                              Visa card **** 4831
                            </h4>
                            <p className="font-normal text-base text-gray-600">
                              Card payment
                            </p>
                          </div>
                        </td>
                        <td className="border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                          <div className="w-full">
                            <h4 className="font-bold text-base text-black">
                              $182.94
                            </h4>
                            <p className="font-normal text-base text-gray-600">
                              Jan 17, 2022
                            </p>
                          </div>
                        </td>
                        <td className="border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                          <p className="font-normal text-base text-gray-600">
                            Amazon
                          </p>
                        </td>
                        <td className="border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                          <Menu
                            as="div"
                            className="relative inline-block text-left"
                          >
                            <div>
                              <MenuButton className="inline-flex w-full justify-center">
                                <div className="flex gap-x-1 items-center">
                                  <span className="w-1 h-1 rounded-full bg-gray-500 hover:bg-sky-600"></span>
                                  <span className="w-1 h-1 rounded-full bg-gray-500 hover:bg-sky-600"></span>
                                  <span className="w-1 h-1 rounded-full bg-gray-500 hover:bg-sky-600"></span>
                                </div>
                              </MenuButton>
                            </div>
                            <MenuItems
                              transition
                              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                            >
                              <div className="py-1">
                                <MenuItem>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                  >
                                    Account settings
                                  </a>
                                </MenuItem>
                                <MenuItem>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                  >
                                    Support
                                  </a>
                                </MenuItem>
                                <MenuItem>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                  >
                                    License
                                  </a>
                                </MenuItem>
                                <form action="#" method="POST">
                                  <MenuItem>
                                    <button
                                      type="submit"
                                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                    >
                                      Sign out
                                    </button>
                                  </MenuItem>
                                </form>
                              </div>
                            </MenuItems>
                          </Menu>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                          <span className="bg-red-200 font-medium text-base text-red-700 py-2 px-5 rounded-full">
                            <small className="w-2 h-2 bg-red-700 rounded-full inline-block align-middle mr-2"></small>
                            Cancelled
                          </span>
                        </td>
                        <td className="border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                          <div className="w-full">
                            <h4 className="font-bold text-base text-black">
                              Visa card **** 4831
                            </h4>
                            <p className="font-normal text-base text-gray-600">
                              Card payment
                            </p>
                          </div>
                        </td>
                        <td className="border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                          <div className="w-full">
                            <h4 className="font-bold text-base text-black">
                              $182.94
                            </h4>
                            <p className="font-normal text-base text-gray-600">
                              Jan 17, 2022
                            </p>
                          </div>
                        </td>
                        <td className="border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                          <p className="font-normal text-base text-gray-600">
                            Amazon
                          </p>
                        </td>
                        <td className="border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                          <Menu
                            as="div"
                            className="relative inline-block text-left"
                          >
                            <div>
                              <MenuButton className="inline-flex w-full justify-center">
                                <div className="flex gap-x-1 items-center">
                                  <span className="w-1 h-1 rounded-full bg-gray-500 hover:bg-sky-600"></span>
                                  <span className="w-1 h-1 rounded-full bg-gray-500 hover:bg-sky-600"></span>
                                  <span className="w-1 h-1 rounded-full bg-gray-500 hover:bg-sky-600"></span>
                                </div>
                              </MenuButton>
                            </div>
                            <MenuItems
                              transition
                              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                            >
                              <div className="py-1">
                                <MenuItem>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                  >
                                    Account settings
                                  </a>
                                </MenuItem>
                                <MenuItem>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                  >
                                    Support
                                  </a>
                                </MenuItem>
                                <MenuItem>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                  >
                                    License
                                  </a>
                                </MenuItem>
                                <form action="#" method="POST">
                                  <MenuItem>
                                    <button
                                      type="submit"
                                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                    >
                                      Sign out
                                    </button>
                                  </MenuItem>
                                </form>
                              </div>
                            </MenuItems>
                          </Menu>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                          <span className="bg-yellow-200 font-medium text-base text-yellow-600 py-2 px-5 rounded-full">
                            <small className="w-2 h-2 bg-yellow-600 rounded-full inline-block align-middle mr-2"></small>
                            Pending
                          </span>
                        </td>
                        <td className="border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                          <div className="w-full">
                            <h4 className="font-bold text-base text-black">
                              Visa card **** 4831
                            </h4>
                            <p className="font-normal text-base text-gray-600">
                              Card payment
                            </p>
                          </div>
                        </td>
                        <td className="border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                          <div className="w-full">
                            <h4 className="font-bold text-base text-black">
                              $182.94
                            </h4>
                            <p className="font-normal text-base text-gray-600">
                              Jan 17, 2022
                            </p>
                          </div>
                        </td>
                        <td className="border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                          <p className="font-normal text-base text-gray-600">
                            Amazon
                          </p>
                        </td>
                        <td className="border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                          <Menu
                            as="div"
                            className="relative inline-block text-left"
                          >
                            <div>
                              <MenuButton className="inline-flex w-full justify-center">
                                <div className="flex gap-x-1 items-center">
                                  <span className="w-1 h-1 rounded-full bg-gray-500 hover:bg-sky-600"></span>
                                  <span className="w-1 h-1 rounded-full bg-gray-500 hover:bg-sky-600"></span>
                                  <span className="w-1 h-1 rounded-full bg-gray-500 hover:bg-sky-600"></span>
                                </div>
                              </MenuButton>
                            </div>
                            <MenuItems
                              transition
                              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                            >
                              <div className="py-1">
                                <MenuItem>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                  >
                                    Account settings
                                  </a>
                                </MenuItem>
                                <MenuItem>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                  >
                                    Support
                                  </a>
                                </MenuItem>
                                <MenuItem>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                  >
                                    License
                                  </a>
                                </MenuItem>
                                <form action="#" method="POST">
                                  <MenuItem>
                                    <button
                                      type="submit"
                                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                    >
                                      Sign out
                                    </button>
                                  </MenuItem>
                                </form>
                              </div>
                            </MenuItems>
                          </Menu>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                          <span className="bg-green-200 font-medium text-base text-green-800 py-2 px-5 rounded-full">
                            <small className="w-2 h-2 bg-green-800 rounded-full inline-block align-middle mr-2"></small>
                            Completed
                          </span>
                        </td>
                        <td className="border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                          <div className="w-full">
                            <h4 className="font-bold text-base text-black">
                              Visa card **** 4831
                            </h4>
                            <p className="font-normal text-base text-gray-600">
                              Card payment
                            </p>
                          </div>
                        </td>
                        <td className="border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                          <div className="w-full">
                            <h4 className="font-bold text-base text-black">
                              $182.94
                            </h4>
                            <p className="font-normal text-base text-gray-600">
                              Jan 17, 2022
                            </p>
                          </div>
                        </td>
                        <td className="border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                          <p className="font-normal text-base text-gray-600">
                            Amazon
                          </p>
                        </td>
                        <td className="border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                          <Menu
                            as="div"
                            className="relative inline-block text-left"
                          >
                            <div>
                              <MenuButton className="inline-flex w-full justify-center">
                                <div className="flex gap-x-1 items-center">
                                  <span className="w-1 h-1 rounded-full bg-gray-500 hover:bg-sky-600"></span>
                                  <span className="w-1 h-1 rounded-full bg-gray-500 hover:bg-sky-600"></span>
                                  <span className="w-1 h-1 rounded-full bg-gray-500 hover:bg-sky-600"></span>
                                </div>
                              </MenuButton>
                            </div>
                            <MenuItems
                              transition
                              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                            >
                              <div className="py-1">
                                <MenuItem>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                  >
                                    Account settings
                                  </a>
                                </MenuItem>
                                <MenuItem>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                  >
                                    Support
                                  </a>
                                </MenuItem>
                                <MenuItem>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                  >
                                    License
                                  </a>
                                </MenuItem>
                                <form action="#" method="POST">
                                  <MenuItem>
                                    <button
                                      type="submit"
                                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                    >
                                      Sign out
                                    </button>
                                  </MenuItem>
                                </form>
                              </div>
                            </MenuItems>
                          </Menu>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                          <span className="bg-green-200 font-medium text-base text-green-800 py-2 px-5 rounded-full">
                            <small className="w-2 h-2 bg-green-800 rounded-full inline-block align-middle mr-2"></small>
                            Completed
                          </span>
                        </td>
                        <td className="border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                          <div className="w-full">
                            <h4 className="font-bold text-base text-black">
                              Visa card **** 4831
                            </h4>
                            <p className="font-normal text-base text-gray-600">
                              Card payment
                            </p>
                          </div>
                        </td>
                        <td className="border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                          <div className="w-full">
                            <h4 className="font-bold text-base text-black">
                              $182.94
                            </h4>
                            <p className="font-normal text-base text-gray-600">
                              Jan 17, 2022
                            </p>
                          </div>
                        </td>
                        <td className="border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                          <p className="font-normal text-base text-gray-600">
                            Amazon
                          </p>
                        </td>
                        <td className="border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                          <Menu
                            as="div"
                            className="relative inline-block text-left"
                          >
                            <div>
                              <MenuButton className="inline-flex w-full justify-center">
                                <div className="flex gap-x-1 items-center">
                                  <span className="w-1 h-1 rounded-full bg-gray-500 hover:bg-sky-600"></span>
                                  <span className="w-1 h-1 rounded-full bg-gray-500 hover:bg-sky-600"></span>
                                  <span className="w-1 h-1 rounded-full bg-gray-500 hover:bg-sky-600"></span>
                                </div>
                              </MenuButton>
                            </div>
                            <MenuItems
                              transition
                              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                            >
                              <div className="py-1">
                                <MenuItem>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                  >
                                    Account settings
                                  </a>
                                </MenuItem>
                                <MenuItem>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                  >
                                    Support
                                  </a>
                                </MenuItem>
                                <MenuItem>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                  >
                                    License
                                  </a>
                                </MenuItem>
                                <form action="#" method="POST">
                                  <MenuItem>
                                    <button
                                      type="submit"
                                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                    >
                                      Sign out
                                    </button>
                                  </MenuItem>
                                </form>
                              </div>
                            </MenuItems>
                          </Menu>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 bg-white p-4 rounded-lg border shadow-md">
                <div className="">
                  <h2 className="text-xl font-bold mb-1">Recent Candidates</h2>
                  <p className="text-sm font-normal text-gray-500">
                    Lorem ipsum dolor sit ametis.
                  </p>
                </div>
                <ul>
                  <li className="flex items-center justify-between my-4 py-4 px-2 border-b border-gray-300">
                    <div className="flex items-center">
                      <figure className="w-[50px] h-[50px] rounded-full">
                        <img src={recentImg1} cl></img>
                      </figure>
                      <div className="flex flex-col pl-3">
                        <h3 className="text-base font-semibold mb-1">
                          Jenny Wilson
                        </h3>
                        <p className="text-sm font-normal text-gray-500">
                          w.lawson@example.com
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col text-right">
                      <h4 className="font-medium text-base text-black">
                        $11,234
                      </h4>
                      <p className="font-normal text-base text-gray-600">
                        Austin
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center justify-between my-4 py-4 px-2 border-b border-gray-300">
                    <div className="flex items-center">
                      <figure className="w-[50px] h-[50px] rounded-full">
                        <img src={recentImg1} cl></img>
                      </figure>
                      <div className="flex flex-col pl-3">
                        <h3 className="text-base font-semibold mb-1">
                          Jenny Wilson
                        </h3>
                        <p className="text-sm font-normal text-gray-500">
                          w.lawson@example.com
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col text-right">
                      <h4 className="font-medium text-base text-black">
                        $11,234
                      </h4>
                      <p className="font-normal text-base text-gray-600">
                        Austin
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center justify-between my-4 py-4 px-2 border-b border-gray-300">
                    <div className="flex items-center">
                      <figure className="w-[50px] h-[50px] rounded-full">
                        <img src={recentImg1} cl></img>
                      </figure>
                      <div className="flex flex-col pl-3">
                        <h3 className="text-base font-semibold mb-1">
                          Jenny Wilson
                        </h3>
                        <p className="text-sm font-normal text-gray-500">
                          w.lawson@example.com
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col text-right">
                      <h4 className="font-medium text-base text-black">
                        $11,234
                      </h4>
                      <p className="font-normal text-base text-gray-600">
                        Austin
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center justify-between my-4 py-4 px-2 last:border-none">
                    <div className="flex items-center">
                      <figure className="w-[50px] h-[50px] rounded-full">
                        <img src={recentImg1} cl></img>
                      </figure>
                      <div className="flex flex-col pl-3">
                        <h3 className="text-base font-semibold mb-1">
                          Jenny Wilson
                        </h3>
                        <p className="text-sm font-normal text-gray-500">
                          w.lawson@example.com
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col text-right">
                      <h4 className="font-medium text-base text-black">
                        $11,234
                      </h4>
                      <p className="font-normal text-base text-gray-600">
                        Austin
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="container mx-auto">
          <div className="bg-white p-4 rounded-lg border shadow-md">
            <h2 className="text-lg font-semibold mb-4">Product Traffic</h2>
            <BarChartComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home; // ✅ this line is REQUIRED
