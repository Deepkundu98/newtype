(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.site-container {\n    display: flex;\n    min-height: 100vh;\n    flex-direction: column;\n  }\n  \n.dashboard-container {\n    flex: 1;\n}\n  \n.villa-info {\n  margin-top: 50px;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQix1QkFBdUI7R0FDeEI7O0FBRUg7SUFDSSxRQUFRO0NBQ1g7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztDQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5zaXRlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIFxuLmRhc2hib2FyZC1jb250YWluZXIge1xuICAgIGZsZXg6IDE7XG59XG5cbi52aWxsYS1pbmZvIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site-container\">\n\n    <app-header></app-header>\n\n    <div class=\"container dashboard-container\">\n        <div class=\"villa-info\">\n            <app-summary></app-summary>\n        </div>\n        \n        <app-standings></app-standings>\n    </div>\n\n    <app-footer></app-footer>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'aston-villa-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _standings_standings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./standings/standings.component */ "./src/app/standings/standings.component.ts");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./summary/summary.component */ "./src/app/summary/summary.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _standings_standings_component__WEBPACK_IMPORTED_MODULE_7__["StandingsComponent"],
                _summary_summary_component__WEBPACK_IMPORTED_MODULE_8__["SummaryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n    height: 50px;\n    background-color: #95BFE5;\n    padding-top: 10px;\n}\n\na {\n    text-decoration: none;\n    color: #6c757d;\n}\n\na:hover {\n    text-decoration: underline;\n    color: #6c757d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLDJCQUEyQjtJQUMzQixlQUFlO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk1QkZFNTtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjNmM3NTdkO1xufVxuXG5hOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjb2xvcjogIzZjNzU3ZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"container\">\n        <span class=\"text-muted\">All Rights Reserved 2019 <a href=\"https://github.com/wkrzywiec\">Wojciech Krzywiec</a></span>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n    top: 0;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksT0FBTztJQUNQLFlBQVk7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <nav class=\"navbar navbar-dark bg-claret\">\n        <a class=\"navbar-brand\" href=\"#\">\n          <img src=\"assets/images/logo/as_logo.svg\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n          Aston Villa Dashboard\n        </a>\n    </nav>\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/service/football-data.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/football-data.service.ts ***!
  \**************************************************/
/*! exports provided: FootballDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootballDataService", function() { return FootballDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FootballDataService = /** @class */ (function () {
    function FootballDataService(http) {
        this.http = http;
        //private standingURL = '';
        this.standingURL = 'https://apifootball.com/api/?APIkey=9312f9173fad7330dc780c926a665525c9023c3c4433416130766a602be7c83e&action=get_standings&league_id=63';
    }
    FootballDataService.prototype.retrieveAllStandings = function () {
        return this.http.get(this.standingURL);
    };
    FootballDataService.prototype.retrieveTestStandings = function () {
        return [
            {
                "team_name": "Norwich City",
                "overall_league_position": "1",
                "overall_league_payed": "30",
                "overall_league_W": "16",
                "overall_league_D": "9",
                "overall_league_L": "5",
                "overall_league_GF": "57",
                "overall_league_GA": "39",
                "overall_league_PTS": "57"
            },
            {
                "team_name": "Leeds United",
                "overall_league_position": "2",
                "overall_league_payed": "30",
                "overall_league_W": "17",
                "overall_league_D": "6",
                "overall_league_L": "7",
                "overall_league_GF": "50",
                "overall_league_GA": "34",
                "overall_league_PTS": "57"
            },
            {
                "team_name": "Sheffield United",
                "overall_league_position": "3",
                "overall_league_payed": "31",
                "overall_league_W": "16",
                "overall_league_D": "7",
                "overall_league_L": "8",
                "overall_league_GF": "53",
                "overall_league_GA": "34",
                "overall_league_PTS": "55"
            },
            {
                "team_name": "West Bromwich Albion",
                "overall_league_position": "4",
                "overall_league_payed": "29",
                "overall_league_W": "14",
                "overall_league_D": "8",
                "overall_league_L": "7",
                "overall_league_GF": "59",
                "overall_league_GA": "38",
                "overall_league_PTS": "50"
            },
            {
                "team_name": "Middlesbrough",
                "overall_league_position": "5",
                "overall_league_payed": "29",
                "overall_league_W": "13",
                "overall_league_D": "11",
                "overall_league_L": "5",
                "overall_league_GF": "34",
                "overall_league_GA": "22",
                "overall_league_PTS": "50"
            },
            {
                "team_name": "Bristol City",
                "overall_league_position": "6",
                "overall_league_payed": "29",
                "overall_league_W": "13",
                "overall_league_D": "8",
                "overall_league_L": "8",
                "overall_league_GF": "37",
                "overall_league_GA": "29",
                "overall_league_PTS": "47"
            },
            {
                "team_name": "Derby County",
                "overall_league_position": "7",
                "overall_league_payed": "29",
                "overall_league_W": "13",
                "overall_league_D": "8",
                "overall_league_L": "8",
                "overall_league_GF": "40",
                "overall_league_GA": "35",
                "overall_league_PTS": "47"
            },
            {
                "team_name": "Aston Villa",
                "overall_league_position": "8",
                "overall_league_payed": "31",
                "overall_league_W": "10",
                "overall_league_D": "14",
                "overall_league_L": "7",
                "overall_league_GF": "56",
                "overall_league_GA": "49",
                "overall_league_PTS": "44"
            },
            {
                "team_name": "Birmingham City",
                "overall_league_position": "9",
                "overall_league_payed": "30",
                "overall_league_W": "10",
                "overall_league_D": "13",
                "overall_league_L": "7",
                "overall_league_GF": "45",
                "overall_league_GA": "36",
                "overall_league_PTS": "43"
            },
            {
                "team_name": "Hull City",
                "overall_league_position": "10",
                "overall_league_payed": "30",
                "overall_league_W": "12",
                "overall_league_D": "7",
                "overall_league_L": "11",
                "overall_league_GF": "43",
                "overall_league_GA": "38",
                "overall_league_PTS": "43"
            },
            {
                "team_name": "Blackburn Rovers",
                "overall_league_position": "11",
                "overall_league_payed": "30",
                "overall_league_W": "11",
                "overall_league_D": "10",
                "overall_league_L": "9",
                "overall_league_GF": "42",
                "overall_league_GA": "46",
                "overall_league_PTS": "43"
            },
            {
                "team_name": "Nottingham Forest",
                "overall_league_position": "12",
                "overall_league_payed": "30",
                "overall_league_W": "10",
                "overall_league_D": "12",
                "overall_league_L": "8",
                "overall_league_GF": "42",
                "overall_league_GA": "35",
                "overall_league_PTS": "42"
            },
            {
                "team_name": "Swansea City",
                "overall_league_position": "13",
                "overall_league_payed": "30",
                "overall_league_W": "11",
                "overall_league_D": "8",
                "overall_league_L": "11",
                "overall_league_GF": "40",
                "overall_league_GA": "37",
                "overall_league_PTS": "41"
            },
            {
                "team_name": "Queens Park Rangers",
                "overall_league_position": "14",
                "overall_league_payed": "29",
                "overall_league_W": "11",
                "overall_league_D": "6",
                "overall_league_L": "12",
                "overall_league_GF": "35",
                "overall_league_GA": "41",
                "overall_league_PTS": "39"
            },
            {
                "team_name": "Stoke City",
                "overall_league_position": "15",
                "overall_league_payed": "30",
                "overall_league_W": "9",
                "overall_league_D": "11",
                "overall_league_L": "10",
                "overall_league_GF": "33",
                "overall_league_GA": "39",
                "overall_league_PTS": "38"
            },
            {
                "team_name": "Sheffield Wednesday",
                "overall_league_position": "16",
                "overall_league_payed": "29",
                "overall_league_W": "10",
                "overall_league_D": "8",
                "overall_league_L": "11",
                "overall_league_GF": "34",
                "overall_league_GA": "45",
                "overall_league_PTS": "38"
            },
            {
                "team_name": "Brentford",
                "overall_league_position": "17",
                "overall_league_payed": "29",
                "overall_league_W": "9",
                "overall_league_D": "10",
                "overall_league_L": "10",
                "overall_league_GF": "48",
                "overall_league_GA": "41",
                "overall_league_PTS": "37"
            },
            {
                "team_name": "Preston North End",
                "overall_league_position": "18",
                "overall_league_payed": "30",
                "overall_league_W": "9",
                "overall_league_D": "10",
                "overall_league_L": "11",
                "overall_league_GF": "45",
                "overall_league_GA": "45",
                "overall_league_PTS": "37"
            },
            {
                "team_name": "Wigan Athletic",
                "overall_league_position": "19",
                "overall_league_payed": "30",
                "overall_league_W": "9",
                "overall_league_D": "5",
                "overall_league_L": "16",
                "overall_league_GF": "31",
                "overall_league_GA": "45",
                "overall_league_PTS": "32"
            },
            {
                "team_name": "Millwall",
                "overall_league_position": "20",
                "overall_league_payed": "29",
                "overall_league_W": "7",
                "overall_league_D": "9",
                "overall_league_L": "13",
                "overall_league_GF": "34",
                "overall_league_GA": "44",
                "overall_league_PTS": "30"
            },
            {
                "team_name": "Rotherham United",
                "overall_league_position": "21",
                "overall_league_payed": "30",
                "overall_league_W": "5",
                "overall_league_D": "11",
                "overall_league_L": "14",
                "overall_league_GF": "28",
                "overall_league_GA": "48",
                "overall_league_PTS": "26"
            },
            {
                "team_name": "Reading",
                "overall_league_position": "22",
                "overall_league_payed": "30",
                "overall_league_W": "5",
                "overall_league_D": "10",
                "overall_league_L": "15",
                "overall_league_GF": "32",
                "overall_league_GA": "44",
                "overall_league_PTS": "25"
            },
            {
                "team_name": "Bolton Wanderers",
                "overall_league_position": "23",
                "overall_league_payed": "30",
                "overall_league_W": "5",
                "overall_league_D": "8",
                "overall_league_L": "17",
                "overall_league_GF": "19",
                "overall_league_GA": "45",
                "overall_league_PTS": "23"
            },
            {
                "team_name": "Ipswich Town",
                "overall_league_position": "24",
                "overall_league_payed": "30",
                "overall_league_W": "3",
                "overall_league_D": "9",
                "overall_league_L": "18",
                "overall_league_GF": "23",
                "overall_league_GA": "51",
                "overall_league_PTS": "18"
            }
        ];
    };
    FootballDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FootballDataService);
    return FootballDataService;
}());



/***/ }),

