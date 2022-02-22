import React from "react";
import "./FormContainer.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

const FormContainer = ({ modal, setModal }) => {
    const { initialForm } = useSelector((state) => state);
    console.log(initialForm);

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: initialForm,
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
            lastName: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            phone: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Required"),
        }),
        onSubmit: (values) => {
            dispatch({ type: "SEND_POSTS", payload: values });
            dispatch({ type: "POST_FINISHED" });
            setModal(false);
        },
    });

    return (
        <div className="content">
            <div className="content__top">
                <h2 className="content__title">Personal info</h2>
                <button
                    onClick={() => setModal((modal = false))}
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                ></button>
            </div>

            <form className="content__form" onSubmit={formik.handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    className="firstname"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <p>{formik.errors.firstName}</p>
                ) : null}
                <input
                    type="text"
                    name="lastName"
                    className="lastname"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                    <p>{formik.errors.lastName}</p>
                ) : null}
                <input
                    type="email"
                    name="email"
                    className="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <p>{formik.errors.email}</p>
                ) : null}
                <input
                    type="text"
                    name="phone"
                    className="phone"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone ? (
                    <p>{formik.errors.phone}</p>
                ) : null}

                <select
                    name="gender"
                    className="gender"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.gender}
                >
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
                {formik.touched.gender && formik.errors.gender ? (
                    <p>{formik.errors.gender}</p>
                ) : null}

                <div
                    name="developer"
                    className="content__radio"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.developer}
                >
                    <input type="radio" name="developer" value="yes" id="yes" />
                    <label htmlFor="yes"> Yes</label>
                    <input type="radio" name="developer" value="no" id="no" />
                    <label htmlFor="no">No</label>
                </div>
                {formik.touched.isTrue && formik.errors.isTrue ? (
                    <p>{formik.errors.developer}</p>
                ) : null}
                <div className="content__btns">
                    <button className="submit-btn" type="submit">
                        submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormContainer;
