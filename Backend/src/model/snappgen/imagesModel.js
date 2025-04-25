import mongoose from 'mongoose'

const imagesSchema = new mongoose.Schema({
    group: {
        type: String,
        required: [true, 'image section is required']
    },
    page: {
        type: String,
        required: [true, 'page for image is required']
    }
}, {strict: false, timestamps: true})

export const imagesModel = mongoose.model('snappgenImages', imagesSchema)