import classes from './switch.module.css'

const SwitchBtn = () => {
  return (
    <>
    <input
      className={classes.react_switch_checkbox}
      id={`react-switch-new`}
      type="checkbox"
    />
    <label
      className={classes.react_switch_label}
      htmlFor={`react-switch-new`}
    >
      <span className={classes.react_switch_button} />
    </label>
  </>
  )
}

export default SwitchBtn