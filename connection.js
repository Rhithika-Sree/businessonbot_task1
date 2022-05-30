const {Client} = require('pg')

const client = new Client({
    host: "ec2-44-196-174-238.compute-1.amazonaws.com",
    user: "zdcbncrxibvvvg",
    port: 5432,
    password: "855bde4c53798c19f4ddbbbfb636d5bc4800e047f3bd81141e6e16b1d29d55c4",
    database: "d2gqv6omcd45u2",
    ssl:{
        rejectUnauthorized: false
    }
})

module.exports = client
