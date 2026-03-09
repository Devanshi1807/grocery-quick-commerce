function SearchBar() {
  return (
    <div style={{padding:"15px"}}>

      <input
        type="text"
        placeholder="Search for atta, rice, oil..."
        style={{
          width:"100%",
          padding:"12px",
          borderRadius:"12px",
          border:"1px solid #ddd",
          fontSize:"16px"
        }}
      />

    </div>
  )
}

export default SearchBar