/***/ "./src/app/standings/standings.component.css":
/*!***************************************************!*\
  !*** ./src/app/standings/standings.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#standings-card{\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n\n#standings-title {\n    display: flex;\n    align-items: center;\n    font-weight: bold;\n}\n\n.efl-picture {\n    content: url(\"/assets/images/efl-logo.svg\");\n    width: 60px;\n    height: 60px;\n}\n\n.first-place {\n    background: rgba(84, 167, 89, 0.8);\n}\n\n.second-place {\n    background: rgba(84, 167, 89, 0.6);\n}\n\n.third-place {\n    background: rgba(84, 167, 89, 0.4);\n}\n\n.relegation-place {\n    background: rgba(212, 111, 106, 0.6);\n}\n\n.team-name-column {\n    display: flex;\n    align-items: center;\n}\n\n.astonvilla-picture, .birmigham-picture, .blackburn-picture, .bolton-picture,\n.brentford-picture, .bristol-picture, .derby-picture, .hull-picture,\n.ipswich-picture, .leeds-picture, .middle-picture, .millwall-picture,\n.norwich-picture, .nottingham-picture, .preston-picture, .qpr-picture,\n.reading-picture, .rotherham-picture, .sheffield-picture, .sheffield-wednesday-picture, \n.stoke-picture, .swansea-picture, .wba-picture , .wigan-picture{\n    width: 40px;\n    height: 40px;\n    margin-right: 5px;\n}\n\n.astonvilla-picture {\n    content: url(\"/assets/images/logo/as_logo.svg\");\n}\n\n.birmigham-picture {\n    content: url(\"/assets/images/logo/Birmingham_City-logo.svg\");\n}\n\n.blackburn-picture {\n    content: url(\"/assets/images/logo/Blackburn_Rovers-logo.svg\");\n}\n\n.bolton-picture {\n    content: url(\"/assets/images/logo/bolton-logo.svg\");\n}\n\n.brentford-picture {\n    content: url(\"/assets/images/logo/Brentford_FC-logo.svg\");\n}\n\n.bristol-picture {\n    content: url(\"/assets/images/logo/bristol.png\");\n}\n\n.derby-picture {\n    content: url(\"/assets/images/logo/derby-county-logo.png\");\n}\n\n.hull-picture {\n    content: url(\"/assets/images/logo/hull-logo.png\");\n}\n\n.ipswich-picture {\n    content: url(\"/assets/images/logo/ipswitch.svg\");\n}\n\n.leeds-picture {\n    content: url(\"/assets/images/logo/leeds-logo.svg\");\n}\n\n.middle-picture {\n    content: url(\"/assets/images/logo/Middlesbrough-logo.svg\");\n}\n\n.millwall-picture {\n    content: url(\"/assets/images/logo/millwal-logo.png\");\n}\n\n.norwich-picture {\n    content: url(\"/assets/images/logo/norwich-logo.svg\");\n}\n\n.nottingham-picture {\n    content: url(\"/assets/images/logo/nottingham-logo.png\");\n    width: 25px;\n}\n\n.preston-picture {\n    content: url(\"/assets/images/logo/preston-north-logo.gif\");\n}\n\n.qpr-picture {\n    content: url(\"/assets/images/logo/qpr-logo.svg\");\n}\n\n.reading-picture {\n    content: url(\"/assets/images/logo/Reading-logo.svg\");\n}\n\n.rotherham-picture {\n    content: url(\"/assets/images/logo/Rotherham-logo.png\");\n}\n\n.sheffield-picture {\n    content: url(\"/assets/images/logo/sheffield-logo.svg\");\n}\n\n.sheffield-wednesday-picture {\n    content: url(\"/assets/images/logo/Sheffield_Wednesday-logo.svg\");\n}\n\n.stoke-picture {\n    content: url(\"/assets/images/logo/Stoke-logo.svg\");\n}\n\n.swansea-picture {\n    content: url(\"/assets/images/logo/Swansea-logo.svg\");\n}\n\n.wba-picture {\n    content: url(\"/assets/images/logo/wba-logo.svg\");\n}\n\n.wigan-picture {\n    content: url(\"/assets/images/logo/wigan-logo.svg\");\n}\n\n.points-column {\n    font-weight: bold;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhbmRpbmdzL3N0YW5kaW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksNENBQTRDO0lBQzVDLFlBQVk7SUFDWixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksbUNBQW1DO0NBQ3RDOztBQUVEO0lBQ0ksbUNBQW1DO0NBQ3RDOztBQUVEO0lBQ0ksbUNBQW1DO0NBQ3RDOztBQUVEO0lBQ0kscUNBQXFDO0NBQ3hDOztBQUVEO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtDQUN2Qjs7QUFFRDs7Ozs7O0lBTUksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxnREFBZ0Q7Q0FDbkQ7O0FBRUQ7SUFDSSw2REFBNkQ7Q0FDaEU7O0FBRUQ7SUFDSSw4REFBOEQ7Q0FDakU7O0FBRUQ7SUFDSSxvREFBb0Q7Q0FDdkQ7O0FBRUQ7SUFDSSwwREFBMEQ7Q0FDN0Q7O0FBRUQ7SUFDSSxnREFBZ0Q7Q0FDbkQ7O0FBRUQ7SUFDSSwwREFBMEQ7Q0FDN0Q7O0FBRUQ7SUFDSSxrREFBa0Q7Q0FDckQ7O0FBRUQ7SUFDSSxpREFBaUQ7Q0FDcEQ7O0FBRUQ7SUFDSSxtREFBbUQ7Q0FDdEQ7O0FBRUQ7SUFDSSwyREFBMkQ7Q0FDOUQ7O0FBRUQ7SUFDSSxxREFBcUQ7Q0FDeEQ7O0FBRUQ7SUFDSSxxREFBcUQ7Q0FDeEQ7O0FBRUQ7SUFDSSx3REFBd0Q7SUFDeEQsWUFBWTtDQUNmOztBQUVEO0lBQ0ksMkRBQTJEO0NBQzlEOztBQUVEO0lBQ0ksaURBQWlEO0NBQ3BEOztBQUVEO0lBQ0kscURBQXFEO0NBQ3hEOztBQUVEO0lBQ0ksdURBQXVEO0NBQzFEOztBQUVEO0lBQ0ksdURBQXVEO0NBQzFEOztBQUVEO0lBQ0ksaUVBQWlFO0NBQ3BFOztBQUVEO0lBQ0ksbURBQW1EO0NBQ3REOztBQUVEO0lBQ0kscURBQXFEO0NBQ3hEOztBQUVEO0lBQ0ksaURBQWlEO0NBQ3BEOztBQUVEO0lBQ0ksbURBQW1EO0NBQ3REOztBQUVEO0lBQ0ksa0JBQWtCO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc3RhbmRpbmdzL3N0YW5kaW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3N0YW5kaW5ncy1jYXJke1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuI3N0YW5kaW5ncy10aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZWZsLXBpY3R1cmUge1xuICAgIGNvbnRlbnQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2VmbC1sb2dvLnN2Z1wiKTtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5maXJzdC1wbGFjZSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSg4NCwgMTY3LCA4OSwgMC44KTtcbn1cblxuLnNlY29uZC1wbGFjZSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSg4NCwgMTY3LCA4OSwgMC42KTtcbn1cblxuLnRoaXJkLXBsYWNlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDg0LCAxNjcsIDg5LCAwLjQpO1xufVxuXG4ucmVsZWdhdGlvbi1wbGFjZSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMTIsIDExMSwgMTA2LCAwLjYpO1xufVxuXG4udGVhbS1uYW1lLWNvbHVtbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYXN0b252aWxsYS1waWN0dXJlLCAuYmlybWlnaGFtLXBpY3R1cmUsIC5ibGFja2J1cm4tcGljdHVyZSwgLmJvbHRvbi1waWN0dXJlLFxuLmJyZW50Zm9yZC1waWN0dXJlLCAuYnJpc3RvbC1waWN0dXJlLCAuZGVyYnktcGljdHVyZSwgLmh1bGwtcGljdHVyZSxcbi5pcHN3aWNoLXBpY3R1cmUsIC5sZWVkcy1waWN0dXJlLCAubWlkZGxlLXBpY3R1cmUsIC5taWxsd2FsbC1waWN0dXJlLFxuLm5vcndpY2gtcGljdHVyZSwgLm5vdHRpbmdoYW0tcGljdHVyZSwgLnByZXN0b24tcGljdHVyZSwgLnFwci1waWN0dXJlLFxuLnJlYWRpbmctcGljdHVyZSwgLnJvdGhlcmhhbS1waWN0dXJlLCAuc2hlZmZpZWxkLXBpY3R1cmUsIC5zaGVmZmllbGQtd2VkbmVzZGF5LXBpY3R1cmUsIFxuLnN0b2tlLXBpY3R1cmUsIC5zd2Fuc2VhLXBpY3R1cmUsIC53YmEtcGljdHVyZSAsIC53aWdhbi1waWN0dXJle1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmFzdG9udmlsbGEtcGljdHVyZSB7XG4gICAgY29udGVudDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbG9nby9hc19sb2dvLnN2Z1wiKTtcbn1cblxuLmJpcm1pZ2hhbS1waWN0dXJlIHtcbiAgICBjb250ZW50OiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9sb2dvL0Jpcm1pbmdoYW1fQ2l0eS1sb2dvLnN2Z1wiKTtcbn1cblxuLmJsYWNrYnVybi1waWN0dXJlIHtcbiAgICBjb250ZW50OiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9sb2dvL0JsYWNrYnVybl9Sb3ZlcnMtbG9nby5zdmdcIik7XG59XG5cbi5ib2x0b24tcGljdHVyZSB7XG4gICAgY29udGVudDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbG9nby9ib2x0b24tbG9nby5zdmdcIik7XG59XG5cbi5icmVudGZvcmQtcGljdHVyZSB7XG4gICAgY29udGVudDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbG9nby9CcmVudGZvcmRfRkMtbG9nby5zdmdcIik7XG59XG5cbi5icmlzdG9sLXBpY3R1cmUge1xuICAgIGNvbnRlbnQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2xvZ28vYnJpc3RvbC5wbmdcIik7XG59XG5cbi5kZXJieS1waWN0dXJlIHtcbiAgICBjb250ZW50OiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9sb2dvL2RlcmJ5LWNvdW50eS1sb2dvLnBuZ1wiKTtcbn1cblxuLmh1bGwtcGljdHVyZSB7XG4gICAgY29udGVudDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbG9nby9odWxsLWxvZ28ucG5nXCIpO1xufVxuXG4uaXBzd2ljaC1waWN0dXJlIHtcbiAgICBjb250ZW50OiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9sb2dvL2lwc3dpdGNoLnN2Z1wiKTtcbn1cblxuLmxlZWRzLXBpY3R1cmUge1xuICAgIGNvbnRlbnQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2xvZ28vbGVlZHMtbG9nby5zdmdcIik7XG59XG5cbi5taWRkbGUtcGljdHVyZSB7XG4gICAgY29udGVudDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbG9nby9NaWRkbGVzYnJvdWdoLWxvZ28uc3ZnXCIpO1xufVxuXG4ubWlsbHdhbGwtcGljdHVyZSB7XG4gICAgY29udGVudDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbG9nby9taWxsd2FsLWxvZ28ucG5nXCIpO1xufVxuXG4ubm9yd2ljaC1waWN0dXJlIHtcbiAgICBjb250ZW50OiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9sb2dvL25vcndpY2gtbG9nby5zdmdcIik7XG59XG5cbi5ub3R0aW5naGFtLXBpY3R1cmUge1xuICAgIGNvbnRlbnQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2xvZ28vbm90dGluZ2hhbS1sb2dvLnBuZ1wiKTtcbiAgICB3aWR0aDogMjVweDtcbn1cblxuLnByZXN0b24tcGljdHVyZSB7XG4gICAgY29udGVudDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbG9nby9wcmVzdG9uLW5vcnRoLWxvZ28uZ2lmXCIpO1xufVxuXG4ucXByLXBpY3R1cmUge1xuICAgIGNvbnRlbnQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2xvZ28vcXByLWxvZ28uc3ZnXCIpO1xufVxuXG4ucmVhZGluZy1waWN0dXJlIHtcbiAgICBjb250ZW50OiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9sb2dvL1JlYWRpbmctbG9nby5zdmdcIik7XG59XG5cbi5yb3RoZXJoYW0tcGljdHVyZSB7XG4gICAgY29udGVudDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbG9nby9Sb3RoZXJoYW0tbG9nby5wbmdcIik7XG59XG5cbi5zaGVmZmllbGQtcGljdHVyZSB7XG4gICAgY29udGVudDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbG9nby9zaGVmZmllbGQtbG9nby5zdmdcIik7XG59XG5cbi5zaGVmZmllbGQtd2VkbmVzZGF5LXBpY3R1cmUge1xuICAgIGNvbnRlbnQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2xvZ28vU2hlZmZpZWxkX1dlZG5lc2RheS1sb2dvLnN2Z1wiKTtcbn1cblxuLnN0b2tlLXBpY3R1cmUge1xuICAgIGNvbnRlbnQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2xvZ28vU3Rva2UtbG9nby5zdmdcIik7XG59XG5cbi5zd2Fuc2VhLXBpY3R1cmUge1xuICAgIGNvbnRlbnQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2xvZ28vU3dhbnNlYS1sb2dvLnN2Z1wiKTtcbn1cblxuLndiYS1waWN0dXJlIHtcbiAgICBjb250ZW50OiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9sb2dvL3diYS1sb2dvLnN2Z1wiKTtcbn1cblxuLndpZ2FuLXBpY3R1cmUge1xuICAgIGNvbnRlbnQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2xvZ28vd2lnYW4tbG9nby5zdmdcIik7XG59XG5cbi5wb2ludHMtY29sdW1uIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/standings/standings.component.html":
/*!****************************************************!*\
  !*** ./src/app/standings/standings.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" id=\"standings-card\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\" id=\"standings-title\"><span class=\"efl-picture\"></span>EFL Championship standings</h5>\n      <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th>No.</th>\n            <th>Team</th>\n            <th>Played</th>\n            <th>Pts</th>\n            <th>Wins</th>\n            <th>Draws</th>\n            <th>Loses</th>\n            <th>GF</th>\n            <th>GA</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let standing of standings\" [ngClass]=\"setRowColor(standing.overall_league_position)\">\n            <td>{{standing.overall_league_position}}</td>\n            <td class=\"team-name-column\"><span [ngClass]=\"setLogo(standing.team_name)\"></span>{{standing.team_name}}</td>\n            <td>{{standing.overall_league_payed}}</td>\n            <td class=\"points-column\">{{standing.overall_league_PTS}}</td>\n            <td>{{standing.overall_league_W}}</td>\n            <td>{{standing.overall_league_D}}</td>\n            <td>{{standing.overall_league_L}}</td>\n            <td>{{standing.overall_league_GF}}</td>\n            <td>{{standing.overall_league_GA}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n</div>\n  \n  \n  \n\n"

/***/ }),

