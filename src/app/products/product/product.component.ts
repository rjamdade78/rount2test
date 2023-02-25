import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDataService } from 'src/app/product-data.service';
import { Iuser } from 'src/app/common/user'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  productData: Iuser[] = []
  // image: any;
  // imageUrl: any;
  productimg: any;
  constructor(private router: Router, private productDataService: ProductDataService){
    
  }

  ngOnInit(): void {
    this.productDataService.getproduct()
      .subscribe((res) => {
        this.productData = res
        // res.map((ele) => {
        //  const image =  ele.Images.split('|')
        //   const imageUrl = `${ele.ListImagePath}${image[0]}`
        //   this.productimg = imageUrl
        // })
        // console.log(res)
      })
  }

  logout(){
    this.router.navigate(['/login'])
  }
  feedback(){
    this.router.navigate(['/Feedback/feedback'])
  }

  orderhandler: string = ''
  disorder: boolean = true;
  high: boolean = true

  hightolow(headername: string){
    this.disorder = !this.disorder
    this.orderhandler = headername
    this.high = !this.high
  }
  

}
