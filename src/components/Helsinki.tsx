import React from "react";
import NavBar from "./NavBar";
import { WeatherContext } from '../contexts/WeatherContext'

export interface HelsinkiProps { }

const Helsinki: React.FC<HelsinkiProps> = (props) => {

    return (
        <WeatherContext.Consumer>{(context) => {
            const { Helsinki } = context

            const ChangeToKm = (value: number) => {
                const round = Math.round(value / 1000)
                return round
            }

            const RoundTemp = (value: number) => {
                const round = Math.round(value)
                return round
            }

            return (
                <>{!Helsinki.main ? <div className='main-container'>
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
                                    <div className='weather-info-header'>{Helsinki.name}</div>
                                    <div className='weather-info-header' style={{ fontSize: '8vh' }}><>{RoundTemp(Helsinki.main.temp)} </>&#176;</div>
                                    <div className='weather-info'>{Helsinki.weather[0].description}</div>
                                </div>

                                <div className='weather-info-inner'>
                                    <div className='weather-info'><>Näkyvyys: {ChangeToKm(Helsinki.visibility)} km</></div>
                                    <div className='weather-info'>Pilvisyys: {Helsinki.clouds.all} %</div>
                                    <div className='weather-info'> Tuulennopeus: {Helsinki.wind.speed} m/s</div>

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

export default Helsinki;