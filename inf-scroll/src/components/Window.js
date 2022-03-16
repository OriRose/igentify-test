import classes from './Window.module.css';
import {useState} from "react";
import Item from './Item';
import {getItems} from '../services/itemService';
import InfiniteScroll from "react-infinite-scroll-component";

function Window() {
  const size = 5;
  const [items, setItems] = useState(getItems(1,size).concat(getItems(2,size)));
  const [pagesCount, setPagesCount] = useState(2)
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if(items.length >= 100){
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setItems(items.concat(getItems(pagesCount+1,size)))
      setPagesCount(pagesCount+1)
    }, 500);
  }

  return (
    <div className={classes.window}>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        height={500}
      >
        {items.map((item) =>{
          return(<Item key={item.id} name={item.name}/>)
        })}
      </InfiniteScroll>
    </div>
  );
}
  
export default Window;