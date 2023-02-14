import React from 'react'

function Table(props) {

    let formData = new FormData();
    const onFileChange = (e) =>{
          
          if(e.target && e.target.files[0]){
            formData.append('file' , e.target.files[0]);
          }
         
          
    }
    const submitbtn = () => {
      //Axios post formdata to backend
    }
      return(
      <>
      <tr className='tablesize'>
        <th scope="row" className='sno1'>{props.sno}</th>
        <td> {props.place} </td>
        <td> {props.date}</td>
        <td>
          <div className="co">
            <div className="bt1">
               <input type="file" name='file_upload' onChange={onFileChange} />
            </div>
            <div className="bt2">
            <button type="button" onClick={submitbtn} class="btn btn-light">Submit</button>
  
            </div>
          </div>
        </td>
      </tr>
      </>
  )
}

export default Table
