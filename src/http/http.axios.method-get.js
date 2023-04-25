import axios from "axios";

const context = async () => {
    const response = await axios.get('http://localhost:8080/api/productos')    
    console.log(response.data)
}

context();
