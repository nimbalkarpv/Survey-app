const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
    host: "localhost",
    user: "root",
    password: "",
    database: "form1",
};

let addUser = async (input) => {
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();

    let sql =
        "INSERT INTO USER (question1,question2,question3,question4,question5) VALUES (?, ?, ?, ?, ?)";
    await connection.queryAsync(sql, [
        input.a,
        input.b,
        input.c,
        input.d,
        input.e,

    ]);

    await connection.endAsync();
};

let authenticateUser = async (input) => {
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();

    let sql = "SELECT * FROM USER WHERE question1=? AND question2=?";
    const results = await connection.queryAsync(sql, [
        input.a,
        input.b,
    ]);

    await connection.endAsync();

    if (results.length === 0) {
        throw new Error("Invalid Credentials");
    }
};

module.exports = { addUser, authenticateUser };
