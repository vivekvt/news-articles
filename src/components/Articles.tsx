import { useGetArticles } from "../hooks/getArticles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import CardActionArea from "@mui/material/CardActionArea";
import { Error } from "@mui/icons-material";
import Box from "@mui/material/Box";
import moment from "moment";

export default function Articles() {
  const { articles, error, loading } = useGetArticles();
  return (
    <div>
      <Typography variant="h3" component="h1" sx={{ py: 2 }}>
        News Articles
      </Typography>
      {loading ? (
        <>
          <Stack spacing={5}>
            <Skeleton variant="rounded" height={150} />
            <Skeleton variant="rounded" height={150} />
            <Skeleton variant="rounded" height={150} />
          </Stack>
        </>
      ) : error ? (
        <>
          <Box sx={{ textAlign: "center" }}>
            <Error color="error" fontSize="large" />
          </Box>
          <Typography color="error" variant="h4" textAlign="center">
            Something went wrong while fetching the post, please try refresh the
            page or try after some time
          </Typography>
        </>
      ) : articles && articles?.length > 0 ? (
        <Grid container spacing={2}>
          {articles?.map((article) => (
            <Grid xs={12} sm={6} md={4} item key={article.id}>
              <Card variant="outlined">
                <a href={article.link}>
                  <CardActionArea>
                    <CardMedia
                      sx={{ height: 200 }}
                      image={article.jetpack_featured_media_url}
                      title={article.title.rendered}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: article.title.rendered,
                          }}
                        />
                      </Typography>
                      <Typography color="text.secondary">
                        {moment(article.date).format("lll")}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        style={{
                          overflow: "hidden",
                          maxHeight: 97,
                        }}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: article.excerpt.rendered,
                          }}
                        />
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </CardActionArea>
                </a>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography textAlign="center">No result found</Typography>
      )}
    </div>
  );
}
