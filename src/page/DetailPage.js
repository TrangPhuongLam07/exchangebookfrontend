import {Button, Grid, ImageList, ImageListItem, Paper} from "@mui/material";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import {useEffect, useState} from "react";
import axios from "axios";

export default function DetailPage(props) {
    const [bookData, setBookData] = useState({});
    const [imageData, setImageData] = useState([]);
    const [imageDisplay, setImageDisplay] = useState('');
     axios.get('http://localhost:8080/book/get/' + props.id).then(res => {
        /*console.log(res.data)*/
        setBookData(res.data)
        setImageData(res.data.productImagesUrl)
        setImageDisplay(res.data.productImagesUrl[0])
    }) .catch(error => {
         // Xử lý lỗi
         console.error(error);
     });
    const handleDisplayImage =(src)=>{
        setImageDisplay(src);

    }
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
        },
    ];

    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <div style={{padding: 50}}>

            <Box sx={{flexGrow: 1}}>
                {/*Left side*/}
                <Grid container spacing={2}>
                    <Grid item xs={6} md={8}>
                        {/*Ảnh bìa*/}
                        <Item>
                            {/* <img
                                src={'http://localhost:8080/' + imageDisplay}
                                alt={bookData.name}
                                loading="lazy"
                            />*/}

                            <img
                                src={`${imageDisplay.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${imageDisplay.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={imageDisplay.title}
                                loading="lazy"
                            />
                        </Item>
                        {/*Ảnh liên quan*/}
                        <Item>
                           {/* <ImageList sx={{width: 500, height: 164}} cols={3} rowHeight={164}>
                                {imageData.map((item, index) => (
                                    <ImageListItem key={index}>
                                        <img
                                            src={'http://localhost:8080/' + item}
                                            alt={bookData.name}
                                            loading="lazy"
                                            onClick={handleDisplayImage(item)}
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>*/}

                            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                                {itemData.map((item) => (
                                    <ImageListItem key={item.img}>
                                        <img
                                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.title}
                                            loading="lazy"
                                            onClick={()=>handleDisplayImage(item)}
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Item>
                    </Grid>

                    {/*Right side*/}
                    <Grid item xs={6} md={4}>
                        <Item>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    flexDirection: 'column',
                                    p: 1,
                                    m: 1,
                                    bgcolor: 'background.paper',
                                    borderRadius: 1,
                                }}
                            >
                                <div className={''}>
                                    <h1>{bookData.name}</h1>
                                    <p>{bookData.author}</p>
                                </div>
                                <div>
                                    <div>Date Created: {bookData.createdDate}</div>
                                    <div><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/></div>
                                    <div>State: available hidden</div>
                                </div>
                                <div>
                                    <Button variant="contained">Exchange Book</Button>
                                </div>
                            </Box>

                        </Item>
                    </Grid>

                </Grid>
            </Box>
        </div>
    )
}