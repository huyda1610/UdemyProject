import React from 'react';
import { Link } from 'react-router-dom';
export default function TopicCategory() {
    return (
        <div className="topic-category">
            <div className="width-default">
                <div className="topic-category__content">
                <h2>Featured topics by category</h2>
                <div className="topic-category__list">
                    <div className="row">
                        <div className="col-md-3 col-6">
                            <div className="topic-category__item">
                                <h2>Business</h2> 
                                <ul>
                                    <li>
                                        <Link to="/">Financial Analysis</Link>
                                        <p>1,085,740 students</p>
                                    </li>
                                    <li>
                                        <Link to="/">SQL</Link>
                                        <p>4,724,677 students</p>
                                    </li>
                                    <li>
                                        <Link to="/">PMP</Link>
                                        <p>1,435,242 students</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-6">
                            <div className="topic-category__item">
                                <h2>IT & Software</h2>
                                <ul>
                                    <li>
                                        <Link to="/">AWS Certification</Link>
                                        <p>4,658,530 students</p>
                                    </li>
                                    <li>
                                        <Link to="/">Ethical Hacking</Link>
                                        <p>4,724,677 students</p>
                                    </li>
                                    <li>
                                        <Link to="/">Cyber Security</Link>
                                        <p>1,435,242 students</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-6">
                            <div className="topic-category__item">
                                <h2>Design</h2> 
                                <ul>
                                    <li>
                                        <Link to="/">Photoshop</Link>
                                        <p>9,993,487 students</p>
                                    </li>
                                    <li>
                                        <Link to="/">Graphic Design</Link>
                                        <p>2,939,704 students</p>
                                    </li>
                                    <li>
                                        <Link to="/">Drawing</Link>
                                        <p>2,257,536 students</p>
                                    </li>
                                </ul>
                            </div>
                        </div>       

                        <div className="col-md-3 col-6">
                            <div className="topic-category__item">
                                <h2>Development</h2> 
                                <ul>
                                    <li>
                                        <Link to="/">Python</Link>
                                        <p>31,194,089 students</p>
                                    </li>
                                    <li>
                                        <Link to="/">Web Development</Link>
                                        <p>9,928,881 students</p>
                                    </li>
                                    <li>
                                        <Link to="/">Machine Learningt</Link>
                                        <p>6,213,938 students</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                      
                    <Link className="button-more" to="/">Explore more topics</Link>
     

                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
