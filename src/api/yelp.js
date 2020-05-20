import axios from 'axios'

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer RE0G2vyJmflWYIYDnGt3tJ2cUY2ftJwDQyYNEmWpA3pO8z09JYrYolyPSQQ4IEDsi2KTouhiD6YKn1BYlj1j8CKBGW6F6vRc5wwR5TjDB-pwZuBO5373Dh-IjH_EXnYx"
    }
})