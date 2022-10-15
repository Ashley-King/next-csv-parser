import UploadButton from '../components/UploadButton/UploadButton';


export default function Home() {

 
  
  

  return (
    <>
      
      <div className="container">
        <div className="row">
          <div className="column col-12 py-5 ">
            <h1 className="text-center">CSV Parser</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="column col-8 py-5 mx-auto d-flex justify-content-center ">
            <UploadButton  />
          </div>
        </div>
      </div>
    </>
  )
}
