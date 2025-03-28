import { Injectable } from '@nestjs/common';

@Injectable()
export class SubscriptionsService {
  constructor() {}

  findAll() {
    return [
      {
        id: 1,
        name: 'Abonnement mensuel',
        description: 'Recevez 4 kits de recettes chaque mois.',
        price: 29.99,
        image:
          'https://img.hellofresh.com/w_3840,q_auto,f_auto,c_limit,fl_lossy/hellofresh_website/us/lp/meals/lp-pictures-082019-roasted-veggie-harvest-bowl.jpg',
      },
      {
        id: 2,
        name: 'Abonnement trimestriel',
        description: 'Recevez 12 kits de recettes tous les 3 mois.',
        price: 79.99,
        image:
          'https://assets.epicurious.com/photos/59639501df48bf035a7f5937/16:9/w_2560%2Cc_limit/Chocolate-Covered-Grapes-070620170637135.jpg',
      },
      {
        id: 3,
        name: 'Abonnement annuel',
        description: 'Recevez 48 kits de recettes sur toute l’année.',
        price: 299.99,
        image:
          'https://www.allsubscriptionboxes.co.uk/wp-content/uploads/2023/02/scoff_new-33-300x200.jpg',
      },
    ];
  }
}
