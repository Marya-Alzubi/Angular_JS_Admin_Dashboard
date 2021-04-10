// creating a module
var app = angular.module('app', ['ui.router']);
// UI Routing
app.config(function ($stateProvider) {
    $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'partials/dashboard.html',
                controller: 'adminInfoController'
            })
            .state('parents', {
                url: '/parents',
                templateUrl: 'partials/parents.html',
                controller: 'parentController'
            })
            .state('teachers', {
                url: '/teachers',
                templateUrl: 'partials/teachers.html',
                controller: 'teacherController'
            })
            .state('students', {
                url: '/students',
                templateUrl: 'partials/students.html',
                controller: 'studentController'
            })
            .state('admins', {
                url: '/admins',
                templateUrl: 'partials/admins.html',
                controller: 'adminController'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'partials/contact.html'
            });
});
// Admin Info Controller & its scope
app.controller('adminInfoController', function ($scope) {
    $scope.fname = 'test';
    $scope.lname = 'test';
    $scope.email = 'admin@blulogix.com';
    $scope.phone = '077 777 7777';
    $scope.address = 'Amman';
//    change the selected li css in navbar
    $scope.changeColor = function () {
        $scope.test = test;
    };
});
// Parent Controller & its scope
app.controller('parentController', function ($scope) {
    //    counter for ID column
    let counter = 1;
//    parent scope for data table 
    $scope.parents = [
        {id: counter++, fname: 'Jhon', lname: 'Alder', phone: '741258', address: 'Turento, Canada'},
        {id: counter++, fname: 'Ahmad', lname: 'Rumman', phone: '741258', address: 'Salt, Jordan'},
        {id: counter++, fname: 'Adam', lname: 'Samra', phone: '741258', address: 'South Africa'},
        {id: counter++, fname: 'Mohammad', lname: 'Yacoub', phone: '741258', address: 'Amman, Jordan'},
    ];
//    add new Parent scope to the table
    $scope.addParent = function () {
        $scope.parents.push({
            id: counter++,
            fname: $scope.newParent.fname,
            lname: $scope.newParent.lname,
            phone: $scope.newParent.phone,
            address: $scope.newParent.address,
        });
    };
//    toggle to show and hide add new parent form
    $scope.myVar = false;
    $scope.toggle = function () {
        $scope.myVar = !$scope.myVar;
    };
});
// Teacher Controller & its scope
app.controller('teacherController', function ($scope) {
//    counter for ID column
    let counter = 1;
    //    teacher scope for data table 
    $scope.teachers = [
        {id: counter++, fname: 'Alaa', lname: 'Mohammad', phone: '741258', email: 'alaa@blulogix.com', address: 'Amman, Jordan', class: 'A', material: 'Back End'},
        {id: counter++, fname: 'Salameh', lname: 'Yasin', phone: '741258', email: 'salameh@blulogix.com', address: 'LA, America', class: 'A', material: 'Back End'},
        {id: counter++, fname: 'Mohammad', lname: 'Shwiki', phone: '741258', email: 'mohammad@blulogix.com', address: 'Turento, Canada', class: 'B', material: 'Front End'},
        {id: counter++, fname: 'Khadejah', lname: 'Hamdan', phone: '741258', email: 'khadejah@blulogix.com', address: 'Beruit, Lebanon', class: 'B', material: 'Front End'},
    ];
    //    add new teacher scope to the table
    $scope.addTeacher = function () {
        $scope.teachers.push({
            id: counter++,
            fname: $scope.newTeacher.fname,
            lname: $scope.newTeacher.lname,
            phone: $scope.newTeacher.phone,
            email: $scope.newTeacher.email,
            address: $scope.newTeacher.address,
            class: $scope.newTeacher.class,
            material: $scope.newTeacher.class,
        });
    };
    //    toggle to show and hide add new teacher form
    $scope.myVar = false;
    $scope.toggle = function () {
        $scope.myVar = !$scope.myVar;
    };
});
// Student Controller & its scope
app.controller('studentController', function ($scope) {
    //    counter for ID column
    let counter = 1;
    //    student scope for data table 
    $scope.students = [
        {id: counter++, fname: 'Marya', lname: 'Alzubi', phone: '741258', email: 'marya@blulogix.com', address: 'Amman, Jordan', class: 'B', material: 'Back end'},
        {id: counter++, fname: 'Tala', lname: 'Mohammad', phone: '741258', email: 'tala@blulogix.com', address: 'Amman, Jordan', class: 'B', material: 'Back end'},
        {id: counter++, fname: 'Feras', lname: 'Dyab', phone: '741258', email: 'feras@blulogix.com', address: 'Amman, Jordan', class: 'B', material: 'Back end'},
        {id: counter++, fname: 'Lojain', lname: 'Nahhas', phone: '741258', email: 'lojain@blulogix.com', address: 'Amman, Jordan', class: 'B', material: 'Back end'},
    ];
    //    add new Student scope to the table
    $scope.addStudent = function () {
        $scope.students.push({
            id: counter++,
            fname: $scope.newStudent.fname,
            lname: $scope.newStudent.lname,
            phone: $scope.newStudent.phone,
            email: $scope.newStudent.email,
            address: $scope.newStudent.address,
            class: $scope.newStudent.class,
            material: $scope.newStudent.class,
        });
    };
    //    toggle to show and hide add new student form
    $scope.myVar = false;
    $scope.toggle = function () {
        $scope.myVar = !$scope.myVar;
    };
});
app.controller('adminController', function ($scope) {
    //    counter for ID column
    let counter = 1;
    //    admin scope for data table 
    $scope.admins = [
        {id: counter++, fname: 'Yousef', lname: 'Shamieh', phone: '741258', email: 'shamieh@bluloix.com', address: 'Amman, Jordan', username: 'shamieh'},
        {id: counter++, fname: 'Mohammad' , lname: 'Alwadi', phone: '741258', email: 'wadi@bluloix.com', address: 'Amman, Jordan', username: 'wadi'},
    ];
    //    add new Admin scope to the table
    $scope.addAdmin = function () {
        $scope.admins.push({
            id: counter++,
            fname: $scope.newAdmin.fname,
            lname: $scope.newAdmin.lname,
            phone: $scope.newAdmin.phone,
            email: $scope.newAdmin.email,
            address: $scope.newAdmin.address,
            username: $scope.newAdmin.class,
        });
    };
    //    toggle to show and hide add new admin form
    $scope.myVar = false;
    $scope.toggle = function () {
        $scope.myVar = !$scope.myVar;
    };
});







