marcangular.controller('mainCtrl', function($scope,carousel,categories,more_visited,services,$uibModal,CommonService,toastr) {

    // Shop
    localStorage.removeItem('province');
    localStorage.removeItem('shop');
    localStorage.removeItem('val');
    localStorage.removeItem('category');
    localStorage.removeItem('carousel');
    
    //////////////
    // CAROUSEL
    ////////////////
    $scope.myInterval = 4000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.slides = carousel;

    $scope.click_carousel = function(event){
      localStorage.removeItem('province');
      localStorage.removeItem('shop');
      localStorage.removeItem('val');
      localStorage.removeItem('category');

      var car = event.target.id;
      localStorage.setItem('carousel', car);

      location.href = '#/shop';
    }



    ///////////////
    // CATEGORIES
    /////////////////
    var offset = 0;
    $scope.categories = categories;


    // Count total categories
    services.get('home','count_cat').then(function(data){
      localStorage.setItem('count_cat', data.cuenta);
    })
    var cuenta_cat = localStorage.getItem('count_cat');
    localStorage.removeItem('count_cat');


    // Click on prev
    $scope.prev = function(){
      offset -= 4;
      if(offset<0){
          offset += 4;
      }

      services.get('home','category',offset).then(function(data){
        $scope.categories = data;
      })
    }


    // Click on next
    $scope.next = function(){
      offset += 4;
      if(offset>=cuenta_cat){
          offset -= 4;
      }

      services.get('home','category',offset).then(function(data){
        $scope.categories = data;
      })
    }
    
    
    // Select category
    $scope.select_cat = function(event){
      localStorage.removeItem('carousel');
      localStorage.removeItem('province');
      localStorage.removeItem('shop');
      localStorage.removeItem('val');

      var cat = event.target.id;
      localStorage.setItem('category', cat);

      services.get('home','cat_views',cat);

      location.href = '#/shop';
    }



    /////////////
    // MORE VISITED
    /////////////////
    var offset2 = 0;
    $scope.byviews = more_visited;


    // Count total products
    services.get('home','count_prods').then(function(data){
      localStorage.setItem('count_prods', data.cuenta);
    })
    var cuenta_prods = localStorage.getItem('count_prods');
    localStorage.removeItem('count_prods');


    // Click on prev
    $scope.prev2 = function(){
      offset2 -= 4;
      if(offset2<0){
          offset2 += 4;
      }

      services.get('home','views',offset2).then(function(data){
        $scope.byviews = data;
      })
    }


    // Click on next
    $scope.next2 = function(){
      offset2 += 4;
      if(offset2>=cuenta_prods){
          offset2 -= 4;
      }

      services.get('home','views',offset2).then(function(data){
        $scope.byviews = data;
      })
    }

    // Select product
    $scope.select_prod = function(event){
      var id = event.target.id;
      localStorage.setItem('infoprod', id);

      location.href = '#/details';
    }


});