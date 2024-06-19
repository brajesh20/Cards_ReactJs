
function Filter ({ Info, category, setCategory }) {

  const categoryHandler=(title)=>{
    setCategory(title);
  }

  return (
    <div>
      {
        Info.map((data) => (
            <button className="buttonFilter" key={data.id} onClick={()=>categoryHandler(data.title)}>{data.title}</button>
        ))}

    </div>
  )
}

export default Filter
