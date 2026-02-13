import React, { useRef } from 'react'

const UserEditForm = ({editValue, setOpenModal}) => {
    const editedName = useRef()
    const editedEmail = useRef()
    const editedAge = useRef()

    const handleSubmit = async(e)=>{
        e.preventDefault()

        const newEditedUser = {
            name: editedName.current.value,
            email: editedEmail.current.value,
            age: editedAge.current.value
        }

        try{
            const response =await axios.post("https://someLinks", {
                newEditedUser
            })
            console.log("Success:", response.data);
             alert("User created!");
        }
        catch(error){
            console.log("error", error.message)
            alert("Something went wrong");
        }
    }



  return (
    <div className='px-8   '>
        <form className='border border-black/40 flex flex-col rounded-xl p-2'
        onSubmit={handleSubmit}
        >
            <label className='flex flex-col capitalize mt-3'>
                <span>name</span>
                <input className='border border-black/60 p-1 rounded-[10px] outline-0 capitalize'
                 type="text" placeholder={editValue.name} required
                 ref={editedName} />
            </label>
            <label className='flex flex-col capitalize mt-3'>
                <span>name</span>
                <input className='border border-black/60 p-1 rounded-[10px] outline-0 capitalize'
                 type="text" placeholder={editValue.email} required
                 ref={editedEmail} />
            </label>
            <label className='flex flex-col capitalize mt-3'>
                <span>name</span>
                <input className='border border-black/60 p-1 rounded-[10px] outline-0 capitalize'
                 type="text" placeholder={editValue.age} required
                 ref={editedAge} />
            </label>

            <div className="btns my-4 flex items-center justify-center">
                <button className='border capitalize p-1.5 rounded-xl mr-2 cursor-pointer'
                type='button'
                onClick={()=>setOpenModal(null)}
                >close</button>
                <button className='border capitalize p-1.5 rounded-xl cursor-pointer'>save</button>
            </div>
        </form>
    </div>
  )
}

export default UserEditForm