const { category } = require('../models');

module.exports = {
    create: async (req, res, next) => {
        try {
            const data = await category.create({
                data: {
                    name: req.body.name,
                    isActive: req.body.is_active
                }
            })

            return res.status(201).json({
                data
            })

        } catch (error) {
            next(error)
        }
    },

    getCategory: async (req, res) => {
        try {
            const data = await category.findMany()

            return res.status(200).json({
                data
            })

        } catch (error) {
            return res.status(500).json({
                error
            })
        }
    },

    update: async (req, res, next) => {
        try {
            const data = await category.update({
                where: {
                    id: parseInt(req.params.id)
                },
                data: {
                    name: req.body.name,
                    isActive: req.body.is_active
                }
            })

            return res.status(200).json({
                data
            })

        } catch (error) {
            next(error)
        }
    },

    get: async (req, res, next) => {
        try {

            const data = await category.findUnique({
                where: {
                    id: parseInt(req.params.id)
                }
            })

            return res.status(200).json({
                data
            })
            
        } catch (error) {
            next(error)
        }
    },

    destroy: async (req, res, next) => {
        try {

            const data = await category.delete({
                where: {
                    id: parseInt(req.params.id)
                }
            })

            return res.status(204).json()
            
        } catch (error) {
            next(error)
        }
    }
}