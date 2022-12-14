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
import champions from "../../../assets/img/champions.png"
import Logo from "../../../assets/img/Logo.png"
import "./CardChampions.css";

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

export default function CardChampions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <h1 className='titleCardsNews'>Ultimas noticias</h1>
      <div className='titleSection'>
        <img className='iconChampions' src={champions} />
        <h3 className='sectionChampions'>Champions League</h3>
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
            title="La Champions League m??s cara!"
            subheader="5 de Agosto de 2022"
          />
          <CardMedia
            component="img"
            height="260"
            image="https://img.asmedia.epimg.net/resizer/ARf9txUYhzgyWhxnn-PwiBawrz0=/736x414/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/U2GF23DXQJYOPXRYBBZRQZU264.jpg"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="black">
              El mercado de pases europeo present?? ya el traspaso de incre??bles figuras
              a nivel mundial y en esta ocasi??n podr??s ver a los 5 fichajes m??s caros hasta el momento
              Haaland, Lewandowski, Kound??, Darwin, Tchouameni....
              los grandes del viejo continente se refuerzan con fichajes millonarios
              en la lucha por conquistar la pr??xima Champions.
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
            title=" Habra VAR en la tercera ronda"
            subheader="29 de Julio de 2022"
          />
          <CardMedia
            component="img"
            height="260"
            image="https://editorial.uefa.com/resources/0277-15bd55398d5c-e3c572704173-1000/format/wide1/uefa_champions_league_2022_23_preliminary_round_draw.jpeg?imwidth=2048"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="black">
              El ??rbitro asistente de v??deo (VAR) se utilizar?? en los pr??ximos partidos de la tercera ronda de clasificaci??n de la UEFA Champions League, siendo la primera vez que se implementa esta tecnolog??a en una fase no centralizada de una competici??n de la UEFA.
              La UEFA trabaja estrechamente con los clubes y los respectivos operadores al cargo de la producci??n televisiva para ofrecer la configuraci??n del VAR. Cada equipo de ??rbitros asistentes de v??deo designado estar?? tambi??n en la sede en una sala de operaciones de v??deo espec??fica.
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
        <Card sx={{ maxWidth: 370, maxHeight: 800 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                <img src={Logo} className="logocard" />
              </Avatar>
            }
            title="La Champions League tiene nuevo formato"
            subheader="10 de Mayo de 2022"
          />
          <CardMedia
            component="img"
            height="260"
            image="https://tn.com.ar/resizer/gGv7AVSBbG867WMrEd2DeVXinxc=/1440x0/smart/cloudfront-us-east-1.images.arcpublishing.com/artear/DUZBIHF2OJDYVJU6CWMEXUN53Y.jpg"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="black">
              La reforma implica que el certamen contar?? con 36 equipos participantes, en lugar de los 32 que compiten actualmente. La primera fase ser?? un minicampeonato -una suerte de ???liga??? con todos los clubes- en el que cada participante disputar?? ocho partidos (hoy son seis) contra 8 rivales diferentes, cuatro de local y cuatro de visitante. A??n no se inform?? c??mo se definir??n los cruces.
              Habr?? una ??nica tabla de posiciones. Los ochos primeros equipos al t??rmino de la primera fase se clasificar??n a octavos de final, mientras que los que ocupen los puestos del 9 al 24 pasar??n por un repechaje con el formato de eliminatoria con partidos de ida y vuelta.
            </Typography>
          </CardContent>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </Card>
        {/* THIRD CARD */}
        {/* CUARTA CARTA */}
        <Card sx={{ maxWidth: 370, maxHeight: 800 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                <img src={Logo} className="logocard" />
              </Avatar>
            }
            title="Fuera de juego semiautomatico"
            subheader="4 de Agosto de 2022"
          />
          <CardMedia
            component="img"
            height="260"
            image="https://www.filo.news/__export/1659633730874/sites/claro/img/2022/08/04/var_1.jpg_1956802537.jpg"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="black">
              a UEFA anunci?? que el fuera de juego semiautom??tico se utilizar?? el 10 de agosto en la Supercopa y en la fase de grupos de la Champions League. De esta manera, servir?? como una prueba para lo que ser?? el Mundial de Qatar 2022, en el cual se busca implementar esta tecnolog??a.
              En ese sentido, el partido entre Real Madrid y Eintracht Frankfurt, campeones de Europa, marcar?? el debut de esta herramienta tecnol??gica destinada a acelerar y fiabilizar las decisiones arbitrales.
              La tecnolog??a, seg??n NA, permite establecer en todo momento la posici??n de los jugadores y del bal??n, facilitando la detenci??n de las jugadas en fuera de juego, sin reemplazar la apreciaci??n de los ??rbitros.
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