import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  public dataGame =
    [
      {
        "type": "animaux",
        "imgToType": "img",
        "data":
          [
            {
              "vreponse": 2,
              "listechoix":
                [
                  { "img": "img", "nom": "nom", "indice": 1 },
                  { "img": "img", "nom": "nom", "indice": 2 },
                  { "img": "img", "nom": "nom", "indice": 3 },
                  { "img": "img", "nom": "nom", "indice": 4 }
                ]
            },
            {
              "vreponse": 1,
              "listechoix":
                [
                  { "img": "img", "nom": "nom", "indice": 1 },
                  { "img": "img", "nom": "nom", "indice": 2 },
                  { "img": "img", "nom": "nom", "indice": 3 },
                  { "img": "img", "nom": "nom", "indice": 4 }
                ]
            },
            {
              "vreponse": 4,
              "listechoix":
                [
                  { "img": "img", "nom": "nom", "indice": 1 },
                  { "img": "img", "nom": "nom", "indice": 2 },
                  { "img": "img", "nom": "nom", "indice": 3 },
                  { "img": "img", "nom": "nom", "indice": 4 }
                ]
            }
          ]
      },
      {
        "type": "Géographie",
        "imgToType": "img",
        "data":
          [{

            "vreponse": 2,
            "listechoix":
              [
                { "img": "img", "nom": "nom", "indice": 1 },
                { "img": "img", "nom": "nom", "indice": 2 },
                { "img": "img", "nom": "nom", "indice": 3 },
                { "img": "img", "nom": "nom", "indice": 4 }
              ]
          },
          {
            "vreponse": 1,
            "listechoix":
              [
                { "img": "img", "nom": "nom", "indice": 1 },
                { "img": "img", "nom": "nom", "indice": 2 },
                { "img": "img", "nom": "nom", "indice": 3 },
                { "img": "img", "nom": "nom", "indice": 4 }
              ]
          },
          {
            "vreponse": 4,
            "listechoix":
              [
                { "img": "img", "nom": "nom", "indice": 1 },
                { "img": "img", "nom": "nom", "indice": 2 },
                { "img": "img", "nom": "nom", "indice": 3 },
                { "img": "img", "nom": "nom", "indice": 4 }
              ]
          }
          ]
      },
      {
        "type": "Histoire",
        "imgToType": "img",
        "data":
          [{

            "vreponse": 2,
            "listechoix":
              [
                { "img": "img", "nom": "nom", "indice": 1 },
                { "img": "img", "nom": "nom", "indice": 2 },
                { "img": "img", "nom": "nom", "indice": 3 },
                { "img": "img", "nom": "nom", "indice": 4 }
              ]
          },
          {
            "vreponse": 1,
            "listechoix":
              [
                { "img": "img", "nom": "nom", "indice": 1 },
                { "img": "img", "nom": "nom", "indice": 2 },
                { "img": "img", "nom": "nom", "indice": 3 },
                { "img": "img", "nom": "nom", "indice": 4 }
              ]
          },
          {
            "vreponse": 4,
            "listechoix":
              [
                { "img": "img", "nom": "nom", "indice": 1 },
                { "img": "img", "nom": "nom", "indice": 2 },
                { "img": "img", "nom": "nom", "indice": 3 },
                { "img": "img", "nom": "nom", "indice": 4 }
              ]
          }
          ]
      }
    ];

  public listeQuiz=[];
  public Indicevreponse;
  public dataResponse;
  public felicitation;
  public suivant;
  public precedant;

  constructor() { }

  public getTypeQuiz(){
    let typeQuiz=[];
    let i = 0;
    this.dataGame.forEach(typeQ => {
      typeQuiz[i] = typeQ;
      i++;
    });
    return typeQuiz;
  }
}