/***/ "./src/app/standings/standings.component.ts":
/*!**************************************************!*\
  !*** ./src/app/standings/standings.component.ts ***!
  \**************************************************/
/*! exports provided: StandingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandingsComponent", function() { return StandingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_football_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/football-data.service */ "./src/app/service/football-data.service.ts");



var StandingsComponent = /** @class */ (function () {
    function StandingsComponent(footballService) {
        this.footballService = footballService;
    }
    StandingsComponent.prototype.ngOnInit = function () {
        this.retrieveAllStandings();
    };
    StandingsComponent.prototype.retrieveAllStandings = function () {
        var _this = this;
        this.footballService.retrieveAllStandings().subscribe(function (response) {
            _this.standings = response;
            if (!_this.isAVInStandings(_this.standings))
                _this.standings = _this.footballService.retrieveTestStandings();
        }, function (error) {
            _this.standings = _this.footballService.retrieveTestStandings();
        });
    };
    StandingsComponent.prototype.setRowColor = function (position) {
        switch (position) {
            case '1': {
                return 'first-place';
            }
            case '2': {
                return 'second-place';
            }
            case '3': {
                return 'third-place';
            }
            case '22':
            case '23':
            case '24': {
                return 'relegation-place';
            }
        }
    };
    StandingsComponent.prototype.setLogo = function (team) {
        switch (team) {
            case 'Aston Villa': {
                return "astonvilla-picture";
            }
            case 'Birmingham City': {
                return 'birmigham-picture';
            }
            case 'Blackburn Rovers': {
                return 'blackburn-picture';
            }
            case 'Bolton Wanderers': {
                return 'bolton-picture';
            }
            case 'Brentford': {
                return 'brentford-picture';
            }
            case 'Bristol City': {
                return 'bristol-picture';
            }
            case 'Derby County': {
                return 'derby-picture';
            }
            case 'Hull City': {
                return 'hull-picture';
            }
            case 'Ipswich Town': {
                return 'ipswich-picture';
            }
            case 'Leeds United': {
                return 'leeds-picture';
            }
            case 'Middlesbrough': {
                return 'middle-picture';
            }
            case 'Millwall': {
                return 'millwall-picture';
            }
            case 'Norwich City': {
                return 'norwich-picture';
            }
            case 'Nottingham Forest': {
                return 'nottingham-picture';
            }
            case 'Preston North End': {
                return 'preston-picture';
            }
            case 'Queens Park Rangers': {
                return 'qpr-picture';
            }
            case 'Reading': {
                return 'reading-picture';
            }
            case 'Rotherham United': {
                return 'rotherham-picture';
            }
            case 'Sheffield United': {
                return 'sheffield-picture';
            }
            case 'Sheffield Wednesday': {
                return 'sheffield-wednesday-picture';
            }
            case 'Stoke City': {
                return 'stoke-picture';
            }
            case 'Swansea City': {
                return 'swansea-picture';
            }
            case 'West Bromwich Albion': {
                return 'wba-picture';
            }
            case 'Wigan Athletic': {
                return 'wigan-picture';
            }
        }
    };
    StandingsComponent.prototype.isAVInStandings = function (standings) {
        var avStanding = standings.find(function (x) { return x.team_name === 'Aston Villa'; });
        if (typeof avStanding === 'undefined') {
            return false;
        }
        else {
            return true;
        }
    };
    StandingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-standings',
            template: __webpack_require__(/*! ./standings.component.html */ "./src/app/standings/standings.component.html"),
            styles: [__webpack_require__(/*! ./standings.component.css */ "./src/app/standings/standings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_football_data_service__WEBPACK_IMPORTED_MODULE_2__["FootballDataService"]])
    ], StandingsComponent);
    return StandingsComponent;
}());



