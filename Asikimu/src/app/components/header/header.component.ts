import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { concat } from 'rxjs';
import { HeaderService } from 'src/app/services/header.service';

// @UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartAmount: number = 0;

  isLoggedIn: boolean = false;
  showButtons: boolean = true;

  constructor(
    private header: HeaderService,
  ) { }

  ngOnInit() {

    this.header.showHeaderButtons$.subscribe(visible => this.showButtons = visible);
  }
}
