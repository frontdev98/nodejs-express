const useragent = require('useragent');
const ipparse = require('ip-parse');
const pool = require('../db');

function remeberHost(req, res, next) {
    const headers = req.headers;
    const now = new Date();
    const agent = useragent.parse(req.headers['user-agent']);

    console.log("*************************************")
    console.log("Agent:   " + agent.toAgent());
    console.log("Device:  " + agent.device.toString())
    console.log("OS:      " + agent.os.toString())
    console.log("IP:      " + ipparse.parseIp(req.ip).at(-1))
    console.log("Date:    " + now);
    console.log("*************************************")

    next();
}

module.exports = remeberHost