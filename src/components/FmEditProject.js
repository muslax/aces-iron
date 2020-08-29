import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

// const FormEditProject = ({ model }) => {
const FormEditProject = ({ model, submitHandler }) => {
  return (
    <Formik
      initialValues ={{
        title: model?.title ? model?.title : '',
        description: model?.description ? model?.description : '',
        startDate: model?.startDate ? model?.startDate : '',
        endDate: model?.endDate ? model?.endDate : '',
        status: model?.status ? model?.status : '',
        contact: model?.contact ? model?.contact : '',
        managedBy: model?.managedBy ? model?.managedBy : '',
      }}
      validationSchema = {Yup.object({

      })}
      __onSubmit = {(values, {setSubmitting}) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
         }, 100)
      }}
      onSubmit = {submitHandler}
    >
      <Form>
        <div>
          <label htmlFor="title">Title</label>
          <Field name="title" palceholder="" />
          <span><ErrorMessage name="title" /></span>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <Field name="description" palceholder="" />
          <span><ErrorMessage name="description" /></span>
        </div>
        <div>
          <label htmlFor="startDate">Start date</label>
          <Field name="startDate" palceholder="" />
          <span><ErrorMessage name="startDate" /></span>
        </div>
        <div>
          <label htmlFor="endDate">End date</label>
          <Field name="endDate" palceholder="" />
          <span><ErrorMessage name="endDate" /></span>
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <Field name="status" palceholder="" />
          <span><ErrorMessage name="status" /></span>
        </div>
        <div>
          <label htmlFor="contact">Contact</label>
          <Field name="contact" palceholder="" />
          <span><ErrorMessage name="contact" /></span>
        </div>
        <div>
          <label htmlFor="managedBy">PIC</label>
          <Field name="managedBy" palceholder="" />
          <span><ErrorMessage name="managedBy" /></span>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  )
}

export default FormEditProject