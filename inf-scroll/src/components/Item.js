import classes from './Item.module.css'

function Item(props) {
    return (
      <div className={classes.item}>
          <p className={classes.content}>{props.name}</p>
      </div>
    );
  }
  
  export default Item;