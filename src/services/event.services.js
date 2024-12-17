const eventRepo = require("../repositories/event.repo")
const dayjs = require("dayjs");

const show = async (req) => {
    let result = await eventRepo.showAll();
    return {hasil : result}
}

const insert = async (req) => {
    let param = {
        nama : req.body.nama,
        tempat_acara : req.body.tempat_acara,
        waktu_mulai : dayjs().format('YYYY-MM-DD HH:mm:ss'),
        waktu_selesai: dayjs().add(1, 'hour').format('YYYY-MM-DD HH:mm:ss')
    }
    let result = await eventRepo.insert(param);
    return {hasil : result}
}

const update = async (id_primary, req) => {
    let param = {
        nama: req.body.nama, 
        tempat_acara: req.body.tempat_acara, 
        waktu_mulai: req.body.waktu_mulai,
        waktu_selesai: req.body.waktu_selesai,
        created_at: req.body.created_at,
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss'), 
    };
    let result = await eventRepo.update(id_primary ,param);
    return { hasil: result };
};

const delete_status = async (id) => {
    let param = {
      status_delete: 1,
    };
    let result = await eventRepo.delete_status(id, param);
    return { hasil: result };
  };
  module.exports = { show, insert, update, delete_status };


module.exports = {show, insert, update, delete_status}