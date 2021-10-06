import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../core/services/auth.service';

import { ActivatedRoute, Router } from '@angular/router';

import { StoreService } from 'src/app/core/services/storage.service';
import { IDataResponse } from 'src/app/core/models/auth.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/**
 * Login component
 */
export class LoginComponent implements OnInit {
  title = 'CodeSandbox';
  options = {
    background: {
      color: {
          value: '#0d47a1'
      }
  },
  fpsLimit: 60,
  interactivity: {
      detectsOn: 'canvas',
      events: {
          onClick: {
              enable: true,
              mode: 'push'
          },
          onHover: {
              enable: true,
              mode: 'repulse'
          },
          resize: true
      },
      modes: {
          bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40
          },
          push: {
              quantity: 4
          },
          repulse: {
              distance: 200,
              duration: 0.4
          }
      }
  },
  particles: {
      color: {
          value: '#ffffff'
      },
      links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
      },
      collisions: {
          enable: true
      },
      move: {
          direction: 'none',
          enable: true,
          outMode: 'bounce',
          random: false,
          speed: 6,
          straight: false
      },
      number: {
          density: {
              enable: true,
              value_area: 800
          },
          value: 80
      },
      opacity: {
          value: 0.5
      },
      shape: {
          type: 'circle'
      },
      size: {
          random: true,
          value: 5
      }
  },
  detectRetina: true
  };
  loginForm: FormGroup;
  submitted = false;
  error = '';
  returnUrl: string;
  errorResponse: string;

  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private storeService: StoreService,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      code: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    // reset login status
    // this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      const userInfo = {
        username: this.f.code.value,
        password: this.f.password.value,
      };
      // if (this.f.code.value === 'admin' && this.f.password.value === 'admin') {
      //   this.router.navigate(['/']);
      // }
      this.authenticationService.login(userInfo).subscribe(
        (user: IDataResponse) => {
          this.errorResponse = '';
          this.storeService.setUserData(user.data);
          if (this.authenticationService.returnUrl) {
            this.router.navigate([this.authenticationService.returnUrl.url], {
              queryParams: this.authenticationService.returnUrl.queryParams,
            });
          } else {
            this.router.navigate(['/']);
          }
        },
        () => {
          this.onUserSigninError();
        }
      );
    }
  }

  onUserSigninError() {
    this.errorResponse = 'Tài khoản hoặc mật khẩu không chính xác';
  }
}
