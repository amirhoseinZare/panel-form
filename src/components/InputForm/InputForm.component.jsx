import classes from "./InputForm.module.scss"

export const InputForm =(props) => {
    const { helptext, value, inputKey, label, handleCHange, show, showError } = props;
    return (
        <div style={{display:show?'block':'none'}}>
            <input value={value} onChange={e=>handleCHange(e, inputKey)} className={showError && classes.invalid}/>
            <label for={inputKey}>{label}:</label>
            {<p style={{display:showError?'block':'none'}} className={classes.invalidHelper}>{helptext}</p>}
        </div>
    )
}