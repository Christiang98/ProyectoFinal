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
import { green, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Logo from "../../../assets/img/Logo.png"
import futbolNacional from "../../../assets/img/futbolNacional.png"
import "./CardLocal.css"


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

export default function CardLocal() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <>
            <div className='titleSection'>
                <img className='iconLocal' src={futbolNacional} />
                <h3 className='sectionLocal'>Futbol local</h3>
            </div>

            <div className='cointainerCardNews'>
                {/* FIRST CARD */}
                <Card sx={{ maxWidth: 370 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                                <img src={Logo} className="logocard" />
                            </Avatar>
                        }
                        title="??Por qu?? Solari festeja los goles asi?"
                        subheader="12 de Agosto de 2022"
                    />
                    <CardMedia
                        component="img"
                        height="260"
                        image="https://images.ole.com.ar/2022/08/13/R4l79w77f_1256x620__1.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="black">
                            Como hizo en m??s de una ocasi??n en Colo-Colo (convirti?? 10 tantos), Solari le dedic?? los gritos de gol a su abuelo materno, Feliciano, de extensa carrera militar. El jugador de 21 a??os lo lleg?? a conocer por poco, ya que falleci?? cuando ??l era muy chico, pero nunca dejaron de contarle cosas. De grande, y ante un Monumental repleto, lo sigue homenajeando.
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
                                piment??n, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
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
                            <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                                <img src={Logo} className="logocard" />
                            </Avatar>
                        }
                        title="Benedetto podria juagar de titular"
                        subheader="3 de Agosto de 2022"
                    />
                    <CardMedia
                        component="img"
                        height="260"
                        image="https://images.ole.com.ar/2022/08/13/lywH8CKCC_1256x620__2.jpg#1660406633757"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Es como si el tiempo se hubiera detenido para Dar??o Benedetto despu??s de lo que vivi?? ante Corinthians y Talleres con la pol??mica arenga, los tres penales fallados y la eliminaci??n de Boca de la Copa Libertadores. Una lesi??n en un tobillo lo tuvo a maltraer y nunca le permiti?? dejar atr??s todo eso dentro de la cancha.
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
                                piment??n, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
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
                            <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                                <img src={Logo} className="logocard" />
                            </Avatar>
                        }
                        title="Adonis Fr??as por su frustrado pase a Boca"
                        subheader="8 de Agosto de 2022"
                    />
                    <CardMedia
                        component="img"
                        height="260"
                        image="https://media.tycsports.com/files/2022/07/25/457003/adonis-frias_862x485.webp"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Tengo mucha bronca, estoy esperando que alguien me d?? una explicaci??n de lo que pas?????, fue la contundente frase que solt?? el zaguero de 24 a??os, que en reiteradas ocasiones ya hab??a dejado en claro que es hincha del conjunto de La Ribera y su deseo es jugar all??.
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
                                piment??n, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
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
                            <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                                <img src={Logo} className="logocard" />
                            </Avatar>
                        }
                        title="Gran victoria del equipo ingles"
                        subheader="13 de Agosto de 2022"
                    />
                    <CardMedia
                        component="img"
                        height="260"
                        image="https://media.tycsports.com/files/2022/08/12/464477/zarate-apunto-a-un-hincha-de-platense_416x234.webp"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        Z??rate, de penal, fue el encargado de poner el 1-1 transitorio de Platense ante Banfield y en vez de festejar, el delantero corri?? directo a buscar a un hincha del Calamar. Pero no qued?? ah??, debido a que despu??s del segundo tanto, que hizo Jorge Ben??tez, volvi?? a dedicarle el tanto al simpatizante.
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
                                piment??n, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
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