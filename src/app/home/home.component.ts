import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }
  routeTo() {
    this.router.navigateByUrl('/login')
  }
  routeToRegister() {
    this.router.navigateByUrl('/register')
  }
  routeToCandidate(){
    this.router.navigateByUrl('/candidate-login');
  }
  routeToCandidateRegister(){
    this.router.navigateByUrl('/candidate-register');
  }
  ngOnInit(): void {
  }

}
