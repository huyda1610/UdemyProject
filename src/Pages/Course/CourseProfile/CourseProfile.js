import React from 'react'
import UserCourseDetails from './ProfileDetails';

export default function CourseProfile() {
    return (
            <div className="shopping-cart">
                <div className="shopping-cart__content">
                    <div className="shopping-cart__content-heading">
                        <div className="container">
                            <h1>My Profile</h1>
                        </div>
                    </div>
                    <div className="container">
                        <UserCourseDetails/>
                    </div>
                    <div className="courses-more">
                    </div>             
                </div>
            </div>
    )
}
