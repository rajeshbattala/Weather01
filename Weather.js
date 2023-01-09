import React, { useState } from 'react'

const Weather= () => {
    const [city, setcity] = useState("");
    const [result, setResult] = useState("");

    const changeHandler = (e) => {
        setcity(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        fetch(`https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=fdf32f180e88c9d1296102de321f462e`)
            .then((response) => response.json())
            .then((data) => {
                const Kelvin = data.main.temp;
                const celsius = Kelvin - 273.15;
                console.log(celsius)
                setResult("Temperature at" + city + "\n" + Math.round(celsius)+"c");
                setcity("")
            })
            .Catch(error => console.log("error", error));
    };
return (
    <div>
        <center>
            <div classsname="card">
                <div className="card-body">
                    <h4 className="card-title"> Weather App</h4>
                    < form  onSubmit={submitHandler}>
                        <input type="text"
                            name="city"
                            value={city}
                            onChange={changeHandler}></input><br></br>
                        <input type="submit" value=" get temperature"></input>
                    </form>
                    <h1> {result}</h1>
                </div>
            </div>
        </center>
    </div>
);
 };
export default Weather;