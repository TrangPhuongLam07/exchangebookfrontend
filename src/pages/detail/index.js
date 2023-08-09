import { Button, Grid, ImageList, ImageListItem, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";
import axios from "axios";
import "~/pages/detail/detailPage.css";
import LoginRequire from "~/components/loginRequire";
import SharedStateService, {
  useShareState,
} from "~/services/SharedStateService";
import BtnDetail from "~/components/buttons/btn-detail";
import PointRequire from "~/components/pointRequire";
import PointStateService from "~/services/PointStateService";
import ComposeStateService from "~/services/ComposeStateService";
import ComposeBox from "~/components/composeBox";
import { postService } from "~/services";
import { useQuery } from "@tanstack/react-query";

const DetailPage = (props) => {
  //Lấy dữ liệu bài đăng bằng id
  const { data, isLoading, isSuccess } = useQuery(["posts"], async () =>
    postService.getOne(1)
  );

  //Hiển thị ảnh to
  const [imageDisplay, setImageDisplay] = useState("");
  //Hiển thị viền ảnh được chọn
  const [selectedImage, setSelectedImage] = useState(0);

  // document.getElementById("image0").click();
  const handleDisplayImage = (src) => {
    setImageDisplay(src);
  };
  const handleSelectImage = (index) => {
    setSelectedImage(index);
  };
  const handleImage = (src, index) => {
    handleDisplayImage(src);
    handleSelectImage(index);
  };
  console.log(document.getElementById("image0"));

  const updateStateBasedOnConditions = () => {
    // Example: Update the state after 3 seconds
    setTimeout(() => {
      try {
        document.getElementById("image0").click();
      } catch (Error) {
        console.log(Error);
      }
    }, 1000);
  };

  // Use useEffect to trigger the state update
  useEffect(() => {
    updateStateBasedOnConditions();
  }, []);
  if (isLoading) {
    return <h2> Loading...</h2>;
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  if (isSuccess) {
    return (
      <div style={{ padding: 50 }}>
        {console.log("data: " + data.images[0])}
        {console.log("is Loading: " + isLoading)}
        <Box sx={{ flexGrow: 1 }}>
          {/*Left side*/}
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              {/*Ảnh bìa*/}
              <Item>
                <img
                  src={"data:image/jpg;base64," + imageDisplay.data}
                  alt={imageDisplay.title}
                  loading="lazy"
                />
              </Item>
              {/*Ảnh liên quan*/}
              <Item>
                <ImageList
                  sx={{ width: 500, height: 450 }}
                  cols={3}
                  rowHeight={164}
                >
                  {data.images.map((item, index) => (
                    <ImageListItem key={item.img}>
                      <img
                        id={"image" + index}
                        src={"data:image/jpg;base64," + item.data}
                        onClick={() => handleImage(item, index)}
                        className={selectedImage === index ? "selected" : ""}
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
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    p: 1,
                    m: 1,
                    bgcolor: "background.paper",
                    borderRadius: 1,
                  }}
                >
                  <div className={""}>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                  </div>
                  <div>
                    <div>Date Created: {data.dateCreated}</div>
                    <div>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                    </div>
                    <div>State: {data.status}</div>
                  </div>
                  <div>
                  {/*  <SharedStateService>*/}
                     {/* <PointStateService>
                        <ComposeStateService>*/}
                          <div>
                            <BtnDetail />
                            <PointRequire />
                            <LoginRequire />
                            <ComposeBox />
                          </div>
                       {/* </ComposeStateService>
                      </PointStateService>*/}
                   {/* </SharedStateService>*/}
                  </div>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Không tìm thấy</h1>
      </div>
    );
  }
};
export default DetailPage;
