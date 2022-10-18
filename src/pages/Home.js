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

  // Delete later
  useEffect(() => {
    console.log(categories);
  }, [isLoading]);

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
    <div>
      <MainNavigation />
      <Grid container justifyContent="center" spacing={4}>
        {categories.map((category, index) => (
          <Grid item key={category.catName} xs={12} sm={6} md={4} lg={4}>
            <Category
              onClickCatHandler={() => {
                onClickCatHandler(category.catId);
              }}
              category={category}
              key={index}
            />
<<<<<<< HEAD
=======
            ;
>>>>>>> d37dcee150a2c097bda776b890aad41dd1c603b9
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Home;
