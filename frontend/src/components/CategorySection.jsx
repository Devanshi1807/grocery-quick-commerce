function CategorySection(){

const categories=[
"Rice","Flour","Snacks","Beverages",
"Oil","Spices","Dairy","Biscuits"
]

return(

<div style={{padding:"15px"}}>

<h3>Shop by Category</h3>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(4,1fr)",
gap:"10px"
}}>

{categories.map((cat,index)=>(
<div key={index} style={{
background:"#f3f4f6",
padding:"12px",
borderRadius:"10px",
textAlign:"center",
fontSize:"14px"
}}>
{cat}
</div>
))}

</div>

</div>

)

}

export default CategorySection