/***/ }),

/***/ "./src/app/summary/summary.component.css":
/*!***********************************************!*\
  !*** ./src/app/summary/summary.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".aston-villa-picture {\n    content: url(\"/assets/images/logo/as_logo.svg\");\n    width: 240px;\n    height: 240px;\n}\n\ndiv .card-body {\n    background-color: #95BFE5;\n    display: flex;\n}\n\n.av-position {\n    color: white;\n    font-weight: bold;\n}\n\n.av-last-match {\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnREFBZ0Q7SUFDaEQsYUFBYTtJQUNiLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsY0FBYztDQUNqQjs7QUFFRDtJQUNJLGFBQWE7SUFDYixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXN0b24tdmlsbGEtcGljdHVyZSB7XG4gICAgY29udGVudDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbG9nby9hc19sb2dvLnN2Z1wiKTtcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgaGVpZ2h0OiAyNDBweDtcbn1cblxuZGl2IC5jYXJkLWJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NUJGRTU7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmF2LXBvc2l0aW9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hdi1sYXN0LW1hdGNoIHtcbiAgICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/summary/summary.component.html":
/*!************************************************!*\
  !*** ./src/app/summary/summary.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" id=\"standings-card\">\n  <div class=\"card-body\">\n    <div class=\"av-picture-container\">\n      <span class=\"aston-villa-picture\"></span>\n    </div>\n    <div class=\"av-info-container\">\n      <h5 class=\"av-position\">LEAGUE POSITION:</h5>\n      <h2 class=\"av-position\">{{ position}}</h2>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/summary/summary.component.ts":
/*!**********************************************!*\
  !*** ./src/app/summary/summary.component.ts ***!
  \**********************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_football_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/football-data.service */ "./src/app/service/football-data.service.ts");



