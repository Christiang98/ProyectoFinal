import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./CardLibertadores.css"


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function CardLibertadores() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <>
            <div className='titleSection'>
                <img className='iconLibertadores' src="https://i.pinimg.com/originals/11/2b/65/112b65d08e4b1ea4a44cd3ea7f532b5a.png"/>
                <h3 className='sectionLibertadores'>Libertadores</h3>
            </div>

            <div className='cointainerCardNews'>
                {/* FIRST CARD */}
                <Card sx={{ maxWidth: 370 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3MlVNk4jW-9SjkBc6SPnNUG3S0p5DHF2vMUiag4AkDTphtF9jOWbmYglkiTW2oCw7E3R_xz5UQo82ODsU1r-1EhUwl9oBbreMd99bS_wUvwO1cDtCeUZWYHFY8PwfFgolkSayBwz-hF4zhZiO7gnOOvvn3T2lLcTIcuwGp4aTDlCmgRaGthG2cxCvrw/s633/Al%20Rihla.png' width={"50px"} />
                            </Avatar>
                        }
                        title="La Champions League más cara!"
                        subheader="5 de Agosto de 2022"
                    />
                    <CardMedia
                        component="img"
                        height="250"
                        image="https://img.asmedia.epimg.net/resizer/ARf9txUYhzgyWhxnn-PwiBawrz0=/736x414/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/U2GF23DXQJYOPXRYBBZRQZU264.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="black">
                            Haaland, Lewandowski, Koundé, Darwin, Tchouameni....
                            los grandes de Europa se refuerzan con fichajes millonarios
                            en la lucha por conquistar la próxima Champions.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <AddToHomeScreenIcon />
                        </IconButton>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                aside for 10 minutes.
                            </Typography>
                            <Typography paragraph>
                                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                large plate and set aside, leaving chicken and chorizo in the pan. Add
                                pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                stirring often until thickened and fragrant, about 10 minutes. Add
                                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                            </Typography>
                            <Typography paragraph>
                                Add rice and stir very gently to distribute. Top with artichokes and
                                peppers, and cook without stirring, until most of the liquid is absorbed,
                                15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                mussels, tucking them down into the rice, and cook again without
                                stirring, until mussels have opened and rice is just tender, 5 to 7
                                minutes more. (Discard any mussels that don&apos;t open.)
                            </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
                {/* FIRST CARD */}

                {/* SECOND CARD */}
                <Card sx={{ maxWidth: 370 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3MlVNk4jW-9SjkBc6SPnNUG3S0p5DHF2vMUiag4AkDTphtF9jOWbmYglkiTW2oCw7E3R_xz5UQo82ODsU1r-1EhUwl9oBbreMd99bS_wUvwO1cDtCeUZWYHFY8PwfFgolkSayBwz-hF4zhZiO7gnOOvvn3T2lLcTIcuwGp4aTDlCmgRaGthG2cxCvrw/s633/Al%20Rihla.png' width={"50px"} />
                            </Avatar>
                        }
                        title="Gran victoria del equipo ingles"
                        subheader="3 de Agosto de 2022"
                    />
                    <CardMedia
                        component="img"
                        height="250"
                        image="https://cdn.futbolperuano.com/sdi/2022/07/31/inglaterra-vencio-a-alemania-y-se-corono-por-primera-vez-como-campeona-de-la-eurocopa-femenina-1053040.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Eurocopa Femenina 2022: Inglaterra campeona tras ganarle a Alemania, pero la verdadera victoria es del futbol de mujeres. Inglaterra derrotó este domingo a Alemania 2-1 en una histórica final del la Eurocopa Femenina de fútbol que se jugó en el incónico estadio de Wembley en Londres.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                aside for 10 minutes.
                            </Typography>
                            <Typography paragraph>
                                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                large plate and set aside, leaving chicken and chorizo in the pan. Add
                                pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                stirring often until thickened and fragrant, about 10 minutes. Add
                                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                            </Typography>
                            <Typography paragraph>
                                Add rice and stir very gently to distribute. Top with artichokes and
                                peppers, and cook without stirring, until most of the liquid is absorbed,
                                15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                mussels, tucking them down into the rice, and cook again without
                                stirring, until mussels have opened and rice is just tender, 5 to 7
                                minutes more. (Discard any mussels that don&apos;t open.)
                            </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
                {/* SECOND CARD */}

                {/* THIRD CARD */}
                <Card sx={{ maxWidth: 370 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3MlVNk4jW-9SjkBc6SPnNUG3S0p5DHF2vMUiag4AkDTphtF9jOWbmYglkiTW2oCw7E3R_xz5UQo82ODsU1r-1EhUwl9oBbreMd99bS_wUvwO1cDtCeUZWYHFY8PwfFgolkSayBwz-hF4zhZiO7gnOOvvn3T2lLcTIcuwGp4aTDlCmgRaGthG2cxCvrw/s633/Al%20Rihla.png' width={"50px"} />
                            </Avatar>
                        }
                        title="Gran victoria del equipo ingles"
                        subheader="3 de Agosto de 2022"
                    />
                    <CardMedia
                        component="img"
                        height="250"
                        image="https://cdn.futbolperuano.com/sdi/2022/07/31/inglaterra-vencio-a-alemania-y-se-corono-por-primera-vez-como-campeona-de-la-eurocopa-femenina-1053040.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Eurocopa Femenina 2022: Inglaterra campeona tras ganarle a Alemania, pero la verdadera victoria es del futbol de mujeres. Inglaterra derrotó este domingo a Alemania 2-1 en una histórica final del la Eurocopa Femenina de fútbol que se jugó en el incónico estadio de Wembley en Londres.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                aside for 10 minutes.
                            </Typography>
                            <Typography paragraph>
                                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                large plate and set aside, leaving chicken and chorizo in the pan. Add
                                pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                stirring often until thickened and fragrant, about 10 minutes. Add
                                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                            </Typography>
                            <Typography paragraph>
                                Add rice and stir very gently to distribute. Top with artichokes and
                                peppers, and cook without stirring, until most of the liquid is absorbed,
                                15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                mussels, tucking them down into the rice, and cook again without
                                stirring, until mussels have opened and rice is just tender, 5 to 7
                                minutes more. (Discard any mussels that don&apos;t open.)
                            </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
                {/* THIRD CARD */}
                {/* CUARTA CARTA */}
                <Card sx={{ maxWidth: 370 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3MlVNk4jW-9SjkBc6SPnNUG3S0p5DHF2vMUiag4AkDTphtF9jOWbmYglkiTW2oCw7E3R_xz5UQo82ODsU1r-1EhUwl9oBbreMd99bS_wUvwO1cDtCeUZWYHFY8PwfFgolkSayBwz-hF4zhZiO7gnOOvvn3T2lLcTIcuwGp4aTDlCmgRaGthG2cxCvrw/s633/Al%20Rihla.png' width={"50px"} />
                            </Avatar>
                        }
                        title="Gran victoria del equipo ingles"
                        subheader="3 de Agosto de 2022"
                    />
                    <CardMedia
                        component="img"
                        height="250"
                        image="https://cdn.futbolperuano.com/sdi/2022/07/31/inglaterra-vencio-a-alemania-y-se-corono-por-primera-vez-como-campeona-de-la-eurocopa-femenina-1053040.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Eurocopa Femenina 2022: Inglaterra campeona tras ganarle a Alemania, pero la verdadera victoria es del futbol de mujeres. Inglaterra derrotó este domingo a Alemania 2-1 en una histórica final del la Eurocopa Femenina de fútbol que se jugó en el incónico estadio de Wembley en Londres.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                aside for 10 minutes.
                            </Typography>
                            <Typography paragraph>
                                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                large plate and set aside, leaving chicken and chorizo in the pan. Add
                                pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                stirring often until thickened and fragrant, about 10 minutes. Add
                                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                            </Typography>
                            <Typography paragraph>
                                Add rice and stir very gently to distribute. Top with artichokes and
                                peppers, and cook without stirring, until most of the liquid is absorbed,
                                15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                mussels, tucking them down into the rice, and cook again without
                                stirring, until mussels have opened and rice is just tender, 5 to 7
                                minutes more. (Discard any mussels that don&apos;t open.)
                            </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
                {/* CUARTA CARTA */}
            </div>


        </>
    );
}