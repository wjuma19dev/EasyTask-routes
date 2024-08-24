import {
  Component,
  Input,
  OnInit,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { UsersService } from '../users.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {
  userId = input.required<string>();
  usersSvc = inject(UsersService);

  username = computed(
    () => this.usersSvc.users.find((user) => user.id === this.userId())?.name,
  );

  ngOnInit(): void {}
}
