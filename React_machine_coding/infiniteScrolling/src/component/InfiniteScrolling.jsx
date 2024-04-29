import React from 'react'

export default function InfiniteScrolling(props) {
  const {data} = props;
  return (
    <>
        {
            data && data.map( (x, idx) => {
                return (
                    <div>
                        <h5>{x.id}, {x.title}</h5>
                        <img src={x.thumbnail} height={200} width={200}></img>
                    </div>
                )
            })
        }
    </>
  )
}
