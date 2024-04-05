import { NgModule, Provider } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { ApiModule, Configuration } from './api';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpParameterCodec } from '@angular/common/http';
import { AuthInterceptor } from '../http/AuthInterceptor';

// const provider: Provider = {
//   provide: Configuration,
//   useFactory: (authService: AuthService) =>
//     new Configuration({
//       withCredentials: true,
//       credentials: {
//         basic: authService.getCred.bind(authService),
//       },
//     }),
//   deps: [AuthService],
//   multi: false,
// };

class Encoder implements HttpParameterCodec
{
  encodeKey(key: string): string {
    console.log("encode")
    return atob(key)
  }
  encodeValue(value: string): string {
    console.log("encode")
    return atob(value)
  }
  decodeKey(key: string): string {
    console.log("encode")
    return btoa(key)
  }
  decodeValue(value: string): string {
    console.log("encode")
    return btoa(value)
  }

}


@NgModule({
  imports: [HttpClientModule, ApiModule],
  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },

  ],
})
export class AppModule {}
