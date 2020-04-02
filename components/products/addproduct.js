import React from "react";
/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import { Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import Modal from "react-modal";
import { addProduct } from "../redux/actions/catalogAction";
import { categories } from "../redux/actions/catalogFilterAction";

const AddProductSchema = Yup.object().shape({
    title: Yup.string()
    .required("Required!"),
    price: Yup.string()
    .required("Required!")
    .test('numeric', 'Must be numeric!',
        function (value) {
            return (!/^\d+$/.test(value)) ? false : true;
        }),
    description: Yup.string()
    .required("Required!"),
    image: Yup.string()
    .required("Required!")
    .url("Insert valid URL include http(s)://*"),
    category: Yup.string()
    .required("Required!")
});

const AddProduct = props => {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
      }
      function closeModal(){
        setIsOpen(false);
      }
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
       // subtitle.style.color = '#f00';
      }
    return (
        <>
            <button
                css={styles.floating_menu}
                onClick={() => openModal()}
            >
                +
            </button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                >
                    <h2>Add New Product</h2>
                    <div>
                    <Formik
                        initialValues={{
                            title: "",
                            price: "",
                            description: "",
                            image: "",
                            category: "Mesin Fotocopy Baru"
                        }}
                        validationSchema={AddProductSchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            setSubmitting(true);
                            setTimeout(() => {
                                let newId =
                                    props.catalog[
                                        Object.keys(props.catalog).length - 1
                                    ].id + 1;
                                let newProduct = {
                                    id: newId,
                                    title: values.title,
                                    price: parseInt(values.price),
                                    description: values.description,
                                    image: values.image,
                                    category: values.category
                                };
                                props.addProduct(newProduct);
                                resetForm();
                                setSubmitting(false);
                                closeModal()
                            }, 500);
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <label css={styles.label}>Name:</label> 
                                <input
                                    type="text"
                                    name="title"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.title}
                                    css={styles.input}
                                />
                                <div css={styles.error}>{errors.title && touched.title}</div><br/><br/>
                                <label css={styles.label}>Price:</label> 
                                <input
                                    type="number"
                                    name="price"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.price}
                                    css={styles.input}
                                />
                                {errors.price && touched.price}<br/><br/>
                                <label css={styles.label}>Description:</label>
                                <input
                                    type="text"
                                    name="description"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                    css={styles.input}
                                />
                                <div css={styles.error}>{errors.description && touched.description}</div><br/><br/>
                                <label css={styles.label}>Image:</label>
                                <input
                                    type="text"
                                    name="image"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.image}
                                    css={styles.input}
                                />
                                {errors.image && touched.image}<br/><br/>
                                <label css={styles.label}>Category:</label>
                                <select
                                    type="text"
                                    name="category"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    css={styles.select}
                                >
                                {categories.map(category => (
                                            <option
                                                value={category.value}
                                                key={category.value}
                                            >
                                                {category.name}
                                            </option>
                                        ))}
                                </select>
                                {errors.category && touched.category}<br/>
                                <br/>
                                <button type="submit" disabled={isSubmitting} css={styles.submit}>
                                    Submit
                                </button>
                                <button onClick={closeModal} css={styles.close}>Cancle</button>
                            </form>
                        )}
                    </Formik>
                </div>
            </Modal>
        </>
    );
};

const mapStateToProps = state => ({
    catalog: state.catalog
});

const mapDispatchToProps = dispatch => ({
    addProduct: product => dispatch(addProduct(product))
});
const styles = {
    floating_menu: css`
        background: #33A2FF;
        position:fixed;
	    width:60px;
	    height:60px;
	    bottom:40px;
	    right:40px;
	    color:#FFF;
	    border-radius:50px;
	    text-align:center;
        box-shadow: 2px 2px 3px #999;
        font-size: 36px;
    `,
    input: css`
        margin-right: 20px;
        height: 10px;
        padding: 10px;
        width: 300px;
        float: left;
        border-radius: 3px;
        border: 1px solid #999;
    `,
    select: css`
        margin-right: 20px;
        height: 32px;
        width: 300px;
        float: left;
        border-radius: 3px;
        border: 1px solid #999;
    `,
    label: css`
        float: left;
        margin-top: 5px;
        margin-right: 30px;
    `,
    submit: css`
        background: #33A2FF;
        border: 0;
        padding: 10px;
        color: #fff;
        margin: 10px;
        border-radius: 5px;
    `,
    close: css`
        background: #f46b41;
        border: 0;
        padding: 10px;
        color: #fff;
        margin: 10px;
        border-radius: 5px;
    `,
    error: css`
        color: #f00;
    `
}
export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
