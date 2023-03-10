export default function timeNameCity({data}){
    return(
        <div className="text-block">
          <div className="time-and-name">
              <span className="time">{data
              ? `${data.start_date} - ${data.end_date}`
              : "10/2011 - 03/2016"}</span>
              <p className="name">{data.position ? data.position : data.qualifikation} </p>
              <p className="city">{data.institut ? data.institut : data.unternehmen}, {data.city}</p>
          </div>
          <div className="details">
            <span dangerouslySetInnerHTML={{
                  __html: data.description,
                }}/>
          </div>
        </div>
    )
}