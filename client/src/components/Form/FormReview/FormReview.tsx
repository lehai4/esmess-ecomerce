import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Checkbox, Input, Textarea } from "../..";
import style from "./FormReview.module.scss";
import classNames from "classnames/bind";
type FormReviewProps = {
  rate: string;
  nameUser: string;
  emailUser: string;
  confirm: boolean;
};
const FormReview = () => {
  const cx = classNames.bind(style);
  let initialValues: FormReviewProps = {
    rate: "",
    nameUser: "",
    emailUser: "",
    confirm: false,
  };
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      rate: Yup.string().required("required"),
      nameUser: Yup.string().required("required"),
      emailUser: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      confirm: Yup.bool().oneOf([true], "You need to accept information"),
    }),
    onSubmit: (e) => {
      console.log(e);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={cx("mb-3", "w-full", "form-group")}>
        <Textarea
          id="rate"
          name="rate"
          rows={8}
          placeholder="Your Review *"
          style={{
            padding: "15px 20px",
            fontSize: 18,
            lineHeight: "24px",
            width: "100%",
            transition: "color .2s",
            border: "1px solid #949494",
          }}
          value={formik.values.rate}
          handleChange={formik.handleChange}
        />
        {formik.errors.rate && (
          <p className="mes__error">{formik.errors.rate}</p>
        )}
      </div>
      <div
        className={cx(
          "mb-5",
          "flex",
          "flex-row",
          "justify-between",
          "items-center",
          "gap-8",
          "form-group"
        )}
      >
        <div className={cx("flex", "flex-col", "w-6/12")}>
          <Input
            name="nameUser"
            id="nameUser"
            placeholder="Your Name *"
            style={{
              padding: "15px 20px",
              fontSize: 18,
              lineHeight: "24px",
              transition: "color .2s",
              border: "1px solid #949494",
            }}
            value={formik.values.nameUser}
            handleChange={formik.handleChange}
          />
          {formik.errors.nameUser && (
            <p className="mes__error">{formik.errors.nameUser}</p>
          )}
        </div>
        <div className={cx("flex", "flex-col", "w-6/12")}>
          <Input
            name="emailUser"
            id="emailUser"
            placeholder="Your Email *"
            style={{
              padding: "15px 20px",
              fontSize: 18,
              lineHeight: "24px",
              transition: "color .2s",
              border: "1px solid #949494",
            }}
            value={formik.values.emailUser}
            handleChange={formik.handleChange}
          />
          {formik.errors.emailUser && (
            <p className="mes__error">{formik.errors.emailUser}</p>
          )}
        </div>
      </div>
      <div className={cx("w-auto", "form-group")}>
        <div className={cx("mb-6")}>
          <Checkbox
            id="confirm"
            name="confirm"
            value={formik.values.confirm}
            isChecked={formik.values.confirm}
            handleChange={formik.handleChange}
          />
          <span className={cx("text-lg")}>
            &nbsp;&nbsp;Save my name, email, and website in this browser for the
            next time I comment.
          </span>
        </div>
      </div>
      <div className={cx("w-auto", "form-group")}>
        <Button
          text="Submit"
          handleClick={() => {}}
          icon={""}
          style={{
            gap: 0,
            padding: "15px 35px",
            textTransform: "uppercase",
            color: "#fff",
            fontSize: 14,
            width: 155,
            fontWeight: "500",
            letterSpacing: "0.2rem",
            backgroundColor: "#111",
          }}
        />
      </div>
    </form>
  );
};

export default FormReview;
