import classes from "./textForm.module.css";

const TextForm = () => {
  return (
    <>
      <p className={classes.sub_title}>
        Чем вам могут помочь наши эксперты по путешествиям?
      </p>
      <div className={classes.wrapper}>
        <textarea className={classes.textarea} placeholder="Укажите свои пожелания и предпочтения, чтобы мы смогли сделать Ваше путешествие особенным." />
      </div>
    </>
  );
};

export default TextForm;
