// import chalk from 'chalk'
import path from 'path'

import encryption from '../controllers/encryption'
import eVars from './environment.js'

module.exports = { // connection object for sqlite database
    dialect: 'sqlite',
    storage: path.join(__dirname, `../${eVars.SYS_REF}.db`), // path to database file
    // timezone: eVars.TIMEZONE, // unsupported by SQLite
    // control if database operations are output with verbose messages
    logging: eVars.SEQUELIZE_VERBOSE ? (textString) => { console.log(require('chalk').red(textString)) } : false,
    define: {
        underscored: false,
        freezeTableName: true,
        timestamps: true,
        paranoid: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: 'deletedAt'
    },
    // custom settings
    resetDatabase: eVars.RESET_DB, // do not reset
    defaultRecords: () => { // provide default entries to be written into database
        return [
            seriesDefaultData(),
            usersDefaultData(),
            countriesDefaultData(),
            officeLocationsData()
        ]
    }
}

function seriesDefaultData() {
    return {
        modelName: 'Series',
        records: [{
            reference: 'Crutches',
            displaySequence: 0
        }, {
            reference: 'Canes',
            displaySequence: 1
        }, {
            reference: 'Forearm Crutches',
            displaySequence: 2
        }, {
            reference: 'Quad Canes',
            displaySequence: 3
        }, {
            reference: 'Bath Seats',
            displaySequence: 4
        }, {
            reference: 'Walkers',
            displaySequence: 5
        }, {
            reference: 'Commode Chairs',
            displaySequence: 6
        }, {
            reference: 'Bathroom Safety',
            displaySequence: 7
        }, {
            reference: 'Patient-Aids',
            displaySequence: 8
        }, {
            reference: 'Rollators',
            displaySequence: 9
        }, {
            reference: 'Accessories',
            displaySequence: 10
        }]
    }
}

function usersDefaultData() {
    let users = {
        modelName: 'Users',
        records: [{
            email: 'gentry88@ms46.hinet.net',
            name: 'General Service',
            officeLocationId: 1,
            loginId: 'gentryWay',
            password: null,
            salt: null
        }, {
            email: 'david.tsai@gentry-way.com.tw',
            name: 'David Tsai',
            officeLocationId: 1,
            loginId: 'david',
            password: 'cuccet882',
            salt: null
        }, {
            email: 'cathy.liu@gentry-way.com.tw',
            name: 'Cathy Liu',
            officeLocationId: 1,
            loginId: 'cathy',
            password: null,
            salt: null
        }, {
            email: 'candy.wu@gentry-way.com.tw',
            name: 'Candy Wu',
            officeLocationId: 1,
            loginId: 'candy',
            password: null,
            salt: null
        }, {
            email: 'gentry@vip.163.com',
            name: 'General Service',
            officeLocationId: 2,
            loginId: 'gentryHardware',
            password: null,
            salt: null
        }, {
            email: 'altecqc@msn.com',
            name: 'Johnson Wu',
            officeLocationId: 2,
            loginId: 'johnson',
            password: null,
            salt: null
        }]
    }
    users.records.forEach((user) => {
        let encryptedPassword =
            encryption.sha512(
                (user.password === null) ? '0000' : user.password,
                encryption.saltGen(16)
            )
        user.password = encryptedPassword.passwordHash
        user.salt = encryptedPassword.salt
    })
    return users
}

function countriesDefaultData() {
    let worldCountries = require('world-countries/dist/countries.json')
    let countries = {
        modelName: 'Countries',
        records: []
    }
    worldCountries.forEach((worldCountry) => {
        countries.records.push({
            id: worldCountry.cca3,
            name: worldCountry.name.common,
            region: worldCountry.region === '' ? 'Other' : worldCountry.region
        })
    })
    return countries
}

function officeLocationsData() {
    return {
        modelName: 'OfficeLocations',
        records: [{
            title: 'Gentry Way Co., Ltd.',
            address: 'No. 152, Wufu Road, Yanshui District, Tainan City, 737',
            countryId: 'TWN',
            telephone: '+886-(0)6-6529052',
            fax: '+886-(0)6-6527093',
            website: `${eVars.HOST}/${eVars.SYS_REF}`
        }, {
            title: 'Gentry Hardware Products Co., Ltd.',
            address: 'No. 158, Dongcheng Rd., Dongsheng Town, Zhongshan, Guangdong, China',
            countryId: 'CHN',
            telephone: '+86-760-22229026 ~ 28',
            fax: '+86-760-22820916',
            website: `${eVars.HOST}/${eVars.SYS_REF}`
        }]
    }
}
