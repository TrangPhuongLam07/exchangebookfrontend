import * as React from 'react';
import TextField from '@mui/material/TextField';

import {Button, ImageList, ImageListItem} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {useState} from "react";
import axios from "axios";
import {useFormik} from "formik";

export default function PostBookPage() {
    const [imageData, setImageData] = useState([]);
    const formik = useFormik({
        initialValues: {
            name: '',
            author: '',
            description: '',
            images: '',
        },
        /*validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },*/
    });
    const handleClickImage = () => {
        const fileInput = document.getElementById('file-input');
        fileInput.click();
    };
    const handleUploadImage = (event) => {
        console.log("handleUploadImage")
        const files = event.target.files; // Lấy file đầu tiên từ danh sách file đã chọn

        // Tạo danh sách các URL ảnh từ danh sách file
        let imageList = Array.from(files).map((file) => URL.createObjectURL(file));
        //push list image
        setImageData(imageList);
        formik.setFieldValue('images', files)
    };

    const saveBook = async () => {
        const formData = new FormData();
        formData.append('name', formik.values.name);
        formData.append('author', formik.values.author);
        formData.append('description', formik.values.description);

        for (let i of formik.values.images) {
            formData.append('images', i);
        }
        for (const [key, value] of formData.entries()) {
            console.log(key, value);
        }
        const response =await axios.post('http://localhost:8080/book/add', formData,{
            headers: {
                'Content-Type': 'multipart/form-data'}}).then(() =>{
            console.log("save book")
        } )
        if (response.status === 200) {
            console.log("success save book")
        } else {
            console.log("Thêm sách thất bại")
        }
    };
    return (
        <div className="post-book">
            <form onSubmit={saveBook}>
                <TextField
                    required
                    id="name"
                    name="name"
                    label="Tên sách"
                    defaultValue=""
                    onChange={formik.handleChange}
                    variant="standard"
                />
                <TextField
                    required
                    id="author"
                    label="Tên tác giả"
                    defaultValue=""
                    onChange={formik.handleChange}
                    variant="standard"
                />
                <TextField
                    id="description"
                    name="description"
                    label="Mô tả sách"
                    multiline
                    rows={4}
                    defaultValue=""
                    onChange={formik.handleChange}
                    variant="standard"
                />
                {/* <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />*/}
                <input type="file"
                       id="file-input"
                       accept="image/png, image/jpeg"
                       style={{display: 'none'}} multiple={true} onChange={handleUploadImage}/>
                <Button variant="contained" onClick={handleClickImage}>
                    Chọn ảnh
                </Button>
                <ImageList sx={{
                    width: 500, height: 450, border: '1px solid black',
                    backgroundColor: 'white',
                    '&:hover': {
                        backgroundColor: '#eeeeee',
                        opacity: [0.9, 0.8, 0.7],
                    },
                    display: 'inherit',
                }} cols={3} rowHeight={164}>

                    {imageData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={item}

                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                <Button type="submit" variant="contained" endIcon={<SendIcon/>}>
                    Lưu
                </Button>
            </form>


        </div>
    );
}


