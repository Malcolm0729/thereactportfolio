import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/catchup.jpeg";
import project2 from "../images/dnd.png";
import project3 from "../images/codequiz.png";
import project4 from "../images/team.png";
import project5 from "../images/password.png";
import project6 from "../images/booksearch.png";

const useStyles = makeStyles((theme) => ({
    mainContainer: {
      background: "#233",
      height: "100%",
    },
    cardContainer: {
      maxWidth: 345,
      margin: "3rem auto",
    },
  }));
  
  const projects = [
    {
      name: "Project 1",
      description: `In this group project we created an application where you can search up TV shows and Movies and add them to a list and keep track of what you want to watch in any order!`,
      image: project1,
    },
    {
      name: "Project 2",
      description: `In this group project my team and I created a Dungeon & Dragons character generator!`,
      image: project2,
    },
    {
      name: "Project 3",
      description: `In this assignment I created a code quiz based off NBA history to test you're basketball knowledge!`,
      image: project3,
    },
    {
      name: "Project 4",
      description: `In this assignment I created I was able to create a team profile generator !`,
      image: project4,
    },
    {
      name: "Project 5",
      description: `In this assignment I created a password generator, it doesnt look the best but it works!`,
      image: project5,
    },
    {
      name: "Project 6",
      description: `in this application I was able to form a book search engine using react js with provided code!`,
      image: project6,
    },
  ];
  
  const Portfolio = () => {
    const classes = useStyles();
    return (
      <Box component="div" className={classes.mainContainer}>
        <Grid container justify="center">
          {/* Projects */}
          {projects.map((project, i) => (
            <Grid item xs={12} sm={8} md={4} key={i}>
              <Card className={classes.cardContainer}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Project 1"
                    height="140"
                    image={project.image}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };
  
  export default Portfolio;
