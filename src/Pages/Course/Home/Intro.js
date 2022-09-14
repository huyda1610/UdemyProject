import React from 'react'

export default function Intro() {
    return (
        <div className="intro">
            <div className="width-default">
                <div className="intro__content">
                    <div className="intro__content-one">
                        <div className="intro__content-icon">
                            <div className="intro__content-icon-box">
                                <i className="fas fa-play"></i>
                            </div>
                        </div>
                        <span>Learn in-demand skills with over 155,000 video courses</span>
                    </div>

                    <div className="intro__content-two">
                        <div className="intro__content-icon">
                            <div className="intro__content-icon-box">
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                        <span>Choose courses taught by real-world experts</span>
                    </div>

                    <div className="intro__content-three">
                        <div className="intro__content-icon">
                            <div className="intro__content-icon-box">
                                <i className="fas fa-star-of-life"></i>
                            </div>
                        </div>
                        <span>Learn at your own pace, with lifetime access on mobile and desktop</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
