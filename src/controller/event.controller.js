let service = require('../services/event.services')

const show = async(req, res, next) => {
  try {
    let result = await service.show(req)
    return res.send(result)
  } catch (error) {
    next(error)
  }
}
const insert = (req, res, next) => {
  try {
    let result = service.insert(req)
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

const update = async (req, res, next) => {
    try {
      let result = await service.update(req.params.id, req)
      return res.send(result)
    } catch (error) {
      next(error)
    }
   }
   
   const delete_status = async (req, res, next) => {
    try {
      let result = await service.delete_status(req.params.id);
      return res.send(result);
    } catch (error) {
      next(error);
  }
}

module.exports = {show, insert, update, delete_status}