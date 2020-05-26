import React, { useContext } from 'react';
import NavBar from './NavBar';
import { MyContext } from '../contextData/MyContext'
import { Link } from 'react-router-dom';

const SecondPage = () => {
    const { state: { cars, filteredCarsByBrand, filteredCarsByPrice, price }, handleThirdPage, handleByBrand, handleByFilter, handleByPrice, dispatch } = useContext(MyContext)
    return (
        <>
            <div className="">
                {window.scrollTo(0, 0)}
                <div className="row" >
                    <div class="col-md-3 mt-3 border" style={{ height: '550px' }}>
                        <div class="dropdown">


                            <a class="dropdown-item text-center bg-light " data-toggle="collapse" aria-expanded="false" href="#d-down">Filter by Brand</a>
                            <ul class="collapse list-unstyled" id="d-down" >
                                {filteredCarsByBrand.map((a, i) => {
                                    return (
                                        <li class="list list-item text-center my-1">
                                            <input type="checkbox" value={a.value} onChange={(e) => {
                                                handleByBrand(e, i)
                                                handleByFilter(price)
                                            }} checked={a.checked ? "checked" : ""}></input>{a.value}
                                        </li>
                                    )
                                })}

                            </ul>


                        </div>
                        <div class="dropdown">
                            {console.log("comp", price)}

                            <a class="dropdown-item text-center bg-light " data-toggle="collapse" aria-expanded="false" href="#d-down1">Filter by Price</a>
                            <ul class="collapse list-unstyled" id="d-down1" >
                                {filteredCarsByPrice.map((a, i) => {
                                    return (
                                        <li class="list list-item text-center my-1">
                                            <input type="radio" value={a.value} name="price" onChange={(e) => {
                                                handleByPrice(e, i)
                                                handleByFilter(e.target.value)
                                            }}></input>Below {a.value} lakhs
                                        </li>
                                    )
                                })}

                            </ul>


                        </div>
                    </div>
                    <div className="col-9">
                        <div className="row">
                            {!cars.length ? (<div>
                                <h1>There are no such cars</h1>
                            </div>) : (
                                    cars.map((car, i) => {
                                        return (
                                            <div class="cardclass card mt-3 mx-2 my-2 p-3 boder-dark" style={{ width: '20rem' }}>
                                                <div class="ribbon">
                                                    <span class="text-white bg-dark">Most Popular</span></div>
                                                <img class="card-img-top h1" height="150px" src={car.img} alt="Card image cap"></img>
                                                <div class="card-body">
                                                    <h5 class="card-title">{car.carName}</h5>
                                                    <hr />
                                                </div>
                                                <div class="row">
                                                    <div class="col-xl-6">
                                                        <h5>Price</h5>
                                                        <p>{car.Price}Lakh</p>
                                                    </div>
                                                    <div class="col-xl-6">
                                                        <Link to="/cars/car"> <button class="btn btn-success" onClick={() => handleThirdPage(i)} >ViewDetails</button></Link>
                                                    </div>
                                                </div>

                                            </div>
                                        )
                                    }))
                            }

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SecondPage;