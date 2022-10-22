import React, { useState, useEffect } from "react";
import MainNavigation from "../components/MainNavigation";
import { Grid } from "@material-ui/core";
import Category from "../components/Categories/Category";
import Utils from "../helper/Utils";
import { useNavigate } from "react-router-dom";
import { Box, ThemeProvider, createTheme } from '@mui/system';
import { CardMedia } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import AddToWishlistButton from "../components/buttons/AddToWishlistButton";

function ItemDetails(props) {
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
    
  const theme = createTheme({
    palette: {
      background: {
        paper: '#fff',
      },
      text: {
        primary: '#173A5E',
        secondary: '#46505A',
      },
      action: {
        active: '#001E3C',
      },
      success: {
        dark: '#009688',
      },
    },
  });

  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

  return (
    <div>
    <MainNavigation />
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 1500,
        flexGrow: 1,
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 300, height: 300 }}>
            <Img alt="complex" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs={16} >
              <Typography gutterBottom variant="h5" component="div">
                Standard license
              </Typography>
            </Grid>

            <Grid item xs={16} >
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
            </Grid>
            <Grid item xs={16} >
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid>
            <Grid item>
                <AddToWishlistButton/>
            </Grid>
          </Grid>
        
        </Grid>
        
      </Grid>
      
    </Paper>



    </div>
  );
}

export default ItemDetails;

/*
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
          marginLeft: 15,
          marginRight: 15,
          height: 300
        }}
      >
        <CardMedia
            component="img"
            sx={{
            height: 1,
            width: '25%',
            }}
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
        />
      </Box>
    </ThemeProvider>
*/

