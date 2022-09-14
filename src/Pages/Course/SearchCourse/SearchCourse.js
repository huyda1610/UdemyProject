import React, { useEffect , useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { getCourse } from '../../../Slices/courseSlice';
import { Link } from "react-router-dom";

const removeAccents = (str) =>  {
    return str.normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/đ/g, 'd').replace(/Đ/g, 'D');
};

export default function SearchCourse() {
    const dispatch = useDispatch();
    const { course } = useSelector((state) => state.course);
    const { name } = useParams();
    const [courseSearch, setCourseSearch] = useState([]);
    useEffect(() => {
        dispatch(getCourse());
    },[])

    useEffect(() => {
        const data = [...course];
        setCourseSearch(
            data.filter((item) => removeAccents(item.tenKhoaHoc).toLowerCase().includes(removeAccents(name)))
        )
    },[course, name])
        
    return (
        <div className="search-course">
            <div className="container">
                {courseSearch.length > 0 ?
                    <div className="search-course__content">
                        <h1>{courseSearch.length} results for {`"${name}"`}</h1>
                        {courseSearch.map((item, index) => (
                            <div key={index} className="search-course__content-item">
                                <div className="search-course__item-img">
                                    <Link to={`/course/${item.maKhoaHoc}`}>
                                        <img src={item.hinhAnh} alt={item.tenKhoaHoc}></img>
                                    </Link>  
                                </div>
                                <div className="search-course__item-thread">
                                    <Link to={`/course/${item.maKhoaHoc}`}><h5>{item.tenKhoaHoc}</h5></Link>
                                    <p className="desciption">{item.moTa}</p>
                                    <div className="star">
                                        <span>5</span>
                                        <BsStarFill className="icon-star" />
                                        <BsStarFill className="icon-star" />
                                        <BsStarFill className="icon-star" />
                                        <BsStarFill className="icon-star" />
                                        <BsStarFill className="icon-star" />
                                        <span className="view">({item.luotXem})</span>
                                    </div>
                                    <p className="total">31 hours in total • 397 sessions • All levels</p>
                                    
                                </div>
                            </div>
                        ))}
                        
                    </div>
                   : <div className="search-sourse__none">
                       <p>We're sorry, we couldn't find any results for {`"${name}"`}</p>
                       <p>Try to narrow your search. Here are some ideas:</p>
                       <ul>
                           <li>Make sure you spelled all the words correctly</li>
                           <li>Try using other keywords</li>
                           <li>Try to use less specific keywords</li>
                       </ul>
                   </div> }
            </div>
        </div>
    )
}
