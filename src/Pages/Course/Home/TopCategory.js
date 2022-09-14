import React from 'react'
import {Link} from 'react-router-dom';
import design from "../../../Images/design-v2.jpg";
import developmentv2 from "../../../Images/development-v2.jpg";
import marketing from "../../../Images/marketing-v2.jpg";
import software from "../../../Images/software-v2.jpg";
import developmentv3 from "../../../Images/development-v3.jpg";
import business from "../../../Images/business-v2.jpg";
import photography from "../../../Images/photography-v2.jpg";
import music from "../../../Images/music-v2.jpg";
export default function TopCategory() {
    const Images = [
        { name: "Design", url: design, maDanhmuc: "Design",},
        { name: "Development", url: developmentv2, maDanhmuc: "Development", },
        { name: "Marketing", url: marketing, maDanhmuc: "Marketing",},
        { name: "IT & Software", url: software, maDanhmuc: "Software",},
        { name: "Seft-Development", url: developmentv3, maDanhmuc: "BackEnd",},
        { name: "Business", url: business, maDanhmuc: "Business",},
        { name: "Picture", url: photography, maDanhmuc: "Picture",},
        { name: "Music", url: music, maDanhmuc: "Music",},
    ]
    return (
        <div className="topcategory">
            <div className="width-default">
                <div className="topcategory__content">
                    <h2>Top category</h2>
                    <div className="topcategory__content-box">
                        <div className="row">
                            {Images.map((item) => (
                                <div key={Math.random()} className="image-thread col-lg-3 col-md-4 col-sm-6 col-3">
                                     <Link to="#">
                                        <div className="image">
                                            <img src={item.url} alt=""></img>
                                        </div>
                                        <div className="thread">
                                            <p>{item.name}</p>
                                        </div>      
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
