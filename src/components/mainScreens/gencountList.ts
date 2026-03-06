import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {LucideAngularModule, CircleUserRound, UserRoundPlus} from 'lucide-angular';
import {Gencount} from '../../interfaces';
import {GencountService} from '../services/gencount.service';

type GencountCard = {
  id: number;
  name: string;
  totalSpent: number;
};

@Component({
  selector: 'app-gencount-list',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="page">
      <header class="topbar">
        <div class="logo">
          <img
            src="imgs/logo.png"
            alt="Logo del sito"
            style="width: 100%; height: 100%; object-fit: cover;"
          />
        </div>
        <div class="title">I MIEI GENCOUNTS</div>

        <div class="top-icons">
          <button class="icon-btn" (click)="goCreate()" title="Crea gencount">+</button>
          <button class="icon-btn" (click)="goProfile()" title="Profile">
            <lucide-icon [img]="UserRoundPlus" />
          </button>
          <button class="icon-btn" (click)="addFriend()" title="Friend">
            <lucide-icon [img]="CircleUserRound" />
          </button>
        </div>
      </header>

      <main class="list">
        @for (g of gencounts(); track g.gencountId) {
          <button class="card" (click)="open(g.gencountId)">
            <div class="card-center">
              <div class="card-title">{{ g.name }}</div>
              <!--<div class="card-sub">
                Soldi totali spesi al momento: {{ g.totalSpent | number: '1.2-2' }} €
              </div>-->
            </div>

            <div class="card-plus">+</div>
          </button>
        }
      </main>
    </div>
  `,
  styles: [
    `
      .page {
        min-height: 100vh;
        background: #ededed;
        padding: 24px;
      }
      .topbar {
        background: #0f5e74;
        border-radius: 12px;
        height: 90px;
        display: flex;
        align-items: center;
        padding: 0 18px;
        gap: 18px;
        color: #fff;
      }
      .logo {
        width: 100px;
        height: 60px;
      }

      .title {
        flex: 1;
        text-align: center;
        font-weight: bold;
        margin-left: 25px;
      }

      .top-icons {
        margin-left: auto;
        display: flex;
        gap: 10px;
      }
      .icon-btn {
        width: 46px;
        height: 46px;
        border-radius: 10px;
        border: none;
        background: transparent;
        color: #0b0b0b;
        font-size: 28px;
        cursor: pointer;
      }

      .list {
        margin-top: 26px;
        display: flex;
        flex-direction: column;
        gap: 18px;
      }
      .card {
        width: 100%;
        background: #0f5e74;
        border: 2px solid #083d4a;
        border-radius: 16px;
        padding: 22px 18px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
      }
      .card-center {
        text-align: center;
        flex: 1;
        color: #fff;
      }
      .card-title {
        font-size: 18px;
        font-weight: 700;
      }
      .card-sub {
        margin-top: 6px;
        font-size: 14px;
        opacity: 0.9;
      }
      .card-plus {
        color: #0b0b0b;
        font-size: 34px;
        font-weight: 700;
        padding-left: 18px;
      }
    `,
  ],
})
export class GencountListComponent {
  gencounts = signal<Gencount[]>([]);
  constructor(
    private router: Router,
    private gencountService: GencountService,
  ) {
    this.gencountService.showGencounts().subscribe({
      next: (data) => {
        this.gencounts.set(data);
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  /*open(id: number) {
    console.log('open gencount', id);
    // TODO: this.router.navigate(['/gencount', id]);
  }*/
  open(id: number) {
    this.router.navigate(['/gencount', id], {
      state: {
        gencountId: this.gencounts().map(g=>g.gencountId).find(gId => gId == id)
      },
    });
  }

  /*goCreate() {
    console.log('go create gencount');
    // TODO: this.router.navigate(['/gencount/new']);
  }*/
  goCreate() {
    this.router.navigate(['/gencount/new']);
  }

  protected addFriend() {
    console.log('add friend');
    //TODO: this.router.navigate(['/gencount-add-friend']);
  }

  protected goProfile() {
    console.log('go profile');
    // TODO: this.router.navigate(['/gencount-goProfile']);
  }

  protected readonly UserRoundPlus = UserRoundPlus;
  protected readonly CircleUserRound = CircleUserRound;
}
