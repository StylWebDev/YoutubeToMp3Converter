//importing required modules
const httpStatus = require("http-status");
const fetch = require('node-fetch')

const dotenv = require('dotenv')
dotenv.config()

//creating and exporting postController
module.exports = (req, res) => {
    const videoURL = req.body.videoURL
    if (typeof videoURL === "string" && videoURL.includes("youtube") && videoURL.trim() !== "") {
        const videoId = videoURL.trim().slice(-11)
        fetch(`https://youtube-mp36.p.rapidapi.com/dl?id=${videoId}`, {
            method: "GET",
            headers: {
                'x-rapidapi-key': process.env.API_KEY,
                'x-rapidapi-host': process.env.API_HOST
            }
        }).then ( async (response) => {
                const data = await response.json();
                if (data.status === 'ok') {
                    console.log(data)
                    res.status(httpStatus.OK).render('home', {error: false, convert:true, data})
                }
                else {
                    res.status(httpStatus.BAD_REQUEST).render('home', {error: true, convert:true, msg: `Please provide a valid YouTube video URL`})
                }
            }
        ).catch (
            () => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).render('home', {error: true, convert:true, msg: `Service unavailable`})
            }
        )
    }
    else {
        res.status(httpStatus.BAD_REQUEST).render('home', {error: true, convert:true, msg: `Please provide a valid YouTube video URL`})
    }
}