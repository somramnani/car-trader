const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

async function openDB() {
  return open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });
}

async function setup() {
  const db = await openDB();
  await db.migrate({ force: "last" });

  const faq = await db.all("SELECT * FROM FAQ ORDER BY createDate DESC");
  console.log("ALL faq", JSON.stringify(faq, null, 2));

  const car = await db.all("SELECT * FROM Car");
  console.log("ALL Cars", JSON.stringify(car, null, 2));
}

setup();
