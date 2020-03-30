import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class EnfantServiceService {

  /*données JSON pour les produits des enfants */
  public enfant =
    [
      {
        "plm": "Dos",
        "sensation": [
          {
            "stion": "Souple",
            "produit": [
              {
                "pord": "SGB",
                "desc": "Les matelas SGB de VITAFOAM sont idéals pour les enfants. Sa densité moyenne et la souplesse offre un confort adapté aux jeunes enfants et aux personnes âgées recherchant un matelas souple.",
                "desc_caracteristique":Array("Densité moyenne","Souple","Adapté aux enfants et aux personnes âgées","Adapté aux personnes avec une petite corpulence"),
                "img" : "img prod 1"
              }
            ]
          },
          /*{
            "stion": "Moyen",
            "produit": [
              {
                "pord": "produit 1",
                "desc": "desc produit 18",
                "img": "img prod 1"
              },
              {
                "pord": "produit 2",
                "desc": "desc produit 26",
                "img": "img prod 2"
              },
              {
                "pord": "produit 3",
                "desc": "desc produit 35",
                "img": "img prod 3"
              }
            ]
          },*/
          {
            "stion": "Ferme",
            "produit": [
              {
                "pord": "CONFORT",
                "desc": "Pas des descrption pour le moment",
                "desc_caracteristique":Array("1","2","3","4"),
                "img": "img prod 1"
              }
            ]
          }
        ]
      }
    ];
    public personneAgee =
    [
      {
        "plm": "Dos",
        "sensation": [
          {
            "stion": "Souple",
            "produit": [
              {
                "pord": "LATEX",
                "desc": "Les matelas 100% LATEX de VITAFOAM sont parmi les plus souples et les plus confortables. Leur grande élasticité et leur résilience font qu’ils épousent parfaitement les formes du cops même pendant les mouvements, offrant des sensations inégalées.",
                "desc_caracteristique":Array("Grande densité","Grande longévité","Très souple","Elastique","Confort et maintien élevé","Adapté aux personnes âgées"),
                "img" : "img prod agee"
              }
            ]
          },
          {
            "stion": "Moyen",
            "produit": [
              {
                "pord": "CONFORT SUPERIEUR LATEX",
                "desc": "Pas des descriprion pour le moment",
                "desc_caracteristique":Array("1","2","3","4"),
                "img": "img prod 1"
              },
              {
                "pord": "SGD",
                "desc": "Les matelas SGD de VITAFOAM ont la plus grande densité de mousse. D’une grande souplesse, ils offrent un excellent maintien et un grand confort. Sa grande densité lui confère une grande durée de vie et une bonne résilience.  Il est idéal pour les personnes âgées, souffrant de mal de dos, de surpoids ou ayant une forte corpulence.",
                "desc_caracteristique":Array("Grande densité","Grande longévité","Très souple","Adapté aux personnes souffrant de mal de dos","Adapté aux personnes en surpoids","Adapté aux personnes âgées"),
                "img": "img prod 2"
              }
            ]
          },
          {
            "stion": "Ferme",
            "produit": [
              {
                "pord": "SANDWICH SUPERIEUR",
                "desc": "Pas des descriprion pour le moment",
                "desc_caracteristique":Array("1","2","3","4"),
                "img": "img prod 1"
              },
              {
                "pord": "SGB",
                "desc": "Les matelas SGB de VITAFOAM sont idéals pour les enfants. Sa densité moyenne et la souplesse offre un confort adapté aux jeunes enfants et aux personnes âgées recherchant un matelas souple.",
                "desc_caracteristique":Array("Densité moyenne","Souple","Adapté aux enfants et aux personnes âgées","Adapté aux personnes avec une petite corpulence"),
                "img" : "img prod 1"
              }
            ]
          }
        ]
      }
    ];
    public femmenAceinte =
    [
      {
        "plm": "Dos",
        "sensation": [
          {
            "stion": "Souple",
            "produit": [
              {
                "pord": "SANDWICH LATEX PERFO",
                "desc": "Pas des descriprion pour le moment",
                "desc_caracteristique":Array("1","2","3","4"),
                "img": "img prod 1"
              }
            ]
          },
          {
            "stion": "Moyen",
            "produit": [
              {
                "pord": "DUO SUPERIEUR",
                "desc": "Pas des descriprion pour le moment",
                "desc_caracteristique":Array("1","2","3","4"),
                "img": "img prod 1"
              },
              {
                "pord": "CONFORT LATEX",
                "desc": "Pas des descriprion pour le moment",
                "desc_caracteristique":Array("1","2","3","4"),
                "img": "img prod 1"
              }
            ]
          },
          {
            "stion": "Ferme",
            "produit": [
              {
                "pord": "DUO",
                "desc": "Pas des descriprion pour le moment",
                "desc_caracteristique":Array("1","2","3","4"),
                "img": "img prod 1"
              },
              {
                "pord": "CONFORT",
                "desc": "Pas des descriprion pour le moment",
                "desc_caracteristique":Array("1","2","3","4"),
                "img": "img prod 1"
              }
            ]
          }
        ]
      }
    ];
    public personneAllite =
    [
      {
        "plm": "Dos",
        "sensation": [
          {
            "stion": "Souple",
            "produit": [
              {
                "pord": "MATELAS ANTI-ESCARESS",
                "desc": "Pas des descriprion pour le moment",
                "desc_caracteristique":Array("1","2","3","4"),
                "img": "img prod 1"
              }
            ]
          }
        ]
      }
    ];
    public adulte =
    [
      {
        "plm": "Dos",
        "sensation": [
          {
            "stion": "Souple",
            "produit": [
              {
                "pord": "CONFORT SUPERIEUR LATEX",
                "desc": "Pas des descriprion pour le moment",
                "desc_caracteristique":Array("1","2","3","4"),
                "img": "img prod 1"
              },
              {
                "pord": "SGD",
                "desc": "Les matelas SGD de VITAFOAM ont la plus grande densité de mousse. D’une grande souplesse, ils offrent un excellent maintien et un grand confort. Sa grande densité lui confère une grande durée de vie et une bonne résilience.  Il est idéal pour les personnes âgées, souffrant de mal de dos, de surpoids ou ayant une forte corpulence.",
                "desc_caracteristique":Array("Grande densité","Grande longévité","Très souple","Adapté aux personnes souffrant de mal de dos","Adapté aux personnes en surpoids","Adapté aux personnes âgées"),
                "img": "img prod 2"
              }
            ]
          },
          {
            "stion": "Moyen",
            "produit": [
              {
                "pord": "DUO SUPERIEUR",
                "desc": "Pas des descriprion pour le moment",
                "desc_caracteristique":Array("1","2","3","4"),
                "img": "img prod 1"
              },
              {
                "pord": "CONFORT LATEX",
                "desc": "Pas des descriprion pour le moment",
                "desc_caracteristique":Array("1","2","3","4"),
                "img": "img prod 1"
              }
            ]
          },
          {
            "stion": "Ferme",
            "produit": [
              {
                "pord": "DUO",
                "desc": "Pas des descriprion pour le moment",
                "desc_caracteristique":Array("1","2","3","4"),
                "img": "img prod 1"
              },
              {
                "pord": "CONFORT",
                "desc": "Pas des descriprion pour le moment",
                "desc_caracteristique":Array("1","2","3","4"),
                "img": "img prod 1"
              },
              {
                "pord": "SGC",
                "desc": "Les matelas SGC de VITAFOAM sont les plus fermes de sa gamme. D’une grande densité il offre un support adapté aux personnes souffrant de mal de dos, de surpoids ou ayant une forte corpulence.",
                "desc_caracteristique":Array("Densité élevé","Très ferme","Adapté aux personnes souffrant de mal de dos","Adapté aux personnes en surpoids"),
                "img": "img prod 1"
              }
            ]
          }
        ]
      },
      {
        "plm": "Superoid",
        "sensation": [
          {
            "stion": "Souple",
            "produit": [
              {
                "pord": "CONFORT SUPERIEUR LATEX",
                "desc": "Pas des descriprion pour le moment",
                "desc_caracteristique":Array("1","2","3","4"),
                "img": "img prod 1"
              }
            ]
          },
          {
            "stion": "Moyen",
            "produit": [
              {
                "pord": "SGD",
                "desc": "Les matelas SGD de VITAFOAM ont la plus grande densité de mousse. D’une grande souplesse, ils offrent un excellent maintien et un grand confort. Sa grande densité lui confère une grande durée de vie et une bonne résilience.  Il est idéal pour les personnes âgées, souffrant de mal de dos, de surpoids ou ayant une forte corpulence.",
                "desc_caracteristique":Array("Grande densité","Grande longévité","Très souple","Adapté aux personnes souffrant de mal de dos","Adapté aux personnes en surpoids","Adapté aux personnes âgées"),
                "img": "img prod 2"
              }
            ]
          },
          {
            "stion": "Ferme",
            "produit": [
              {
                "pord": "DUO SUPERIEUR",
                "desc": "Pas des descriprion pour le moment",
                "desc_caracteristique":Array("1","2","3","4"),
                "img": "img prod 1"
              }
            ]
          }
        ]
      },
      {
        "plm": "Rien de cela",
        "sensation": [
          {
            "stion": "très Souple",
            "produit": [
              {
                "pord": "LATEX",
                "desc": "Les matelas 100% LATEX de VITAFOAM sont parmi les plus souples et les plus confortables. Leur grande élasticité et leur résilience font qu’ils épousent parfaitement les formes du cops même pendant les mouvements, offrant des sensations inégalées.",
                "desc_caracteristique":Array("Grande densité","Grande longévité","Très souple","Elastique","Confort et maintien élevé","Adapté aux personnes âgées"),
                "img" : "img prod agee"
              },
              {
                "pord": "SANDWICH SUPERIEUR LATEX",
                "desc": "Pas des descriprion pour le moment",
                "desc_caracteristique":Array("1","2","3","4"),
                "img": "img prod 1"
              },
              {
                "pord": "CONFORT SUPERIEUR LATEX",
                "desc": "Pas des descriprion pour le moment",
                "desc_caracteristique":Array("1","2","3","4"),
                "img": "img prod 1"
              }
            ]
          },
          {
            "stion": "Souple",
            "produit": [
              {
                "pord": "SGD",
                "desc": "Les matelas SGD de VITAFOAM ont la plus grande densité de mousse. D’une grande souplesse, ils offrent un excellent maintien et un grand confort. Sa grande densité lui confère une grande durée de vie et une bonne résilience.  Il est idéal pour les personnes âgées, souffrant de mal de dos, de surpoids ou ayant une forte corpulence.",
                "desc_caracteristique":Array("Grande densité","Grande longévité","Très souple","Adapté aux personnes souffrant de mal de dos","Adapté aux personnes en surpoids","Adapté aux personnes âgées"),
                "img": "img prod 2"
              },
              {
              "pord": "SANDWICH LATEX",
              "desc": "Pas des descriprion pour le moment",
              "desc_caracteristique":Array("1","2","3","4"),
              "img": "img prod 1"
              },
              {
              "pord": "SANDWICH SUPERIEUR",
              "desc": "Pas des descriprion pour le moment",
              "desc_caracteristique":Array("1","2","3","4"),
              "img": "img prod 1"
              }
            ]
          },
          {
            "stion": "Ferme",
            "produit": [
              {
              "pord": "CONFORT SUPERIEUR",
              "desc": "Pas des descriprion pour le moment",
              "desc_caracteristique":Array("1","2","3","4"),
              "img": "img prod 1"
              },
              {
                "pord": "DUO SUPERIEUR",
                "desc": "Pas des descriprion pour le moment",
                "desc_caracteristique":Array("1","2","3","4"),
                "img": "img prod 1"
              },
              {
                "pord": "CONFORT LATEX",
                "desc": "Pas des descriprion pour le moment",
                "desc_caracteristique":Array("1","2","3","4"),
                "img": "img prod 1"
              }
            ]
          },
          {
            "stion": "Très Ferme",
            "produit": [
              {
                "pord": "DUO",
                "desc": "Pas des descriprion pour le moment",
                "desc_caracteristique":Array("1","2","3","4"),
                "img": "img prod 1"
              },
              {
                "pord": "SANDWICH",
                "desc": "Composé de deux couches de surfaces plus souples et d’une couche interne très ferme  (25% SGB + 50% SGC + 25% SGB), le matelas Sandwich de VITAFOAM offre une sensation de fermeté et de maintien du corps tout en offrant un confort d’appoint en surface. Un matelas idéal pour les parents qui dorment parfois avec leurs enfants.",
                "desc_caracteristique":Array("Equilibre entre souplesse et maintien"),
                "img": "img prod 1"
              },
              {
                "pord": "CONFORT",
                "desc": "Pas des descriprion pour le moment",
                "desc_caracteristique":Array("1","2","3","4"),
                "img": "img prod 1"
              },
              {
                "pord": "SGC",
                "desc": "Les matelas SGC de VITAFOAM sont les plus fermes de sa gamme. D’une grande densité il offre un support adapté aux personnes souffrant de mal de dos, de surpoids ou ayant une forte corpulence.",
                "desc_caracteristique":Array("Densité élevé","Très ferme","Adapté aux personnes souffrant de mal de dos","Adapté aux personnes en surpoids"),
                "img": "img prod 1"
              }
            ]
          }
        ]
      }
    ];

  public sensation = [];
  public sensation_par_defaut; /*Pour avoir la valeur pr defaut de sesation moyenne qui est checked par defaut*/
  public produit = [];
  public produitDesc = [];
  constructor() { }
  
  //Pour les enfant
  public getProblemeEnfant(){
    let pblm = [];
    for(let i = 0; i< this.enfant.length; i++ ){
      pblm.push(this.enfant[i]);
    }
    return pblm;
  }
  //Pour la personne agee
  public getProblemePersoneeAgee(){
    let pblm = [];
    for(let i = 0; i< this.personneAgee.length; i++ ){
      pblm.push(this.personneAgee[i]);
    }
    return pblm;
  }
  //Pour la femme aceinte
  public getProblemeFemmeAceinte(){
    let pblm = [];
    for(let i = 0; i< this.femmenAceinte.length; i++ ){
      pblm.push(this.femmenAceinte[i]);
    }
    return pblm;
  }
  //Pour femme allitée
  public getProblemePersonneAllite(){
    let pblm = [];
    for(let i = 0; i< this.personneAllite.length; i++ ){
      pblm.push(this.personneAllite[i]);
    }
    return pblm;
  }
  //Pour l'adulte
  public getProblemeAdulte(){
    let pblm = [];
    for(let i = 0; i< this.adulte.length; i++ ){
      pblm.push(this.adulte[i]);
    }
    return pblm;
  }

  async loadingPage(loadingController:LoadingController){
    const loading = await loadingController.create({
      message: 'Please wait...',
      duration: 500,
      //message: 'Click the backdrop to dismiss early...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true,
      mode:"ios"
    });

    await loading.present();
  }

}
