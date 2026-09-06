import { BakeryMenuItem, BakeryService } from './../services/bakery.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-bakery-detail',
  templateUrl: './bakery-detail.page.html',
  styleUrls: ['./bakery-detail.page.scss'],
})
export class BakeryDetailPage {

  public listBakery: BakeryMenuItem[] = [];
  public isLoading = true;
  public errorMessage = '';
  constructor(private bakeryService: BakeryService, private route: ActivatedRoute) {
    const bakeryId = Number(this.route.snapshot.queryParamMap.get('id'));
    this.bakeryService.getMenuBakeries(bakeryId).subscribe({
      next: data => {
        this.listBakery = data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = 'Não foi possível carregar o menu desta padaria.';
      }
    });
  }
}
