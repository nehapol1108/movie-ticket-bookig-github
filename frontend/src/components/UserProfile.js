import React,{useState,useEffect} from 'react'
import Footer from './Footer'
import NavbarOther from './NavbarOther'
import { useToast } from '@chakra-ui/react';
export default function UserProfile() {
    const [loading,setLoading] = useState(false);
    const [name,setName] = useState(false);
    const [email,setEmail] = useState(false);
    const toast = useToast();
    const fetchUser=async()=>{
        try{
          setLoading(true);
          const userInfo = await JSON.parse(localStorage.getItem("userInfo"));
          if(!userInfo){
            toast({
              title: 'No userinfo!',
              description:"No userinfo",
              status: 'error',
              duration: 5000,
              isClosable: true,
              position: "bottom-left",
            });
            return;
          }
          console.log(userInfo.createdAt)
          setName(userInfo.name);
          setEmail(userInfo.email);
          setLoading(false);
          toast({
            title: 'Profile fetched successfully',
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: "right",
        });
         
      }catch(err){
        toast({
          title: 'Error Occured!',
          description:"Failed to load the search results",
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: "bottom-left",
        });
        console.log("movie provider" + err.message);
        return;
      }
      }

      useEffect(() => {
      fetchUser();
      }, [])
  return (
   <>
   <NavbarOther/>
   <div className="mainprofile">
        <h2>PROFILE</h2>
        <div className="cardprofile">
          <div className="card-body">
            <i className="fa fa-pen fa-xs edit" />
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>:</td>
                  <td>{name}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>{email}</td>
                </tr>
               
              </tbody>
            </table>
          </div>
        </div>
      
      </div>
      <Footer/>
   </>
  )
}
