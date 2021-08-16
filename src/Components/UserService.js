import axios from "axios";

const MEMBER_API_BASE_URL = "http://localhost:8082/getAllMembers";
const MEMBER_API_BASE_URL_ADD = "http://localhost:8082/addmember";
const MEMBER_API_BASE_URL_DELETE = "http://localhost:8082/deleteMemberById";
const MEMBER_API_BASE_URL_GETBYID = "http://localhost:8082/getMemberById";
const MEMBER_API_BASE_URL_UPDATE = "http://localhost:8082/updateFamilyMemInfo";

class UserService{

    getUsers(){
        return axios.get(MEMBER_API_BASE_URL);
    }
    addMember(member){
        return axios.post(MEMBER_API_BASE_URL_ADD, member);
    }
   getMemberById(mid){
    return axios.get( `${MEMBER_API_BASE_URL_GETBYID}/${mid}`);
   }
    deleteMember(uid){
        return axios.delete( `${MEMBER_API_BASE_URL_DELETE}/${uid}`);
    }
    updateUser(member){
        return axios.put(MEMBER_API_BASE_URL_UPDATE, member);
    }

}
export default new UserService();
