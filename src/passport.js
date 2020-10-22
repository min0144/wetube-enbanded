import passport from "passport";
import GitHubStrategy from "passport-github";
import NaverStrategy from "passport-naver";
import User from "./models/User";
import {
  githubLoginCallback,
  naverLoginCallback,
} from "./controllers/userController";
import routes from "./routes";

passport.use(User.createStrategy());

// Naver
passport.use(
  new NaverStrategy(
    {
      clientID: process.env.NAVER_ID,
      clientSecret: process.env.NAVER_SECRET,
      callbackURL: process.env.PRODUCTION
        ? `https://agile-brushlands-55872.herokuapp.com${routes.naverCallback}`
        : `http://localhost:5000${routes.naverCallback}`,
    },
    naverLoginCallback
  )
);

// Github
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: process.env.PRODUCTION
        ? `https://agile-brushlands-55872.herokuapp.com${routes.githubCallback}`
        : `http://localhost:5000${routes.githubCallback}`,
    },
    githubLoginCallback
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
