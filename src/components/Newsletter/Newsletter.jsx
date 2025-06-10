import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { NewsletterForm } from '../Contact/ContactStyles';

const Newsletter = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Correo electrónico inválido')
      .required('El correo es obligatorio'),
  });

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    console.log('Suscripción enviada:', values);
    // Simulamos el envío
    setTimeout(() => {
      resetForm();
      setSubmitting(false);
      // Aquí podrías mostrar un mensaje de éxito
    }, 1000);
  };

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnBlur={true}
      validateOnChange={false}
    >
      {({ errors, touched, isSubmitting }) => (
        <NewsletterForm>
          <Field
            type="email"
            name="email"
            placeholder="Tu dirección de correo electrónico"
            className={`${touched.email && errors.email ? 'error' : ''} ${!touched.email ? '' : errors.email ? 'invalid' : 'valid'}`}
          />
          {touched.email && errors.email && (
            <div className="error-message">{errors.email}</div>
          )}
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="submit-btn"
          >
            {isSubmitting ? 'Enviando...' : '¡Suscríbete!'}
          </button>
        </NewsletterForm>
      )}
    </Formik>
  );
};

export default Newsletter;
