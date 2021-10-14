const express = require("express");
const router = new express.Router();
const movieModel = require("./../models/movie.model")

/* GET home page */

//const config = require("./../config/index");

const homeController = (req, res, next) => {
  res.render("index.hbs", {});
};

const movieController = ((req, res, next) => {
  // avec le model
  // fetch tous les documents movie
  // donne les à la view
  // dans la view {{#each}}
   const movies = movieModel.find()
    .then((movies) => res.render("movies.hbs", {movies})
    .catch((err) => res.send("error"))

)});

const oneMovieController = async (req, res) => {
    const movie = await movieModel.findById(req.params.id);
    res.render("movieDetails.hbs", { movie });
};


router.get("/", homeController);
router.get("/movies", movieController);
router.get("/movies/:id", oneMovieController)
// router.get("/all-cats/:id", oneCatController);
module.exports = router;
