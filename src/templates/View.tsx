import React, { Component, useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { Movie} from '../model/Movie'
import RequestService  from '../typeScript/Api/ApiRequest';
import { from, firstValueFrom, map } from 'rxjs';
import { Customer } from '../model/Customer';

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

   getData = ()=>{
    return from(
      new RequestService().getMoviesFromApi().then((customers)=>{
        return customers;
      })
    ).pipe(
      map(d=>{
        console.log('data = ');
        console.log( d);
        return d;
      })
    )
  }

  
  showData = ()=>{
    this.getData().subscribe((movies)=>{
      console.log('Les donnees sont : '+ movies);
      this.setState({movies})
      
      return movies;
    })
  }
   
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {movies:[{}]};
    this.showData();
  }

  render() {
      //const [data, setData] = useState<[]>([]);
     return (
      <View>
        <Text>
          Movies
        </Text>
        {/* <Text>
          {
            this.state.movies.map(d=>{
              return (
                <View>
                    
                  <Text>
                    {d}
                  </Text>
                </View>
              )
            })
          }
        </Text> */}
        
      </View>
    );
  }
   
};

export default ViewMovie;