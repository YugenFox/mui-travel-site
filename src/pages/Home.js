import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SearchAppBar from "../components/AppBar";
import TourCard from "../components/TourCard";
import cities from "../data.json";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <>
    <SearchAppBar />
      <Container sx={{ marginY: 5 }}>
        {cities.map((city, index) => (
          <>
            <Typography
              key={index}
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={5}>
              {city.tours.map((tour, index) => (
                <TourCard 
                key={index}
                tour= {tour}
                />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </>
  )
}
export default Home