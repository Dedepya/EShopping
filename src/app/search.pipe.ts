import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(profiles: any[], searchTerm:string): any[] {

   
    if(!profiles || !searchTerm){
      return profiles;
    }
    else{
      return profiles.filter(mobileObj=>mobileObj.profileTitle.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1 )
    }
  }

}
