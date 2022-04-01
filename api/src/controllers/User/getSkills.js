const axios = require('axios')

const getSkills = async (req, res) => {
    const {user} = req.query

    try {
        let response = await axios.get(`https://bio.torre.co/api/bios/${user}`)
        res.json({
            status: 'OK',
            strengths: response.data.strengths
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 'error',
            message: 'There was an error during the request'
        })
    }
}

module.exports = getSkills