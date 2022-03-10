import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkedinServiceService {
  baseUrl="https://www.linkedin.com/oauth/v2/accessToken"

  constructor(private http:HttpClient) { }

  obj={
 
      grant_type: "authorization_code",  // value of this field should always be: 'authorization_code'
      code: "AQR9IPKemdUH5UV8kpcNvZLWj7ZqF1PvdvTPVl_p5EJjV854ZsfUoAQqDZFw-AVx9dogsA2p-tH-7SmuWsv_Nqg1q6L0NRDkMGGuVaYYPC3wwAkJPKqsVeVAbdq6NORee3baUHXt7AMlRYRpTYlIe9JOzddMTopbDEdIpJP4tPVAAN3TYSypk_msloMLaimITNLOrvajULQeg4KMGwM",
      redirect_uri: " ",  // The same redirect_url used in step 2.1 (in login.component.ts)
      client_id: '78d2yc32suuebz', // Follow step 1.2
      client_secret: 'bOgpFeLyI6lZMUJW'   // Follow step 1.2
 
  }
  params: string=this.obj.grant_type+this.obj.code+this.obj.redirect_uri+this.obj.client_id+this.obj.client_secret;

  postToken(){

   return this.http.post(this.baseUrl,this.params)
   .pipe(map((res:any)=>{
     return res;
   }))
  }
}



