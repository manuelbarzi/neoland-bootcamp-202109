const { mongoose, models: { Build } } = require('eb-data')
const { validateId, validatePassword } = require('./helpers/validators')
const { NotFoundError } = require('eb-errors')

function deleteBuild(buildId) {  
    validateId(buildId)
    return Build.findById(buildId)
        .then(build => {
            if (!build) throw new NotFoundError('build not found')
            
                return build.remove(buildId)
                    .then(() => 'Build deleted succesfully')
        })

}

module.exports = deleteBuild