import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";
const AllCategories =()=>{


  const items=useSelector((store)=>store.items)
  console.log(items)
  return(
    <main>
  <div className="items-container">
    {items.map((item)=>
    <HomeItem key={item.id} item={item} />
    )} 
  </div>
</main>
  )
}
export default AllCategories