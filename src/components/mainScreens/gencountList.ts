import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {LucideAngularModule, CircleUserRound, UserRoundPlus}  from 'lucide-angular';

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
            <img src="imgs/logo.png" alt="Logo del sito" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div class="title">GENCOUNTS</div>

        <div class="top-icons">
          <button class="icon-btn" (click)="goCreate()" title="Crea gencount">+</button>
          <button class="icon-btn" (click)="addFriend()" title="Friend">  <lucide-icon name="user-round-plus"> </lucide-icon></button>
          <button class="icon-btn" (click)="goProfile()" title="Profile"> <lucide-icon name="circle-user-round"></lucide-icon></button>
        </div>
      </header>

      <main class="list">
        @for (g of gencounts; track $index) {
          <button class="card" (click)="open(g.id)">
            <div class="card-center">
              <div class="card-title">Nome gencount: {{ g.name }}</div>
              <div class="card-sub">Soldi totali spesi al momento: {{ g.totalSpent | number:'1.2-2' }} €</div>
            </div>

            <div class="card-plus">+</div>
          </button>
        }
      </main>
    </div>
  `,
  styles: [`
    .page { min-height: 100vh; background: #ededed; padding: 24px; }
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
    .logo { width: 100px; height: 60px; }
    .title { font-weight: 800; letter-spacing: 1px; }
    .top-icons { margin-left: auto; display: flex; gap: 10px; }
    .icon-btn {
      width: 46px; height: 46px;
      border-radius: 10px;
      border: none;
      background: transparent;
      color: #0b0b0b;
      font-size: 28px;
      cursor: pointer;
    }

    .list { margin-top: 26px; display: flex; flex-direction: column; gap: 18px; }
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
    .card-center { text-align: center; flex: 1; color: #fff; }
    .card-title { font-size: 18px; font-weight: 700; }
    .card-sub { margin-top: 6px; font-size: 14px; opacity: .9; }
    .card-plus { color: #0b0b0b; font-size: 34px; font-weight: 700; padding-left: 18px; }
  `]
})
export class GencountListComponent {
  gencounts: GencountCard[] = [
    { id: 1, name: 'Viaggio', totalSpent: 120.50 },
    { id: 2, name: 'Cena', totalSpent: 80.00 },
    { id: 3, name: 'Vacanza', totalSpent: 999.99 },
    { id: 4, name: 'Casa', totalSpent: 210.10 },
  ];

  constructor(private router: Router) {}

  open(id: number) {
    console.log('open gencount', id);
    // TODO: this.router.navigate(['/gencount', id]);
  }

  goCreate() {
    console.log('go create gencount');
    // TODO: this.router.navigate(['/gencount-create']);
  }

  protected addFriend() {
    console.log('add friend');
    //TODO: this.router.navigate(['/gencount-add-friend']);
  }

  protected goProfile() {
    console.log('go profile');
    // TODO: this.router.navigate(['/gencount-goProfile']);
  }
}
