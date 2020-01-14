import Axios from "axios"


class HelloWorldService{
    executeHelloWorldBeanService(){
        return Axios.get('http://localhost:8080/hello-world-bean/prabh')
    }

    executeHelloWorldBeanPathVariableService(name){
        return Axios.get(`http://localhost:8080/hello-world-bean/${name}`)
     }


 }
export default new HelloWorldService()