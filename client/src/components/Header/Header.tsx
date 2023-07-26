import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Wrapper } from "..";
import { DefaultContext } from "../../context/ContextProvider";
import styles from "./Header.module.scss";

const navbarLeft = [
  {
    display: "Home",
    path: "/",
    child: [
      { pathchild: "/#", displaychlid: "Main Home" },
      { pathchild: "/slider-showcase", displaychlid: "Slider Showcase" },
      { pathchild: "/eyewear-store", displaychlid: "Eyewear Store" },
    ],
  },
  {
    display: "Page",
    path: "/page",
    child: [
      { pathchild: "/about-us", displaychlid: "About us" },
      { pathchild: "/about-me", displaychlid: "About me" },
      { pathchild: "/our-team", displaychlid: "Our team" },
      { pathchild: "/gift-cards", displaychlid: "Gift cards" },
      { pathchild: "/pricing-plans", displaychlid: "Pricing Plans" },
      { pathchild: "/contact-us", displaychlid: "Contact Us" },
      { pathchild: "/paq-page", displaychlid: "FAQ Page" },
      { pathchild: "/coming-soon", displaychlid: "Coming Soon" },
    ],
  },
  {
    display: "Shop",
    path: "/shop",
    child: [
      { pathchild: "/shop-right-sidebar", displaychlid: "Right Sidebar" },
      { pathchild: "/left-sidebar", displaychlid: "Left Sidebar" },
      { pathchild: "/shop-slider", displaychlid: "Shop Slider" },
      { pathchild: "/info-on-image", displaychlid: "Info on Image" },
    ],
  },
  {
    display: "Blog",
    path: "/blog",
    child: [
      { pathchild: "/right-sidebar", displaychlid: "Right Sidebar" },
      { pathchild: "/left-sidebar", displaychlid: "Left Sidebar" },
      { pathchild: "/no-sidebar", displaychlid: "No Sidebar" },
      { pathchild: "/post-types", displaychlid: "Post Types" },
    ],
  },
];
const navbarRight = [
  {
    display: "Wishlist",
    path: "/wishlist",
  },
  {
    display: "cart",
    path: "/cart",
  },
];
const Header = () => {
  const cx = classNames.bind(styles);
  const { pathname } = useLocation();
  const theme = useContext(DefaultContext);
  const ref = React.useRef<HTMLInputElement>(null);
  const divHover = React.useRef<HTMLDivElement>(null);

  const [pseudo, setPseudo] = useState<string>("");

  const handleBlurOn = (e: any, data: string) => {
    if (pseudo == data) {
      setPseudo("");
    } else {
      setPseudo(data);
    }
  };
  useEffect(() => {
    if (divHover.current) {
      divHover.current.style.display = "block";
    }
  }, [divHover.current]);
  useEffect(() => {
    const handleSroll = () => {
      if (
        document.body.scrollTop > 850 ||
        document.documentElement.scrollTop > 850
      ) {
        if (ref.current) {
          ref.current.classList.add("stickyy");
          ref.current.style.display = "block";
        }
      } else {
        if (ref.current) {
          ref.current.classList.remove("stickyy");
          ref.current.style.display = "none";
        }
      }
    };
    window.addEventListener("scroll", handleSroll);
    return () => {
      window.removeEventListener("scroll", handleSroll);
    };
  }, []);
  return (
    <header id={cx("header-emees-page")} className={cx("header")}>
      <Wrapper title="Header">
        <div
          className={cx(
            `header-emees-page-inner`,
            `header-emees-page-inner${pathname !== "/" ? "-disabled" : ""}`
          )}
        >
          <div className={cx("header__logo")}>
            <Link to="/">
              <img
                src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/logo_light.png"
                alt="ESMEE"
                className={cx("header__logo__main")}
              />
            </Link>
          </div>
          <div className={cx("header__menu")}>
            <div className={cx("header__menu__left")}>
              <ul
                className={cx(
                  "flex",
                  "items-center",
                  "flex-row",
                  "gap-8",
                  "tracking-widest",
                  "uppercase",
                  "text-base",
                  "whitespace-nowrap"
                )}
              >
                {navbarLeft.map((link, i) => (
                  <li
                    key={i}
                    className={cx(
                      "first:ml-4",
                      "mx-3",
                      "font-semibold",
                      "text-white",
                      "relative"
                    )}
                  >
                    <NavLink
                      to={`${link.path}`}
                      key={link.display}
                      className={({ isActive }) =>
                        isActive ? theme.activeLink : theme.normalLink
                      }
                      onMouseOver={(e) => handleBlurOn(e, link.display)}
                    >
                      {link.display}
                    </NavLink>
                    {pseudo === link.display && (
                      <div
                        className={cx(
                          "absolute",
                          "top-13-override",
                          "bg-black",
                          "capitalize"
                        )}
                        ref={divHover}
                      >
                        <div className={cx("p-4", "flex", "flex-col")}>
                          {link.child.map((child) => (
                            <div
                              className={cx(
                                "font-medium",
                                "my-1",
                                "pl-2",
                                "pr-5"
                              )}
                            >
                              <NavLink
                                to={`${child.pathchild}`}
                                key={child.displaychlid}
                                className={({ isActive }) =>
                                  isActive ? theme.activeLink : theme.normalLink
                                }
                              >
                                {child.displaychlid}
                              </NavLink>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              {/* </nav> */}
            </div>
            <div className={cx("header__menu__right")}>
              <ul
                className={cx(
                  "flex",
                  "items-center",
                  "flex-row",
                  "gap-4",
                  "tracking-widest",
                  "uppercase",
                  "text-base",
                  "whitespace-nowrap"
                )}
              >
                {navbarRight.map((link, i) => (
                  <li
                    key={i}
                    className={cx("mx-7", "font-semibold", "text-white")}
                  >
                    <NavLink
                      to={`${link.path}`}
                      key={link.display}
                      className={({ isActive }) =>
                        isActive ? theme.activeLink : theme.normalLink
                      }
                    >
                      {link.display}
                    </NavLink>
                  </li>
                ))}
                <li className={cx("mx-7", "text-white", "font-semibold")}>
                  <Link to="/search" className={cx("text-white")}>
                    <span>
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                  </Link>
                </li>
                <li className={cx("mx-7", "text-white", "font-semibold")}>
                  <Link to="/navbar" className={cx("text-white")}>
                    <span>
                      <FontAwesomeIcon icon={faBars} />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Sticky */}
        <div
          className={cx(
            `header-emees-page-sticky`,
            `${pathname !== "/" ? "header-emees-page-sticky-sticky" : ""}`
          )}
          ref={ref}
        >
          <div className={cx("header-emees-page-inner")}>
            <div className={cx("header__logo")}>
              <Link to="/">
                <img
                  src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/logo_dark.png"
                  alt="ESMEE"
                  className={cx("header__logo__main")}
                />
              </Link>
            </div>
            <div className={cx("header__menu")}>
              <div className={cx("header__menu__left")}>
                <ul
                  className={cx(
                    "flex",
                    "items-center",
                    "flex-row",
                    "gap-8",
                    "tracking-widest",
                    "uppercase",
                    "text-base",
                    "whitespace-nowrap"
                  )}
                >
                  {navbarLeft.map((link, i) => (
                    <li
                      key={i}
                      className={cx(
                        "first:ml-4",
                        "mx-3",
                        "relative",
                        "font-semibold",
                        "text-black"
                      )}
                    >
                      <NavLink
                        to={`${link.path}`}
                        key={link.display}
                        className={({ isActive }) =>
                          isActive ? theme.activeLink : theme.normalLink
                        }
                        onMouseOver={(e) => handleBlurOn(e, link.display)}
                      >
                        {link.display}
                      </NavLink>
                      {pseudo === link.display && (
                        <div
                          className={cx(
                            "absolute",
                            "top-13-override",
                            "bg-black",
                            "capitalize"
                          )}
                          ref={divHover}
                        >
                          <div
                            className={cx(
                              "p-4",
                              "flex",
                              "flex-col",
                              "box-hover"
                            )}
                          >
                            {link.child.map((child) => (
                              <div
                                className={cx(
                                  "font-medium",
                                  "my-1",
                                  "pl-2",
                                  "pr-5"
                                )}
                              >
                                <NavLink
                                  to={`${child.pathchild}`}
                                  key={child.displaychlid}
                                  className={({ isActive }) =>
                                    isActive
                                      ? theme.activeLink
                                      : theme.normalLink
                                  }
                                >
                                  {child.displaychlid}
                                </NavLink>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={cx("header__menu__right")}>
                <ul
                  className={cx(
                    "flex",
                    "items-center",
                    "flex-row",
                    "gap-4",
                    "tracking-widest",
                    "uppercase",
                    "text-base",
                    "whitespace-nowrap"
                  )}
                >
                  {navbarRight.map((link, i) => (
                    <li
                      key={i}
                      className={cx("mx-7", "font-semibold", "text-white")}
                    >
                      <NavLink
                        to={`${link.path}`}
                        key={link.display}
                        className={({ isActive }) =>
                          isActive ? theme.activeLink : theme.normalLink
                        }
                      >
                        {link.display}
                      </NavLink>
                    </li>
                  ))}
                  <li className={cx("mx-7", "text-white", "font-semibold")}>
                    <Link to="/search" className={cx("text-white")}>
                      <span>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </span>
                    </Link>
                  </li>
                  <li className={cx("mx-7", "text-white", "font-semibold")}>
                    <Link to="/navbar" className={cx("text-white")}>
                      <span>
                        <FontAwesomeIcon icon={faBars} />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
