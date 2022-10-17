import React, { useState, useEffect } from "react";
import MainNavigation from "../components/MainNavigation";
import { Grid } from "@material-ui/core";
import Category from "../components/Categories/Category/Category";
import Utils from "../helper/Utils";

function Home(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    Utils.getApi("/products/getCategories")
      .then((res) => {
        setIsLoading(true);

        // delete later
        // console.log(res.data);

        for (let cat of res.data) {
          setCategories((prevCats) => [
            ...prevCats,
            {
              catName: cat.category_name,
              catImageurl:
                "http://localhost:8080/images/" + cat.category_imageurl,
              catProductCount: cat.category_productcount,
            },
          ]);
        }
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  // Delete later
  useEffect(() => {
    console.log(categories);
  }, [isLoading]);

  // <Grid container justify="center" spacing={4}>
  //       {props.categories.map((category) => (
  //         <Grid item key={props.categories.type} xs={12} sm={6} md={4} lg={3}>
  //           <Category category={category} />
  //         </Grid>
  //       ))}
  //     </Grid>

  return (
    <div>
      <MainNavigation />
      <div>Home Page</div>
      {categories.map((category, index) => {
        return <Category category={category} key={index} />;
      })}
    </div>
  );
}

export default Home;
