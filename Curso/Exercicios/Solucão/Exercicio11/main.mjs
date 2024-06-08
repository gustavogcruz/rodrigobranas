import { Database } from "./database.mjs";

const database = new Database();
database.execute("create table author (id number, name string, age number, city string, state string, country string)")
    .then(function () {
        return Promise.all([
            database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)"),
            database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)"),
            database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)")
        ])
            .then(function () {
                return database.execute("select id, name, age from author")
                    .then(function (result) {
                        console.log(JSON.stringify(result, undefined, "  "));
                    });

            });

    }).catch(function (e) {
        console.log(e.message);
    });

// database.execute("delete from author where id = 1");
// console.log(JSON.stringify(database.execute("select id, name, age from author"), undefined, " "));

