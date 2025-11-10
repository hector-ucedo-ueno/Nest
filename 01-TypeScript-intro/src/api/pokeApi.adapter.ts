import axios from "axios";


export class PokeapiAdapter {

    private readonly axios = axios;

    get( url: string ) {
        const { data } = await this.axios.get(url);
        return data;
    }

    async post( url: string, data: any ) {
    
    }
    async pach( url: string, data: any ) {
    
    }
    async delete( url: string, data: any ) {
    
    }

}
