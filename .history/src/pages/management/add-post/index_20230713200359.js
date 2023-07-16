import * as yup from "yup";

const AddPostPage = () => {
  const schema = yup.object().shape({
    title: yup.string().required().minLength(3),
    author: yup.string().required().minLength(3),
    genre: yup.string().required().minLength(3),
    price: yup.number().required().min(0),
    images: yup.array().of(yup.string()),
  });
  const handleSubmit = (values) => {
    schema.validate(values, (err, value) => {
      if (err) {
        return;
      }
      onSubmit(value);
    });
  };
  return <div>AddPostPage</div>;
};

export default AddPostPage;
