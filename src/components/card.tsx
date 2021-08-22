import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Location} from '../types'

type Props = {
    content : Location
}


export default function OutlinedCard(props:Props) {

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h4">
          {props.content.properties.address}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant={'outlined'}>
            <a href={props.content.properties.url}></a>
            Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
