import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({ providedIn : 'root'})

export class ClientService{

    constructor(){ }
    
}

// import { Injectable } from '@angular/core';

// import { Signup } from './signup.model';

// @Injectable({
// providedIn: 'root'
// })

// export class SignupService{

// singnup: Signup[] = [];

// newSignup(signup: Signup){
// this.singnup.push(signup);
// }

// getNewSignup(){
// return this.singnup;
// }

// }