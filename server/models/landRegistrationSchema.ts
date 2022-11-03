import mongoose from "mongoose";

const landRegistrationSchema = new mongoose.Schema({

    landOwner: {
        type: String,
        required: true
    },
    landLocation: {
        type: String,
        required: true
    },
    gpsCoordinate: {
        type: String
    },
    isSellable: {
        type: Boolean,
        default: false
    },
    isConfiscated: {
        type: Boolean,
        default: false
    },
    onAuction: {
        type: Boolean,
        default: false
    },
    landDescription: {
        type: String,
        default: true
    }
})

export default mongoose.models.landRegistration || mongoose.model("landRegistration", landRegistrationSchema);