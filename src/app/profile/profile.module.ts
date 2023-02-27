import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { CourceLstComponent } from './cource-lst/cource-lst.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { FeatureModule } from '../feature/feature.module';

@NgModule({
  declarations: [ProfileComponent, CourceLstComponent],
  imports: [CommonModule, MatExpansionModule, FeatureModule, MatButtonModule],
  exports: [ProfileComponent],
})
export class ProfileModule {}
