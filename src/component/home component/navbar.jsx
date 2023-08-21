import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import "./header.css";
import IEOLogo from "../../assets/IEO.png";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import logo from "../../assets/studee_short_logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSearchKeyword } from "../../store/searchKeywordSlice";
import SearchResults from "./searchResult";
import axios from "axios";
import { useLocation } from "react-router-dom";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export function Navbar({ profileData }) {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationData, setLocationData] = useState([]);


  const location = useLocation();
  const id = useSelector((state) => state.userId);
  const dispatch = useDispatch();
  const searchItem = useSelector((state) => state.searchKeyword);

  useEffect(() => {
    axios
      .get(`https://studyapi.ieodkv.com/popular/locations`)
      .then((response) => {
        setLocationData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearchChange = (e) => {
    const newSearchKeyword = e.target.value;
    dispatch(setSearchKeyword(newSearchKeyword));
  };
  return (
    <header style={{ background: "#f7f8f9" }} className=" the_main_header_wrap">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <NavLink activeClassName="active-link" to="/">
            <div className="flex">
              <img className="h-10 w-auto" src={IEOLogo} />
            </div>
          </NavLink>
        </div>
        <div className="relative">
          <input
            id="search"
            name="search"
            className="header_custom_searchbar block w-full bg-white border border-gray-300 rounded-md py-2 pr-10 pl-3 text-sm placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Find a country, city or university"
            type="search"
            onChange={handleSearchChange}
          />
          <SearchResults searchQuery={searchItem} data={locationData} />
          <div className="_header_search_iconDiv absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <FiSearch />
          </div>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <br />
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              <NavLink
                className={`My_navLink text-sm font-semibold leading-6 text-gray-900 ${location.pathname === "/programs" ? "active-link" : ""
                  }`}
                to="/programs"
              >
                Programs
              </NavLink>
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            ></Transition>
          </Popover>
          <NavLink
            className={`My_navLink text-sm font-semibold leading-6 text-gray-900 ${location.pathname === "/universities" ? "active-link" : ""
              }`}
            to="/universities"
          >
            Universities
          </NavLink>

          <NavLink
            className={`My_navLink text-sm font-semibold leading-6 text-gray-900 ${location.pathname === "/guides" ? "active-link" : ""
              }`}
            to="/guides"
          >
            Guides
          </NavLink>
        </Popover.Group>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="relative w-full text-gray-400 focus-within:text-gray-600">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink activeClassName="active-link" to={id ? "/account" : "/login"}>
            <button
              style={{
                backgroundColor: "#f7f8f9",
                // padding: "5px 10px",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "row",
                fontSize: "12px",
                alignItems: "center",
              }}
              className=" text-sm font-semibold leading-6 text-gray-900"
            >
              <AiOutlineUser
                size={22}
                style={{ fill: "var(--primary-color)" }}
              />
              <span aria-hidden="true" style={{ marginRight: "2px" }}></span>{" "}
              {id ? `Welcome ${profileData.firstname}` : "Sign In"}
            </button>
          </NavLink>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          {/* Mobile menu content */}
          <div className="flex items-center justify-between">
            <span className="sr-only">IEO</span>

            <img className="h-8 w-auto" src={IEOLogo} alt="" />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        <NavLink activeClassName="active-link"
                          to="/programs"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Programs
                        </NavLink>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <NavLink activeClassName="active-link"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  to="/universities"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Universities
                </NavLink>

                <NavLink activeClassName="active-link"
                  to="/guides"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Guide
                </NavLink>
              </div>
              <div className="py-6">
                <NavLink activeClassName="active-link"
                  to={id ? "/account" : "/login"}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <button
                    style={{
                      backgroundColor: "#f7f8f9",
                      // padding: "5px 10px",
                      borderRadius: "8px",
                      display: "flex",
                      flexDirection: "row",
                      fontSize: "12px",
                      alignItems: "center",
                    }}
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    <AiOutlineUser
                      size={22}
                      style={{ fill: "var(--primary-color)" }}
                    />
                    <span
                      aria-hidden="true"
                      style={{ marginRight: "2px" }}
                    ></span>{" "}
                    {id ? `Welcome ${profileData.firstname}` : "Sign In"}
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
