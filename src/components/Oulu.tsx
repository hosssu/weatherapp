import React from "react";
import NavBar from "./NavBar";
import { WeatherContext } from "../contexts/WeatherContext";

export interface OuluProps { }

const Oulu: React.FC<OuluProps> = (props) => {

    return (
        <WeatherContext.Consumer>{(context) => {
            const { Oulu } = context

            const ChangeToKm = (value: number) => {
                const round = Math.round(value / 1000)
                return round
            }

            const RoundTemp = (value: number) => {
                const round = Math.round(value)
                return round
            }

            return (
                <>{!Oulu.main ? <div className='main-container'>
                    <div className='home'>
                        <div className='weather-info-outer'>
                            <div className='weather-info-inner'>
                                <div className='weather-info'>No location specified</div>
                                <div className='weather-info'>- &#176;</div>
                                <div className='weather-info'></div>
                            </div>

                            <div className='weather-info-inner'>
                                <div className='weather-info'><>Näkyvyys:  km</></div>
                                <div className='weather-info'>Pilvisyys:  %</div>
                                <div className='weather-info'> Tuulennopeus:  m/s</div>

                            </div>
                        </div>
                    </div>
                    <NavBar />
                </div> : (
                    <div className='main-container'>
                        <div className='home'>

                            <div className='weather-info-outer'>

                                <div className='weather-info-inner'>
                                    <div className='weather-info-header'>{Oulu.name}</div>
                                    <div className='weather-info-header' style={{ fontSize: '8vh' }}><>{RoundTemp(Oulu.main.temp)} </>&#176;</div>
                                    <div className='weather-info'>{Oulu.weather[0].description}</div>
                                </div>

                                <div className='weather-info-inner'>
                                    <div className='weather-info'><>Näkyvyys: {ChangeToKm(Oulu.visibility)} km</></div>
                                    <div className='weather-info'>Pilvisyys: {Oulu.clouds.all} %</div>
                                    <div className='weather-info'> Tuulennopeus: {Oulu.wind.speed} m/s</div>

                                </div>
                            </div>
                        </div>
                        <NavBar />
                    </div>
                )}</>

            )
        }}
        </WeatherContext.Consumer>
    )
}

export default Oulu;