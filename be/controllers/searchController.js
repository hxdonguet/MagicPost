const Package = require('../models/Package')

const search = async (req,res) => {
    try {
        const package = await Package.findById(req.body.id)
        res.status(200).json([package])
    } catch (error) {
        res.status(500).json("search failed")
    }
}

module.exports = {search}