var SummaryComponent = /** @class */ (function () {
    function SummaryComponent(footballDataService) {
        this.footballDataService = footballDataService;
    }
    SummaryComponent.prototype.ngOnInit = function () {
        this.getLeaguePosition();
    };
    SummaryComponent.prototype.getLeaguePosition = function () {
        var _this = this;
        this.footballDataService.retrieveAllStandings().subscribe(function (response) {
            var standings = response;
            var avStanding = standings.find(function (x) { return x.team_name === 'Aston Villa'; });
            if (typeof avStanding === 'undefined') {
                _this.getTestLeaguePosition();
            }
            else {
                _this.position = avStanding.overall_league_position;
            }
        }, function (error) {
            _this.getTestLeaguePosition();
        });
    };
    SummaryComponent.prototype.getTestLeaguePosition = function () {
        var standings = this.footballDataService.retrieveTestStandings();
        this.position = standings.find(function (x) { return x.team_name === 'Aston Villa'; }).overall_league_position;
    };
    SummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-summary',
            template: __webpack_require__(/*! ./summary.component.html */ "./src/app/summary/summary.component.html"),
            styles: [__webpack_require__(/*! ./summary.component.css */ "./src/app/summary/summary.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_football_data_service__WEBPACK_IMPORTED_MODULE_2__["FootballDataService"]])
    ], SummaryComponent);
    return SummaryComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ubuntu/newtype/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map