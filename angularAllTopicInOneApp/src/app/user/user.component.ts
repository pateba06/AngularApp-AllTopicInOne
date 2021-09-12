import { Component, Input } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() user: { name: string; status: string };
  @Input() id: number;

  constructor(private userService: UserService) {}

  onupdateStatus(status: string) {
    this.userService.updateStatus(this.id, status);
  }
}
