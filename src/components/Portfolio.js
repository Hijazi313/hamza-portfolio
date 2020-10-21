import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import {Box, Grid, Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography} from "@material-ui/core"

import project1 from "./../images/nodejs-expressjs-mongodb.jpeg"
import project2 from "./../images/mern-stack.jpg"
import project3 from "./../images/react.png"
import project4 from "./../images/nodejs-expressjs-reactjs-mongodb-graphql.png"
const useStyles = makeStyles((theme)=>({
    mainContainer:{
        background:"#233",
        height:"100%"
    },
    cardContainer:{
        maxWidth:345,
        margin:"3rem",
        margin:"5rem auto"
    }
}))

export default ()=> {
    const classes = useStyles ();
    return (
        <Box component="div" className={classes.mainContainer} >
            <Grid container justify="center" >
                {/* Project 1 */}
            <Grid item xs={12} sm={8} md={6} >
                <Card className={classes.cardContainer} >
                <CardActionArea>
                <CardMedia component="img" alt="Project 1" height="140" image={project1}  style={{objectFit:"contain"}}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" >
                        melog-node-redis-rest-api
                        </Typography>
                        <Typography gutterBottom variant="body2" color="textSecondary" component="p" >
                        A nodejs, expressjs, mongodb and readis based api for bloging websites, Primary objective was to develope a rest API that uses Redis. Authenction is based on json web tokens
                         </Typography>
                        <CardActions>
                            <Button size="small" color="primary"  >
                                <a href="https://github.com/Hijazi313/melog-node-redis-rest-api"  target="_blank" rel="noopener noreferrer">
                                Github
                                </a>
                            </Button>
                        </CardActions>
                    </CardContent>        
                </CardActionArea>
                </Card>
            </Grid>
                {/* Project 2 */}
            <Grid item xs={12} sm={8} md={6} >
                <Card className={classes.cardContainer} >
                <CardActionArea>
                <CardMedia component="img" alt="Project 2" height="140" image={project2} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" >
                            MERN Bloging web application
                        </Typography>
                        <Typography gutterBottom variant="body2" color="textSecondary" component="p" >
                            A MERN Bloging web application which uses redux and redux-thunk as a state management system. Performs some basic to Advanced CRUD functions and authentication using json web tokens 
                        </Typography>
                        <CardActions>
                        <Button size="small" color="primary"  >
                                <a href="https://github.com/Hijazi313/melog-node-redis-rest-api"  target="_blank" rel="noopener noreferrer">
                                Github
                                </a>
                            </Button>
                        </CardActions>
                    </CardContent>        
                </CardActionArea>
                </Card>
            </Grid>
                {/* Project 3 */}
            <Grid item xs={12} sm={8} md={6} >
                <Card className={classes.cardContainer} >
                <CardActionArea>
                <CardMedia component="img" alt="Project 3" height="140" image={project3}  style={{objectFit:"contain"}}  />
                    <CardContent>
                        <Typography gutterBottom variant="h5" >
                            React Markdown Previewer
                        </Typography>
                        <Typography gutterBottom variant="body2" color="textSecondary" component="p" >
                        The purpose of this project is to view the markdown text result. it will take text as input in one side and show results as you make changes to the input field on the other side adjacent to input field.
                        </Typography>
                        <CardActions>
                        <Button size="small" color="primary"  >
                                <a href="https://github.com/Hijazi313/melog-node-redis-rest-api"  target="_blank" rel="noopener noreferrer">
                                Github
                                </a>
                            </Button>
                        </CardActions>
                    </CardContent>        
                </CardActionArea>
                </Card>
            </Grid>
                {/* Project 4 */}
            <Grid item xs={12} sm={8} md={6} >
                <Card className={classes.cardContainer} >
                <CardActionArea>
                <CardMedia component="img" alt="Project 4" height="140" image={project4} style={{objectFit:"contain"}} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" >
                            Full Stack Graphql Bloging web application
                        </Typography>
                        <Typography gutterBottom variant="body2" color="textSecondary" component="p" >
                            A FUll Stack GraphQL Bloging application built on top of modern tech stack and best practices. It uses Btoh apollo client and  apollo-server  to make a full stack graphql web application  
                        </Typography>
                        <CardActions>
                        <Button size="small" color="primary"  >
                                <a href="https://github.com/Hijazi313/apollo-graphql-blog-app" target="_blank" rel="noopener noreferrer" >
                                Github
                                </a>
                            </Button>
                        </CardActions>
                    </CardContent>        
                </CardActionArea>
                </Card>
            </Grid>
            </Grid>
            
        </Box>
    )
}
