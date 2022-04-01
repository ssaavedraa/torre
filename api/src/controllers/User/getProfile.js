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
            userInfo
        })
    } catch (error) {
        console.log(error)
        res.status(200).json({
            status: 'error',
            message: "User not found"
        })
    }
}

module.exports = getProfile