import React, { useEffect, useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
} from '@material-ui/core';

const News = () => {
  const [news, setNews] = useState([]);
  const getApi = () => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=63128d32a7354e979bbe04702ed07e98')
      .then((response) => {
        return response.json();
      }).then((data) => {
        console.log(data);
        setNews(data.articles);
      });
  };
  useEffect(() => {
    getApi();
  }, []);
  return (
    <Container maxWidth={false}>
      <Grid
        container
        spacing={3}
      >
        {news?.map((ne) => {
          return (ne.urlToImage ?
            <Grid
                 item
                 lg={3}
                 sm={4}
                 xl={12}
                 xs={12}
               >
                 <Card>
                   <CardContent>
                     <img style={{ height: 150, width: '100%' }} src={ne.urlToImage} alt={ne.title} />
                     <h1>{ne.author}</h1>
                     <p>{ne.content}</p>
                     <p>{ne.description}</p>
                     <span>{ne.publishedAt}</span>
                     <span>{ ne.source.name }</span>
                     <a href={ne.url}>{ ne.title }</a>
                   </CardContent>
                 </Card>
               </Grid>
               : null
          );
        })}
      </Grid>
    </Container>
  );
};

export default News;
