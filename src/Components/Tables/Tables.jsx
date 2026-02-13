import  { useState } from 'react'
import Modal from '../Modal/Modal'
import UserEditForm from '../UserEditForm/UserEditForm'

const Tables = ({users}) => {
    
    const [openModal, setOpenModal] = useState(null)
    const [searchTerm, setSearchTerm] = useState("")

     








  return (
    <div className='w-[70%] m-auto mt-5'>
        <div className="filters my-4">


            <div>
                <input  className='border border-black/60 p-1 rounded-[10px] outline-0 capitalize'
                type="text"
                onChange={(e)=>setSearchTerm(e.target.value)}
                />
            </div>
        </div>
        <table>
        <caption>
          users list
        </caption>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
            {users && users 
            .filter((user) => {
          if (searchTerm.trim() === "") return true;
          return (
            user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            String(user.age).includes(searchTerm)
              );
             })
             .map((user)=>(
                <tr key={user.id}
                onClick={()=>setOpenModal(user)}
                >
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                </tr>
            ))}
        </tbody>
      </table>
      {openModal && <Modal
          close={() => {
          setOpenModal(null);
          }}
          title="edit users"
          >
            <UserEditForm editValue={openModal} setOpenModal={setOpenModal} />
        </Modal>}
    </div>
  )
}

export default Tables