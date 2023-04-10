import React, { Component, useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { Movie} from '../model/Movie'
import RequestService  from '../../typeScript/Api/ApiRequest';
import { from, firstValueFrom, map } from 'rxjs';
import { Customer } from '../model/Customer';
import SafeAreaViewTable from './SafeAreaViewTable';

const MyMovies = {
    "title": "The Basics - Networking",
    "description": "Your app fetched this from a remote endpoint!",
    "movies": [
      { "id": "1", "title": "Star Wars", "releaseYear": "1977" },
      { "id": "2", "title": "Back to the Future", "releaseYear": "1985" },
      { "id": "3", "title": "The Matrix", "releaseYear": "1999" },
      { "id": "4", "title": "Inception", "releaseYear": "2010" },
      { "id": "5", "title": "Interstellar", "releaseYear": "2014" }
    ]
  }

class ViewMovie extends Component {
  requestService!: RequestService;
  
  // 

   getData1 = async ()=>{
       await new RequestService().sendXMLHttpRequest()
     .then(
       d => {
         console.log(d); 
         return d;
       }
     )
  }

  getData = ()=>{
    return from(
      new RequestService().getMoviesFromApi().then((films)=>{
        
        return films;
      })
    ).pipe(
      map(d=>{
        return d;
      })
    )
  }

  
  showData = ()=>{
    this.getData()
    .subscribe((films)=>{
        const filmsData = 'films.movies';
        this.setState({films,filmsData});
        console.log(filmsData)
        if(films) 
        return films;
      })
    
  }
   
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {films:[''], filmsData:[{}]};
    this.showData();
  }

  render() {
    let keysDataArray = Object.keys(this.state.films[0]); 
    let valuesDataArray:[] = this.state.films.map((a)=>{
      return a
    });
    console.log('valuesDataArray');
    console.log(valuesDataArray[0]);
    
     return (
      <View>
        <Text>
          La liste
        </Text>
       
        <Text>
          {
            // (Object.values(this.state.films)).map(a=>{
            //   return(
            //     <View>
            //       <Text>
            //         { 
            //           'ID=>'+a.toString()+'\n'
            //           +' Year=>'+' Title=>'
            //           +a.CustomerName+' Year=>'
            //           +a.ContactName 
            //         }
            //       </Text>
            //     </View>
            //   )
            // })       
           }
        </Text>
        
        <SafeAreaViewTable data={{'k':keysDataArray,'v': this.state.films}} /> 
        
      </View>
    );
  }
   
};

export default ViewMovie;