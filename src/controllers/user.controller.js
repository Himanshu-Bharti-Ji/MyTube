import { asyncHandeler } from "../utils/asynncHandeler.js";

const registerUser = asyncHandeler( async (req, res) => {
    res.status(200).json({
        message: "Himanshu Bharti"
    })
})


export { registerUser }