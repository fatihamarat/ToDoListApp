import * as Yup from 'yup';

const validations = Yup.object().shape({
    text: Yup.string().required('Required'),
});

export default validations;