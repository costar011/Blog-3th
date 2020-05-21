import express from "express";

const PORT = 3000;
const app = express();

app.set("view engine", "pug");
/**
 *
 * res.render() 함수를 사용하면
 * 1. 자동으로 확장자에 .pug 를 붙인다.
 * 2. views 폴더 안에서 탐색한다.
 *
 */

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/test", (req, res) => {
  res.render("test");
});

app.listen(PORT, () => {
  console.log(`${PORT} Server Start`);
});
