import './ProductList.css';




function formDate(value){
    const date1=new Date(value);
    return `${date1.getFullYear()}. ${date1.getMonth()+1} . ${date1.getDate()}` 
}


function ListItem({item,onDelete}){
const DelectClick = ()=> onDelete(item.id)


    return(
        <figure>
        <img src={item.image} alt={item.name}/>
        <figcaption>
            <dl>
                <dt>{item.name}</dt>
                <dd>{formDate(item.date)}</dd>
                <dd>{item.price}</dd>
                <dd>{item.date}</dd>
                <dd>{item.kind}</dd>
                <dd>{item.metal}</dd>
                <dd>{item.rating}</dd>
                <dd><button type="button"
                    onClick={DelectClick}
                >delete</button></dd>
            </dl>
        </figcaption>
    </figure>
    )
}





function ProductList({items,onDelete}){

    // console.log(items)

    return(
        <ul>
            {
            items.map((item)=>{
                return <li key={item.id}>
                    <ListItem
                    item={item} onDelete={onDelete}
                    />
                </li>
            })
            }
        </ul>
    )
}


export default ProductList;