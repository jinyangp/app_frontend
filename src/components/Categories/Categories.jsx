import React from "react";
import { Grid } from "@material-ui/core";
import Category from "./Category/Category";

const categories = [
  {
    type: "Electronics",
    Amount: 8,
    description: "Work",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.apple.com%2Fsg%2Fnewsroom%2F2021%2F10%2Fintroducing-the-next-generation-of-airpods%2F&psig=AOvVaw05egO_cODCGSMj2G2Rq8sv&ust=1665825160067000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNiLlLmw3_oCFQAAAAAdAAAAABAF",
  },
  {
    type: "Sports and Outdoors",
    Amount: 8,
    description: "Exercise",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftennishead.net%2Fwilson-clash-100-tennis-racket-review%2F&psig=AOvVaw1jR0eYTMqonn7dD1jr64Df&ust=1665825212375000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNCPjtKw3_oCFQAAAAAdAAAAABAK",
  },
];

const Categories = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {categories.map((category) => (
          <Grid item key={categories.type} xs={12} sm={6} md={4} lg={3}>
            <Category category={category} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Categories;
