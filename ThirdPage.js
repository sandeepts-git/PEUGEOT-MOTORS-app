import React, { useContext } from 'react';
import { MyContext } from '../contextData/MyContext'
import { Link } from 'react-router-dom'

const ThirdPage = () => {
    const { state: { individualCar: a } } = useContext(MyContext)
    return (
        <>
            {window.scrollTo(0, 0)}
            <img class="d-block w-100 car" src={a.img} alt="Second slide"></img><br /><br />
            <p class="ml-4">#1 Most Popular Coupe</p>
            <div class="row container">
                <div class="col-xl-8">
                    <h1 class="text-info"><b>{a.Price}</b>Lakhs</h1>
                    <i class="material-icons">&#xe3b6;</i><a href="#">More Photos</a></div>
                <div class="col-xl-4">
                    <h2>₹2,58,000 - 3,60,600</h2>
                    <p>COST</p>
                    <Link to="/"> <a class="btn btn-info">Go to Homepage</a></Link>
                </div>
            </div><br />
            <div class="jumbotron jumbotron-fluid">
                <div class="row container ml-3">
                    <div class="col-1"><i class='fas fa-car icon'></i></div>
                    <div class="col-3"><h5>Coupe</h5></div>
                    <div class="col-1"><i class='fas icon'>&#xf6c0;</i></div>
                    <div class="col-3"><h5>{a.seat}</h5></div>
                    <div class="col-1"><i class='fas icon'>&#xf52f;</i></div>
                    <div class="col-3"><h5>{a.Mileage}}<br />(Combined)</h5></div>
                </div>
            </div>
            <div class="row ml-3">
                <div class="col-3 ml-4"><h2 class="text-info"><b>Overview</b></h2>
                    <h5><p>Is this the car for you?</p></h5>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star">(5.0)</span>
                    <p>12 reviews</p></div>

                <div class="col-3 ml-4"><h4 class="text-info">The Good</h4>
                    <h5><p>Classic exterior styling
                    Roomy interior
                    All-weather usability (AWD versions)
                    Excellent Uconnect multimedia system
                    Massive power (supercharged V-8)
</p></h5></div>
                <div class="col-4 ml-4"><h4 class="text-info">Description</h4>
                    <h5><p>{a.Description}}
</p></h5></div>
            </div><hr />
            <div class="row">
                <div class="col-lg-2 ml-3">
                    <h4><b>Safety</b></h4>
                    <p class="w3-opacity">Recalls and Crash tests</p></div>
                <div class="col-lg-8 mt-3">
                    <h5>Recalls</h5>
                    <p class="w3-opacity">The 2020 Dodge Challenger currently has 0 recalls</p><hr />
                    <h5>Crash and Rollover Test Ratings</h5>
                    <p class="w3-opacity">The 2020 Dodge Challenger has not been tested.</p>
                </div> <hr /></div><br /><hr />
            <div class="row">
                <div class="col-lg-2 ml-3">
                    <h4><b>Warranty</b></h4>
                    <p class="w3-opacity">New car and certified pre-owned programs by</p></div>
                <div class="col-lg-5 mt-3">
                    <h5>New Car Program Benefits</h5>
                    <p class="w3-opacity">Bumper-to-Bumper - 36 months / 36,000 miles</p><hr />
                    <p class="w3-opacity">Roadside Assistance - 60 months / 60,000 miles</p><hr />
                    <h5>Certified Pre-Owned Program Benefits</h5>
                    <p class="w3-opacity">Maximum Age/Mileage - 5 model years or newer/less than 75,000 miles</p><hr />
                    <p class="w3-opacity">Basic Warranty Terms - 3 months/3,000 miles</p><hr />
                    <p class="w3-opacity">Powertrain - 3 months/3,000 miles</p><hr />
                    <p class="w3-opacity">Dealer Certification Required - 125-point inspection</p><hr />
                    <p class="w3-opacity">Roadside Assistance - Yes</p>
                </div>
                <div class="col-lg-8 mt-3">

                </div>
                <hr /></div>

            {/* specifications */}


            <div class="jumbotron jumbotron-fluid">
                <div class="text-info ml-3"><h3>Specifications:</h3></div>
                <div class="row">
                    <div class="col-lg-4 mt-3 ml-3">
                        <dl>
                            <dt>Engine:{a.Engine}</dt>
                            <dt>Transmission:{a.Transmission}</dt>
                        </dl></div>
                    <div class="col-lg-4 mt-3">
                        <dl>
                            <dt>CarName:{a.carName}</dt>
                            <dt>Price:{a.Price}</dt>
                        </dl></div>
                    <div class="col-lg-3 mt-3">
                        <dl>
                            <dt>Acceleration:{a.Acceleration}</dt>
                            <dt>Brand:{a.Brand}</dt>
                        </dl></div>
                </div>
            </div>


            <div class="w3-container w3-flat-wet-asphalt">
                <h2>All Model Years for the Dodge Challenger</h2>
                <div class="row">
                    <div class="col-lg-3 mt-3">
                        <dl>
                            <dt>2019 Dodge Challenger</dt>
                            <dt>2018 Dodge Challenger</dt>
                            <dt>2017 Dodge Challenger</dt>
                        </dl></div>
                    <div class="col-lg-3 mt-3">
                        <dl>
                            <dt>2016 Dodge Challenger</dt>
                            <dt>2015 Dodge Challenger</dt>
                            <dt>2014 Dodge Challenger</dt>
                        </dl></div>
                    <div class="col-lg-3 mt-3">
                        <dl>
                            <dt>2013 Dodge Challenger</dt>
                            <dt>2012 Dodge Challenger</dt>
                            <dt>2011 Dodge Challenger</dt>
                        </dl></div>
                    <div class="col-lg-3 mt-3">
                        <dl>
                            <dt>2010 Dodge Challenger</dt>
                            <dt>2009 Dodge Challenger</dt>
                            <dt>2008 Dodge Challenger</dt>
                        </dl></div></div>
            </div>        </>
    )
}

export default ThirdPage
