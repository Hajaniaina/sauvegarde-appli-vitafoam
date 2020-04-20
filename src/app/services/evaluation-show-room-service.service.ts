import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvaluationShowRoomServiceService {
  public voteSRoom=[
    {
      "showroom":"Talatamaty",
      "indiceSroom":1,
      "vote": {
      "options": Array("Très bien","Bien","Moyen","Mauvais","Très mauvais"),
      "indices": Array(1,2,3,4,5)
      }
    },
    {
      "showroom":"Tanjombato",
      "indiceSroom":2,
      "vote": {
        "options": Array("Très bien","Bien","Moyen","Mauvais","Très mauvais"),
        "indices": Array(1,2,3,4,5)
        }
    }
    ,
    {
      "showroom":"Akorondrano",
      "indiceSroom":3,
      "vote": {
        "options": Array("Très bien","Bien","Moyen","Mauvais","Très mauvais"),
        "indices": Array(1,2,3,4,5)
        }
    }
    ,
    {
      "showroom":"Majunga",
      "indiceSroom":4,
      "vote": {
        "options": Array("Très bien","Bien","Moyen","Mauvais","Très mauvais"),
        "indices": Array(1,2,3,4,5)
        }
    },
    {
      "showroom":"Tuléar",
      "indiceSroom":5,
      "vote": {
        "options": Array("Très bien","Bien","Moyen","Mauvais","Très mauvais"),
        "indices": Array(1,2,3,4,5)
        }
    },
    {
      "showroom":"Diégo-Suarez",
      "indiceSroom":6,
      "vote": {
        "options": Array("Très bien","Bien","Moyen","Mauvais","Très mauvais"),
        "indices": Array(1,2,3,4,5)
        }
    }
  ];
  constructor() { }

  public listeOptiondeVote;
  public options = [];
  
  public getListShowRoom(){
    let listeShowRoom = [];
    let i = 0;
    this.voteSRoom.forEach(vote => {
       listeShowRoom[i]=vote;
       i++;
    });
    return listeShowRoom;
  }
}
