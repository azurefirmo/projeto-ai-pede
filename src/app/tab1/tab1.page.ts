import { Bakery, BakeryService } from './../services/bakery.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public listBakery: Bakery[] = [];
  public isLoading = true;
  public errorMessage = '';

  constructor(private navCtrl: NavController, private bakeryService: BakeryService) {
    this.bakeryService.getBakeries().subscribe({
      next: data => {
        this.listBakery = data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = 'Não foi possível carregar as padarias. Tente novamente.';
      }
    });
  }

  bakeryMenu(id: number): void {
    this.navCtrl.navigateForward('/bakery-detail', { queryParams: { id } });
  }


}
