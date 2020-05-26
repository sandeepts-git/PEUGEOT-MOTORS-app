import React, { useEffect, useReducer, useState } from 'react';

const UseCarHooks = () => {

    const INITIAL_STATE = {

        cars: [],
        totalCars: [],
        isApiLoaded: false,
        latestCars: [],
        bestSellerCars: [],
        individualCar: {},
        filteredCarsByBrand: [{
            "value": "BMW",
            "checked": false
        }, {
            "value": "Audi",
            "checked": false
        }, {
            "value": "Volkswagen",
            "checked": false
        }, {
            "value": "Tata",
            "checked": false
        }, {
            "value": "Toyota",
            "checked": false
        }, {
            "value": "Ford",
            "checked": false
        }],
        filteredCarsByPrice: [{
            "value": 10,
            "checked": false
        }, {
            "value": 20,
            "checked": false
        }, {
            "value": 30,
            "checked": false
        }, {
            "value": 50,
            "checked": false
        }, {
            "value": 70,
            "checked": false
        }, {
            "value": 80,
            "checked": false
        }],
        price: ""

    }

    const reducer = (state, action) => {
        let { type, payload } = action

        switch (type) {
            case 'API_DATA': {

                return {
                    ...state,
                    ...payload
                }
            }
            case 'CAR_DETAILS': {
                return {
                    ...state,
                    ...payload

                }
            }
            case "BRAND_FILTER": {
                return {
                    ...state,
                    ...payload
                }
            }
            case "CHANGE_CARS": {
                return {
                    ...state,
                    ...payload
                }
            }

            default: {
                return {
                    state
                }
            }


        }

    }

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    let { cars, totalCars, filteredCarsByBrand, price: prices } = state;
    useEffect(() => {

        fetch('https://jsonblob.com/api/999ae172-9dbf-11ea-bd6d-13f3a738cf4d').then(response => response.json().then(json => {
            dispatch({
                type: 'API_DATA',
                payload: {
                    cars: [...json], totalCars: [...json], isApiLoaded: true,
                    latestCars: [...json.filter(a => a.carName == "BMW X1" || a.carName == "Audi A8 L" || a.carName == "Volkswagen Vento")],
                    bestSellerCars: [...json.filter(a => a.carName == "Tata Tigor" || a.carName == "Audi S5" || a.carName == "Ford Figo")]
                }
            })
        }))

    }, [])

    const handleThirdPage = (s) => {

        dispatch({
            type: "CAR_DETAILS",
            payload: { individualCar: { ...cars.filter((a, i) => i == s)[0] } }
        })

    }

    const handleByBrand = (e, ind) => {

        let arraycopy = filteredCarsByBrand
        arraycopy[ind].checked = e.target.checked
        dispatch({
            type: "BRAND_FILTER",
            payload: {
                filteredCarsByBrand: arraycopy
            }

        })

    }

    const handleByPrice = (e, ind) => {

        dispatch({
            type: "CHANGE_CARS",
            payload: { price: e.target.value }

        })
        { console.log("dispatch", prices) }

    }

    const handleByFilter = (price) => {

        if (filteredCarsByBrand.filter(a => a.checked == true).length > 0) {
            dispatch({
                type: "CHANGE_CARS",

                payload: {
                    cars: [...totalCars.filter((car, i) =>
                        ((car.Brand == filteredCarsByBrand[0].value) && (filteredCarsByBrand[0].checked)) ||
                        ((car.Brand == filteredCarsByBrand[1].value) && (filteredCarsByBrand[1].checked)) ||
                        ((car.Brand == filteredCarsByBrand[2].value) && (filteredCarsByBrand[2].checked)) ||
                        ((car.Brand == filteredCarsByBrand[3].value) && (filteredCarsByBrand[3].checked)) ||
                        ((car.Brand == filteredCarsByBrand[4].value) && (filteredCarsByBrand[4].checked)) ||
                        ((car.Brand == filteredCarsByBrand[5].value) && (filteredCarsByBrand[5].checked))

                    )]
                }
            })

            if (price != "") {
                dispatch({
                    type: "CHANGE_CARS",

                    payload: {
                        cars: [...totalCars.filter((car, i) =>
                            (((car.Brand == filteredCarsByBrand[0].value) && (filteredCarsByBrand[0].checked)) ||
                                ((car.Brand == filteredCarsByBrand[1].value) && (filteredCarsByBrand[1].checked)) ||
                                ((car.Brand == filteredCarsByBrand[2].value) && (filteredCarsByBrand[2].checked)) ||
                                ((car.Brand == filteredCarsByBrand[3].value) && (filteredCarsByBrand[3].checked)) ||
                                ((car.Brand == filteredCarsByBrand[4].value) && (filteredCarsByBrand[4].checked)) ||
                                ((car.Brand == filteredCarsByBrand[5].value) && (filteredCarsByBrand[5].checked))) &&
                            (Number(car.Price.trim()) < Number(price))
                        )]
                    }
                })
                { console.log("2if-else page 98000 ", price) }
            }

        }
        else {
            if (price != "") {
                dispatch({
                    type: "CHANGE_CARS",
                    payload: { cars: [...totalCars.filter(car => Number(car.Price.trim()) < Number(price))] }

                })
                { console.log("1if-else page 8800 ", price) }
            }
            else {
                dispatch({
                    type: "CHANGE_CARS",
                    payload: { cars: [...totalCars] }

                })
            }

        }
    }

    return {
        state,
        handleThirdPage,
        handleByBrand,
        handleByFilter,
        handleByPrice,
        dispatch
    }
}

export default UseCarHooks;
