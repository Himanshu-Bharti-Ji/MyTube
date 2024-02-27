const asyncHandeler = (requestHandeler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandeler(req, res, next)).catch((err) => next(err))
    }
}

export { asyncHandeler }


// const asyncHandeler = () => {}
// const asyncHandeler = (func) => {() => {}}
// const asyncHandeler = (func) => () => {}
// const asyncHandeler = (func) => async () => {}


// TRY CATCH WAY

// const asyncHandeler = (fn) => async () => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         // user passing code or 5000
//         res.status(err.code || 5000).json({
//             success: false,
//             message: err.message
//         })
//     }
// }
