import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AccessTime } from "@mui/icons-material";
import Rating from "@mui/material/Rating";

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmPgAeEfqHAjb_SWcGcz0UCDU9TkYaKLWT_Hoaz8jujQ&s"
          alt=""
          className="img"
        />
        <Box px={1}>
          <Typography variant="subtitle2" component="h2">
            Immerse into the falls
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            marginTop={3}
          >
            <AccessTime sx={{ width: 12.5 }} />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              5 hours
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Rating name="read-only" value={4.5} precision={.5} size="small" readOnly/>
            <Typography variant="body2" component="p" marginLeft={0.5}>
              4.5
            </Typography>
            <Typography variant="body3" component="p" marginLeft={1.5}>
              (655 reviews)
            </Typography>
          </Box>
          <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          marginTop={1}
          >
            <Typography variant="h6" component="h3" marginLeft={0.5} marginTop={0}>
              From C $465
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;
