//
//
//
let cfApp = {
    appName: "MEVN-template",
    appVersion: "0.0.1",
    port: 5152,
    baseURL : "http://localhost",

    // mongodb setting
    dburl : 'mongodb://127.0.0.1:27017/',
    dbname : 'MEVN-template',

    // secret_key for JWT (JSONWebToken)
    secret_str : "this_auth_token",
    refresh_token_time:  2 * 60 // 2 minutes
}
cfApp.publicURL = cfApp.baseURL + ':' + cfApp.port.toString()
cfApp.apiURL = cfApp.publicURL + '/api'

module.exports = cfApp
