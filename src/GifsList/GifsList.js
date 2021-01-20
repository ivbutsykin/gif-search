// import React from 'react';
// import Grid from '@material-ui/core/Grid';
// import GifItem from './GifItem/GifItem';
// import Button from '@material-ui/core/Button';
// import PaginationControlled from '../PaginationControlled/PaginationControlled';

// class GifsList extends React.Component {
//   state = this.props.filters;

//   handleClick = e => {
//     this.setState(
//       {
//         type: this.props.filters.type,
//         request: this.props.filters.request,
//         number: '12',
//         offset: this.props.images.length,
//         more: true,
//       },
//       () => this.props.onFiltersChange(this.state)
//     );
//   };

//   render() {
//     return (
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Grid container spacing={2}>
//             {this.props.images.map(obj => (
//               <Grid item xs={6} sm={4} md={3} key={obj.id}>
//                 <GifItem src={obj.url} alt={obj.title} />
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>
//         <Grid item xs={12}>
//           <Grid container justify="center">
//             <Grid item>
//               <Button
//                 variant="outlined"
//                 color="primary"
//                 onClick={this.handleClick}
//               >
//                 Show more
//               </Button>
//             </Grid>
//           </Grid>
//         </Grid>
//         <Grid item xs={12}>
//           <Grid container justify="center">
//             <Grid item>
//               <PaginationControlled/>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//     );
//   }
// }
// export default GifsList;
