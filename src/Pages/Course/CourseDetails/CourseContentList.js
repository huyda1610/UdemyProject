import React, {useState} from 'react'

export default function CourseContentList({item, showSection}) {
    const [subItem, setSubItem] = useState(false);
    const handleDropDown = () => {
        setSubItem(!subItem);
    }
    return (
       <div className="course-content-lists__item">
           <div className={`course-content-lists__item-content ${subItem === true ? "show" : ""}`} onClick={handleDropDown}> 
               <h3>
                    {(!subItem) ? <span className="icon-down">{item.iconOpen}</span> : <span className="icon-up">{item.iconClose}</span>}
                    <span className="title">{item.title}</span>
                </h3>
               <span className="time">
                   {item.hours} lectures • {item.minutes} min
               </span>
           </div>
           <div className={`course-content-lists__item-dropdown ${subItem === true ? "show" : ""}`}>
               <ul>
                   {item.subList.map((item) => {
                       return (
                            <li key={item.subId}>
                                <div className="title">
                                    <span className="icon">{item.icon}</span>
                                    <h3>{item.subTitle}</h3>
                                </div>
                                <div className="overview">
                                    <span className="preview">{item.textPreview}</span>
                                    <span className="minute"> {item.time}m</span>
                                </div>
                            </li>
                       )
                   })}
                  
               </ul>
           </div>
       </div>
    )
}
