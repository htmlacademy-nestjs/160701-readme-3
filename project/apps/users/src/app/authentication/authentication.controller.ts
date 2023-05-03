import { Controller } from '@nestjs/common';
import { AuthenticationService } from './authentication.service.js';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}
}
