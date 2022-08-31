import React, { createContext } from "react";
import axios from 'axios'
export interface WeatherContextProps {
    children?: React.ReactNode
}

export const WeatherContext = createContext<any | undefined>(undefined);

class WeatherContextProvider extends React.Component<WeatherContextProps> {

    state = { Current: [], Oulu: [], Helsinki: [], latitude: '', longitude: '' }

    componentDidMount() {
        this.getWeather()
        this.getLocation(this.state.latitude, this.state.longitude)

    }

    getLocation = async (latitude: string, longitude: string) => {
        await window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude })
            }
        )

    }

    getWeather = async () => {
        const API = '9f98155cef5918a4ee62ca995ded3e68'
        const resOulu = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Oulu&appid=${API}&units=metric&lang=fi`)
        const resHelsinki = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Helsinki&appid=${API}&units=metric&lang=fi`)
        this.setState({ Oulu: resOulu.data, Helsinki: resHelsinki.data })
        const time = (new Date())
        console.log(time)
        this.getCurrent()
        this.timeout()

    }

    timeout() {
        setTimeout(this.getWeather, 600000);
    }

    getCurrent = async () => {
        if (this.state.latitude) {
            const API = '9f98155cef5918a4ee62ca995ded3e68'
            const lat = this.state.latitude
            const lon = this.state.longitude
            const resCurrent = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric&lang=fi`)
            this.setState({ Current: resCurrent.data })
        }
        else { return }

    }

    render() {

        return (
            <WeatherContext.Provider value={{ ...this.state, getCurrent: this.getCurrent }}>
                {this.props.children}
            </WeatherContext.Provider>
        )
    }

}

export default WeatherContextProvider;