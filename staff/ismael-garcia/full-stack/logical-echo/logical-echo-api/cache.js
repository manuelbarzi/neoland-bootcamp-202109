const cache = (req, res, next) => {
    const { query: { q } } = req
    const { params: { item_id } } = req

    if (item_id) {
        req.redis.get(item_id, (error, result) => {
            if (error) throw error

            if (result !== null) {
                return res.json(JSON.parse(result))
            } else {
                return next()
            }
        })
    } else {
        req.redis.get(q, (error, result) => {
            if (error) throw error

            if (result !== null) {
                return res.json(JSON.parse(result))
            } else {
                return next()
            }
        })
    }
}

module.exports = cache