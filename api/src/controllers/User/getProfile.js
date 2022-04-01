const axios = require('axios')

const getProfile = async (req, res) => {
    const {user} = req.query
    try {
        let response = await axios.get(`https://bio.torre.co/api/bios/${user}`)

        let userInfo = {
            headline: response.data.person.professionalHeadline,
            privateId: response.data.person.ggId,
            picture: response.data.person.picture,
            name: response.data.person.name,
            location: response.data.person.location.name,
            publicId: response.data.person.publicId
        }
        res.json({
            status:'OK',
            user: userInfo
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 'error',
            message: "There was a problem during the request"
        })
    }
}

module.exports = getProfile