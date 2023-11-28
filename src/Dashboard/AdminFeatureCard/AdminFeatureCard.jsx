import { FaUsers } from "react-icons/fa"
import useAxios from "../../hooks/useAxios/useAxios"
import { useState } from "react"



const AdminFeatureCard = () => {
    const myAxios = useAxios()
    const [donor, setDonor] = useState([])
    myAxios.get(`/donor`, {withCredentials : true})
    .then((res)=>{
        setDonor(res.data)
    })
  return (
    <div className="bg-base-300 my-myMargin p-10 rounded-lg">
        <div className="flex justify-between items-center">
            <div>
                <h1 className="text-7xl  font-bold text-gray-600"><FaUsers/></h1>
                <h1 className="text-2xl  font-medium text-gray-600"> Users (Donor)</h1>
            </div>
            <div>
                <h3 className="text-xl  font-medium text-gray-600">Total Users : {donor?.length}</h3>
            </div>
        </div>
    </div>
  )
}

export default AdminFeatureCard