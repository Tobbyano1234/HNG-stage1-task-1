const { successResponse, serverError } = require("../utils/helpMethods");
const httpStatus = require("http-status");

const getDetails = async (req, res, next) => {
  try {
    const record = {
      slackUsername: "Tobbyano1234",
      backend: true,
      age: 32,
      bio: "I am  full-stack software  engineer and a graduate of Computer Science from Olabisi Onabanjo University. I have 4 years experience as an administrative and IT professional in the transportation and logistics sector. The lapses I noticed in the sector, arose my curiosity which gave rise my interest in  incorporating technology to bridge the gap in this sector. I am a result-driven and goal-oriented software developer with a good track record of meeting project deadlines and an excellent team player. I possess the scrum methodology. I have created server-side JavaScript applications with the help of Node.js on JavaScript runtime. The  Airtime2cash project  solves airtime issues as a users  can exchange their  surplus airtime for money and also  perform bank transactions. The technologies used for the Development and Deployment of this project are NodeJs, Express, Typescript, React, SCSS, Docker, CI/CD, and Heroku. I also worked with a team in building a logistic app called Kordin8 Logistic app: This app aims at  delivering service to commute goods from one location to another, The possibilities of the user stories are endless proving a good user experience for both customers and agents. ",
    };
    return successResponse(
      res,
      "Details fetched successfully",
      httpStatus.OK,
      record
    );
  } catch (error) {
    console.log(error);
    serverError(res);
  }
};

module.exports = {
  getDetails,
};
