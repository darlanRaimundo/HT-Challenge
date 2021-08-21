import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
createStyles({
  btnUpload: {
    display: 'flex',
    justifyContent: 'center',
    width: '20rem'
  },
  slider: {
    position: 'relative',
    width: '100%',
    height: '1em',
    margin: '1.5em auto',
    backgroundColor: '#29e',
    borderRadius: '0.5em',
    boxSizing: 'border-box',
    fontSize: '1em',
    msTouchAction: 'none',
    touchAction: 'none',
    before: {
      content: '',
      display: 'block',
      position: 'relative',
      top: '-0.5em',
      width: '2em',
      height: '2em',
      marginLeft: '-1em',
      border: 'solid 0.25em #fff',
      borderRadius: '1em',
      backgroundColor: 'inherit',
      boxSizing: 'border-box'
    },
    after: {
      content: 'attr(data-value)',
      position: 'absolute',
      top: '-1.5em',
      width: '2em',
      lineHeight:'1em',
      marginLeft: '-1em',
      textAlign: 'center'
    }
  },

})
)