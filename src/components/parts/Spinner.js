import {logo} from "../../imgs/imgs"



const Spinner = ({content}) => {
    
    return (
        <div className="backg-main spinner d-flex align-items-center  flex-column">
            
                <img className="mb-5" src={logo} alt="logo"/>
                <div className="loaders rela  ">
                    <span  className="big abs-center rounded-circle"></span>
                    <span  className="small abs-center rounded-circle"></span>
                </div>
                <div className="mt-4 content">{content} </div>
        </div>
    )
}




export default Spinner