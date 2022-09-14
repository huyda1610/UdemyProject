import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import NavbarMobile from "./NavbarMobile";
import Category from "./Category";
import { getCourseList } from '../../Slices/courseSlice';
import logo from "../../Images/logo-udemy.svg";
import profile from "../../Images/profile.png";

const List = [{maDanhMuc: 'BackEnd', tenDanhMuc: 'Lập trình Backend'},
{maDanhMuc: 'Design', tenDanhMuc: 'Thiết kế Web'},
{maDanhMuc: 'DiDong', tenDanhMuc: 'Lập trình di động'},
{maDanhMuc: 'FrontEnd', tenDanhMuc: 'Lập trình Front end'},
{maDanhMuc: 'FullStack', tenDanhMuc: 'Lập trình Full Stack'},
{maDanhMuc: 'TuDuy', tenDanhMuc: 'Tư duy lập trình'},
]
export default function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userInfo } = useSelector((state) => state.auth);
    const [SideBar, setSideBar] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
   
    const { courseList, courseListIsLoading } = useSelector((state) => state.course);
    
    const {cart} = useSelector((state) => state.cart);
    
    const handleLogout = () => {
        localStorage.removeItem("userInfo");
        window.location.reload();
    }
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
    }
    
    useEffect(() => {
        dispatch(getCourseList())
    },[])

    return (
        <>
        <nav className="navbar navbar-expand-lg width-site">
            <div className="col-3 col-sm-none d-md-none sub-menu-medium">
                <i onClick={() => setSideBar(true)} className="fa fa-bars" />
            </div>
            <div className="header__left col-xl-7 col-lg-9 col-md-8 col-sm-6 col-6">
                <Link className="navbar-brand logo" to="/">
                   <img src={logo} alt="#" />
                </Link>
                <span className="header__cate">
                    <i className="fa fa-th mr-1" />
                    <span>Categories</span>
                    <Category listCourse = {courseListIsLoading ? courseList : List} />
                </span>
                <form action={(searchTerm !== "") ? `/search/${searchTerm}` : null} className="header__form">
                    <div className="input-group">
                        <input type="text" value={searchTerm} onChange={handleSearch} className="form-control" placeholder="Search course" />
                        <div className="input-group-append ml-0">
                            <span className="input-group-text" id="basic-addon2">
                            <i className="fa fa-search" />
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            <div className="header__right col-xl-5 col-lg-3 col-md-4 col-sm-2 col-3 cart-medium">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link nav__hide udemy" href="#">Udemy for Business</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav__hide tech" href="#">Tech on Udemy</a>
                    </li>
                   
                    <li className="nav-item cart">
                        <a className="nav-link nav__icon" href="/cart">
                            <i className="fa fa-shopping-cart" />
                            {cart.length > 0 ? <p className="item-shopping-cart"><span>{cart.length}</span></p> : ""}
                        </a>
                        <div className="shopping-cart">
                            {cart.length > 0 ? <div className="shopping-cart-box">
                                <div className="shopping-cart-box__content">
                                    {cart.map((item) => (
                                        <div key={Math.random()} className="shopping-cart-box__content-item">
                                            <div className="image">
                                                <img src={item.hinhAnh} alt={item.tenKhoaHoc}></img>
                                            </div>
                                            <div className="thread">
                                                <p>{item.tenKhoaHoc}</p>
                                                <p className="price">$79.99</p>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="total">
                                        <p>Total:$ {Math.round(79.99 * cart.length)}</p>
                                    </div>
                                    {!window.location.pathname.includes("cart") && <a className="btn-cart" href="/cart">Go to cart</a>}
                                </div>
                            </div>
                            : 
                                <div className="shopping-cart-box">
                                    <p className="empty">Your basket is empty</p>
                                    <a className="btn-conti" href="/">Continue your purchases</a>
                                </div>}
                        </div>
                    </li>
                    <li className="nav-item but">
                        {!userInfo ? (
                            <>
                            <Button className="mr-1" >
                                <Link to="/login">Log In</Link>
                            </Button>
                            <Button>
                                <Link to="/register">Sign Up</Link>
                            </Button>
                            </>
                        ) : (
                            <>
                            <div className="image-profile">
                                <img src={profile} alt="#"></img>
                            </div>
                            <ul className="sub-profile">
                                <li onClick={() => navigate("/profile")}>
                                    <h5>{userInfo.hoTen}</h5>
                                    <span>{userInfo.email}</span>
                                </li>
                                <li onClick={handleLogout}>Logout</li>
                            </ul>
                            </>
                        )}

                    </li>
                </ul>
            </div>
        </nav> 
        <NavbarMobile SideBar = {SideBar} setSideBar={setSideBar} listCourse = {courseListIsLoading ? courseList : List}  />
        </>
    )
}
