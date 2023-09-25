import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '@/modules/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { config } from '@/config';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    // forwardRef(() => UserModule),
    forwardRef(() => UserModule),
    JwtModule.register({
      secret: config.security.jwt_secret,
      signOptions: {
        expiresIn: config.security.jwt_expires_in,
      },
    }),
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
