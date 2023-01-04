const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const urunlerRouter = require("./routes/urunler");
const siparislerRouter = require("./routes/siparisler");
const musterilerRouter = require("./routes/musterilier");
const kategorilerRouter = require("./routes/kategoriler");

const app = express();

const db = require("./helper/db")();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/urunler", urunlerRouter);
app.use("/api/siparisler", siparislerRouter);
app.use("/api/musteriler", musterilerRouter);
app.use("/api/kategoriler", kategorilerRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({error: {message: err.message, code: err.code}});
});

module.exports = app;
