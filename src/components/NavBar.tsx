import React from "react";
import { Link } from 'react-router-dom';
import { WeatherContext } from "../contexts/WeatherContext";

export interface NavBarProps { };

const NavBar: React.FC<NavBarProps> = (props) => {

    return (
        <WeatherContext.Consumer>{(context) => {

            return (
                <div className='nav-outer'>
                    <div className='nav'>

                        <Link to='/Oulu'><div className='nav-element'> Oulu</div> </Link>
                        <Link to='/Helsinki'> <div className='nav-element'>Helsinki </div></Link>
                        <Link to='/' onClick={context.getCurrent}><div className='nav-element'> Nykyinen sijainti </div></Link>
                    </div>
                </div>
            )
        }}

        </WeatherContext.Consumer>
    )

}

export default NavBar;