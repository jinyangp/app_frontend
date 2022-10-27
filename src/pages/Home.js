import React, { useState, useEffect } from "react";
import MainNavigation from "../components/MainNavigation";
import { Grid } from "@material-ui/core";
import Category from "../components/Categories/Category";
import Utils from "../helper/Utils";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const onClickCatHandler = (catId) => {
    // Redirect to new page with category id as a query parameter
    navigate(`/category/${catId}`, {
      state: {
        catId: catId,
      },
    });
  };

  const getCategories = () => {
    Utils.getApi("/products/getCategories")
      .then((res) => {
        setIsLoading(true);

        for (let cat of res.data) {
          setCategories((prevCats) => [
            ...prevCats,
            {
              catId: cat.category_id,
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

  // return (
  //   <div>
  //     <MainNavigation />
  //     <Grid container justifyContent="center" spacing={4}>
  //       {categories.map((category, index) => {
  //         return <Category category={category} key={index} />;
  //         console.log(categories);
  //       })}
  //     </Grid>
  //   </div>
  // );

  return (
    <div className="default-page-margin">
      <MainNavigation />
      <h2>
        <b>Categories</b>
      </h2>
      <Grid container spacing={3}>
        {categories.map((category, index) => (
          <Grid item key={category.catName} xs={6} lg={4} xl={3}>
            <Category
              onClickCatHandler={() => {
                onClickCatHandler(category.catId);
              }}
              category={category}
              key={index}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Home;
