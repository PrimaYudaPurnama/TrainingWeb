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

const update = async (id_primary, body) => {
    let param = {
        nama : req.body.nama,
        tempat_acara : req.body.tempat_acara,
        update_at : dayjs().format('YYYY-MM-DD HH:mm:ss'),
    }
    let result = await eventRepo.update(param);
    return {hasil : result}
}


module.exports = {show, insert, update}