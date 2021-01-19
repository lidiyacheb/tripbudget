import React, { useState, useEffect } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';

// import { GoogleLogin } from 'react-google-login';
import BottomNav from './BottomNav';
import Header from './Header';
import Main from './Main';
import SearchResult from './SearchResult';
import Favorites from './Favorites';
import Chart from './Chart';

// const responseGoogle = (response) => {
//     console.log(response);
// };

const App = () => {
    const [city, setCity] = useState('');
    const [place, setPlace] = useState([]);
    const url = 'https://api.foursquare.com/v2/venues/search?near=';
    const url2 =
        '&query=art&limit=10&client_id=MZO1E0505RYUUT1PIVIJAFFNWFNG124D4DUBFKX2TOM4I2ET&client_secret=5YHRS3XALKL12RMB2Y5HGDI0Z45EUQALO3DCZLNTWKEYI4EV&v=20210118';

    // const [loading, setLoading] = useState(false);
    // const [query, setQuery] = useState('');

    const fetchPlaces = () => {
        fetch(`${url}${city || ''}${url2}`)
            .then((response) => response.json())
            .then((response) => {
                setPlace(response.response.venues);
                console.log(response.response.venues);
                setCity(response.response.city);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchPlaces();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchPlaces();
    };

    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route path="/search">
                    <SearchResult
                        place={place}
                        value={city}
                        handleSubmit={handleSubmit}
                        handleChange={(e) => setCity(e.target.value)}
                    />
                </Route>
                <Route path="/favorites">
                    <Favorites />
                </Route>
                <Route path="/chart">
                    <Chart />
                </Route>
            </Switch>
            <div class="footer">
                <BottomNav />
            </div>
        </>
    );
};
export default App;
{
    /* <GoogleLogin
                clientId="475441533805-bmvjovs9p4rrb6dmnbtjoef3gajdpdb7.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            Hello!!! */
}
