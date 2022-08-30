import React from "react";
import NavBar from "./NavBar";
import { WeatherContext } from "../contexts/WeatherContext";

export interface CurrentProps { }

const Current: React.FC<CurrentProps> = (props) => {

    return (
        <WeatherContext.Consumer>{(context) => {
            const { Current } = context

            const ChangeToKm = (value: number) => {
                const round = Math.round(value / 1000)
                return round
            }

            const RoundTemp = (value: number) => {
                const round = Math.round(value)
                return round
            }

            return (
                <>{!Current.main ? <div className='main-container'>
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
                            <NavBar />
                        </div>
                    </div>
                </div> : (
                    <div className='main-container'>
                        <div className='home'>

                            <div className='weather-info-outer'>

                                <div className='weather-info-inner'>
                                    <div className='weather-info-header'>{Current.name}</div>
                                    <div className='weather-info-header' style={{ fontSize: '8vh' }}><>{RoundTemp(Current.main.temp)} </>&#176;</div>
                                    <div className='weather-info'>{Current.weather[0].description}</div>
                                </div>

                                <div className='weather-info-inner'>
                                    <div className='weather-info'><>Näkyvyys: {ChangeToKm(Current.visibility)} km</></div>
                                    <div className='weather-info'>Pilvisyys: {Current.clouds.all} %</div>
                                    <div className='weather-info'> Tuulennopeus: {Current.wind.speed} m/s</div>

                                </div>
                                <NavBar />
                            </div>
                        </div>
                    </div>
                )}</>
            )
        }}
        </WeatherContext.Consumer>
    )


}

export default Current;