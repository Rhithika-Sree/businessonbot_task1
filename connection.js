const {Client} = require('pg')

const client = new Client({
    host: "ec2-54-204-56-171.compute-1.amazonaws.com",
    user: "xjcwgqixvmaxip",
    port: 5432,
    password: "1f92a66c9e7d334525fe4f7f4b6e2e105289048b9044c4cb3a3569090d3596fa",
    database: "datfet0269ik1s",
    ssl:{
        rejectUnauthorized: false
    }
})

module.exports = client
