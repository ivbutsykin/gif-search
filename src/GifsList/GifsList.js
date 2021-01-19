import GifItem from './GifItem/GifItem';
import Grid from '@material-ui/core/Grid';

function GifsList(props) {
  return (
    <Grid container spacing={2}>
      {props.images.map(obj => (
        <Grid item xs={6} sm={4} md={3} key={obj.id}>
          <GifItem src={obj.url} alt={obj.title} />
        </Grid>
      ))}
    </Grid>
  );
}
export default GifsList;
