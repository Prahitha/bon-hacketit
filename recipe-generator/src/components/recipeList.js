import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      background: '#bbdefb',
    },
  });

const RecipeList = ({recipes}) => {
    const classes = useStyles();

	return(
		<div style={{margin: '10%', display: 'grid', gridRowGap: '100px',gridTemplateColumns: '35% 35% 35%', gridTemplateRows: 'repeat(auto-fill, 200px)', alignItems: 'center',}}>
			{
				recipes.map((item) => {
                    var missing = item.missedIngredients;
                    // var recipeImage = `https://spoonacular.com/recipeImages/${item.id}-345x140.${item.imageType}`;
					return(
						<div>
                            <Link style={{textDecoration: 'none',}} to='/nutritionBreakdown'>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    alt={item.title}
                                    height="140"
                                    image={item.image}
                                    title={item.title}
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="textPrimary" component="p">
                                        Additional ingredients:
                                    </Typography>
                                    {missing.map((missedIngredients) => {
                                    return(
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {missedIngredients.original}
                                        </Typography>
                                    )
                                })}
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            </Link>
                        </div>
					);
				}
			)}
        </div>
		);

}

export default RecipeList;