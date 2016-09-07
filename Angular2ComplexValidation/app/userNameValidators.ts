import {Control} from 'angular2/common'

export class UserNameValidators{

    static shouldBeUnique(control:Control){
        return new Promise((resolve, reject) =>{
            setTimeout(function(){
                if (control.value == "mosh"){
                    resolve({ shouldBeUnique:true });
                }
                resolve( null );
            }, 1000);
         });
    }

    static cannotContainSpace(control:Control){
        if (control.value.indexOf(' ') >=0){
            return {cannotContainSpace:true};
        }
        return null;
    }
}