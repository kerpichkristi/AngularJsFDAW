app.controller('productsCtrl', function($scope) {
    $scope.product = [
        { "title": "Cremosso Danone", "price": 8.50, "image": "resources/images/products-photo/3af9a04340a7354cd70171912586dc4e.png" },
        { "title": "Danonino", "price": 21, "image": "resources/images/products-photo/8d23402d1077e00cad2ca0b7f9ba8d03.png" },
        { "title": "Unt casuta mea classic", "price": 21, "image": "resources/images/products-photo/9eb06d7206761c87dc65f14b8577ff66.jpg" },
        { "title": "Lapte sticla 1l", "price": 13, "image": "resources/images/products-photo/030e1b19e509367f49631f0462e05a15.png" },
        { "title": "Brinza 500g", "price": 28, "image": "resources/images/products-photo/121b2629da63dd9384fae7b5e3f6b7ca.png" },
        { "title": "Actimel", "price": 50, "image": "resources/images/products-photo/516d91690a27c3b0146391f6a79c4e70.jpg" },
        { "title": "Lapte paket 1L", "price": 9, "image": "resources/images/products-photo/a47224c93ae1e35a48453e12aaff2abc.jpeg" },
        { "title": "Cascaval Olanda", "price": 35, "image": "resources/images/products-photo/3757094ffedc51ba140f9883f3f3e03c.png" },
        { "title": "Chefir sticla", "price": 16, "image": "resources/images/products-photo/a5ff7fd0b719b8bf11e36cb58984f252.jpg" },
        { "title": "Delicios Danone", "price": 6.41, "image": "resources/images/products-photo/b8dd4c5accd664703020a24306153107.png" },
        { "title": "Big lapik", "price": 6.15, "image": "resources/images/products-photo/b6775d915309e3d5dc888174f4b320a5.jpg" },
        { "title": "Disney Danone", "price": 7, "image": "resources/images/products-photo/ce81c2f9c439c502ecb1cf93b3de5f90.jpg" },
        { "title": "Big Lapic Dulce", "price": 6.66, "image": "resources/images/products-photo/d01f9f6210e7b6fc1fd9cc6fb47b4239.jpg" },
        { "title": "Smintina", "price": 24.24, "image": "resources/images/products-photo/de07a74b1fbe7f24fcd63f575782ee57.png" },
        { "title": "Smintina Dulce", "price": 4, "image": "resources/images/products-photo/ed1f81178f459c239e89cb6857ad0440.jpg" },
        { "title": "Actvia", "price": 18, "image": "resources/images/products-photo/f11eb3b671639d49694157b731bcee7d.jpg" }
    ];

    $scope.inputLogin = "";
    $scope.inputPass = "";

    $scope.login = "admin";
    $scope.password = "admin";
    $scope.isSignIn = false;
    $scope.editing = false;


    $scope.signIn = function() {
        if ($scope.inputLogin === $scope.login) {
            if ($scope.inputPass == $scope.password) {
                $scope.isSignIn = true;
                document.getElementById('myModal').style.display = "none"
            }
        }
    };

    $scope.removeProduct = function(itemTitle) {
        const index = $scope.product.findIndex(x => x.title === itemTitle);

        $scope.product.splice(index, 1);

        console.log(index);
    }

    $scope.addNewProduct = function() {
        newSmartphone = {
            title: "Unknown",
            price: 0,
            image: "resources/images/banners/a7bc4136738cee30d56d446fdf37d469.jpg"
        }

        $scope.product.push(newProduct);
    }


    $scope.orderByMe = function(item) {
        $scope.myOrderBy = item;
        $scope.reverseOrder();
    }

    $scope.myReverseBy = false;
    $scope.reverseOrder = function() {
        $scope.myReverseBy = !($scope.myReverseBy);
    }

    $scope.minValue = 0;
    $scope.maxValue = 1000;

    $scope.resetFilters = function() {
        $scope.myOrderBy = "";
        $scope.myReverseBy = false;
        $scope.minValue = 0;
        $scope.maxValue = 1000;
    }

    $scope.myFilter = function(value) {
        return (value.price >= $scope.minValue && value.price <= $scope.maxValue);
    }
});
