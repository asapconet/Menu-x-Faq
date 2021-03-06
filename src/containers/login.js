import React, { useState } from "react";
import Input from "../Components/input";
import Modal from "../Components/modal";
import { Button2 } from "../Components/button";
import { FaAngleDoubleRight, FaUserTie } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { client } from "../config/config";

const schema = Yup.object().shape({
  username: Yup.string().email("your entry format is incorrect").required(
    "Username does not exits"
  ),
  password: Yup.string()
    // .required("Password requied")
    .min(8, "Password incomplete"),
});

const Login = () => {
  const [modalOpen, setModalOpen] = useState(true);
  const [errors, setErrors] = React.useState({});

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values, { setSubmittig }) => {
      setSubmittig(true);
      setErrors({});

      const logs = {
        username: values.username,
        password: values.password,
      };

      console.log(logs);
      client
        .put("https://api.jon.com", logs)
        .then((res) => {
          formik.resetForm();
          console.log("names entered");
          window.location.href = "/menu";
        })
        .catch((err) => {
          console.log(err);
          setErrors(err.logs);
        });
    },
    validationSchema: schema,
  });

  const handleModal = () => {
    setModalOpen(false);
    window.location.href = "/";
  };

  return (
    <>
      <Modal
        title={<FaUserTie />}
        description="Ensure you enter correct credentials"
        open={modalOpen}
        closeModal={handleModal}
      >
        <form onSubmit={formik.handleSubmit}>
          <label>Username or Email</label>
          <Input
            id="username"
            type="text"
            placeholder="aships@icloud.com"
            {...formik.getFieldProps("username")}
          />
          {formik.touched.username && formik.errors.username ? (
            <p className="text-red-500 text-xs italic">
              {formik.errors.username}
            </p>
          ) : null}
          {errors.username && (
            <p className="text-red-500 text-xs italic">{errors.username}</p>
          )}
          <label>Password</label>
          <Input
            id="password"
            type="password"
            placeholder="qwert123"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="text-xs text-red-500 italic">
              {formik.errors.password}
            </p>
          ) : null}
          {errors.password && (
            <p className="text-red-500 text-xs italic">{errors.password}</p>
          )}

          <div className="flex justify-center text-center my-6">
            {/* <Link to="/menu"> */}
            <Button2 type="submit" className="px-3">
              Login <FaAngleDoubleRight />
            </Button2>
            {/* </Link> */}
          </div>
          <div className="flex justify-between">
            <span>
              <a href="a.com">forgot password?</a>
            </span>
            <span>
              <a href="/signup">new here? signup</a>
            </span>
          </div>
        </form>
      </Modal>{" "}
    </>
  );
};

export default Login;
