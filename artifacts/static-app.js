(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 99);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProjectsContent; });
/* harmony import */ var _img_Projects_Amsterdamsche_Football_Club_Clubhuis_afc_amsterdamsche_football_club_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _img_Projects_Amsterdamsche_Football_Club_Clubhuis_afc_amsterdamsche_football_club_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Amsterdamsche_Football_Club_Clubhuis_afc_amsterdamsche_football_club_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_Projects_Amsterdamsche_Football_Club_Clubhuis_afc_football_club_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var _img_Projects_Amsterdamsche_Football_Club_Clubhuis_afc_football_club_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Amsterdamsche_Football_Club_Clubhuis_afc_football_club_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_Projects_Amsterdamsche_Football_Club_Clubhuis_afc_paul_de_ruiter_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var _img_Projects_Amsterdamsche_Football_Club_Clubhuis_afc_paul_de_ruiter_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Amsterdamsche_Football_Club_Clubhuis_afc_paul_de_ruiter_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_Projects_Baltic_Tower_Poznan_Poland_baltic_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var _img_Projects_Baltic_Tower_Poznan_Poland_baltic_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Baltic_Tower_Poznan_Poland_baltic_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_Projects_Baltic_Tower_Poznan_Poland_baltic2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);
/* harmony import */ var _img_Projects_Baltic_Tower_Poznan_Poland_baltic2_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Baltic_Tower_Poznan_Poland_baltic2_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_Projects_Clubhuis_Rijswijkse_Golfclub_clubhuis_rijswijkse_golfclub_2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34);
/* harmony import */ var _img_Projects_Clubhuis_Rijswijkse_Golfclub_clubhuis_rijswijkse_golfclub_2_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Clubhuis_Rijswijkse_Golfclub_clubhuis_rijswijkse_golfclub_2_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_Projects_Clubhuis_Rijswijkse_Golfclub_clubhuis_rijswijkse_golfclub_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35);
/* harmony import */ var _img_Projects_Clubhuis_Rijswijkse_Golfclub_clubhuis_rijswijkse_golfclub_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Clubhuis_Rijswijkse_Golfclub_clubhuis_rijswijkse_golfclub_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_Projects_Clubhuis_tennisvereniging_IJburg_couch_tennisclub_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36);
/* harmony import */ var _img_Projects_Clubhuis_tennisvereniging_IJburg_couch_tennisclub_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Clubhuis_tennisvereniging_IJburg_couch_tennisclub_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_Projects_Clubhuis_tennisvereniging_IJburg_couch_tennisclub_ijburg_m121113_m2_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37);
/* harmony import */ var _img_Projects_Clubhuis_tennisvereniging_IJburg_couch_tennisclub_ijburg_m121113_m2_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Clubhuis_tennisvereniging_IJburg_couch_tennisclub_ijburg_m121113_m2_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_Projects_Clubhuis_tennisvereniging_IJburg_ijbur_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38);
/* harmony import */ var _img_Projects_Clubhuis_tennisvereniging_IJburg_ijbur_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Clubhuis_tennisvereniging_IJburg_ijbur_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_Projects_Clubhuis_tennisvereniging_IJburg_ijburg_1140x500_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39);
/* harmony import */ var _img_Projects_Clubhuis_tennisvereniging_IJburg_ijburg_1140x500_jpeg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Clubhuis_tennisvereniging_IJburg_ijburg_1140x500_jpeg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_Projects_Clubhuis_tennisvereniging_IJburg_ijburg_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(40);
/* harmony import */ var _img_Projects_Clubhuis_tennisvereniging_IJburg_ijburg_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Clubhuis_tennisvereniging_IJburg_ijburg_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_Projects_Clubhuis_tennisvereniging_IJburg_mvrdv_pepijn_bakker_couch_5_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(41);
/* harmony import */ var _img_Projects_Clubhuis_tennisvereniging_IJburg_mvrdv_pepijn_bakker_couch_5_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Clubhuis_tennisvereniging_IJburg_mvrdv_pepijn_bakker_couch_5_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _img_Projects_Clubhuis_tennisvereniging_IJburg_tv_ijburg_jpeg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(42);
/* harmony import */ var _img_Projects_Clubhuis_tennisvereniging_IJburg_tv_ijburg_jpeg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Clubhuis_tennisvereniging_IJburg_tv_ijburg_jpeg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _img_Projects_De_Bolder_bolder_jpeg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(43);
/* harmony import */ var _img_Projects_De_Bolder_bolder_jpeg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_De_Bolder_bolder_jpeg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _img_Projects_De_Bolder_de_bolder_2_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(44);
/* harmony import */ var _img_Projects_De_Bolder_de_bolder_2_jpg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_De_Bolder_de_bolder_2_jpg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _img_Projects_De_Bolder_de_bolder_3_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(45);
/* harmony import */ var _img_Projects_De_Bolder_de_bolder_3_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_De_Bolder_de_bolder_3_jpg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _img_Projects_De_Bolder_de_bolder_4_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(46);
/* harmony import */ var _img_Projects_De_Bolder_de_bolder_4_jpg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_De_Bolder_de_bolder_4_jpg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _img_Projects_De_Bolder_de_bolder_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(11);
/* harmony import */ var _img_Projects_De_Bolder_de_bolder_jpg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_De_Bolder_de_bolder_jpg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _img_Projects_Elektrokern_Schuurman_elektrokern_schuurman_2_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(47);
/* harmony import */ var _img_Projects_Elektrokern_Schuurman_elektrokern_schuurman_2_jpg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Elektrokern_Schuurman_elektrokern_schuurman_2_jpg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _img_Projects_Elektrokern_Schuurman_elektrokern_schuurman_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(48);
/* harmony import */ var _img_Projects_Elektrokern_Schuurman_elektrokern_schuurman_jpg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Elektrokern_Schuurman_elektrokern_schuurman_jpg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _img_Projects_Gemengde_toren_Gouda_Oost_gemende_toren_gouda_oost_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(49);
/* harmony import */ var _img_Projects_Gemengde_toren_Gouda_Oost_gemende_toren_gouda_oost_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Gemengde_toren_Gouda_Oost_gemende_toren_gouda_oost_png__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _img_Projects_Gemengde_toren_Gouda_Oost_gouda_toren_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(50);
/* harmony import */ var _img_Projects_Gemengde_toren_Gouda_Oost_gouda_toren_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Gemengde_toren_Gouda_Oost_gouda_toren_png__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _img_Projects_Gemengde_toren_Gouda_Oost_gouda_oost_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(51);
/* harmony import */ var _img_Projects_Gemengde_toren_Gouda_Oost_gouda_oost_jpg__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Gemengde_toren_Gouda_Oost_gouda_oost_jpg__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _img_Projects_Gemengde_toren_Gouda_Oost_toren_gouda_oost_render_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(52);
/* harmony import */ var _img_Projects_Gemengde_toren_Gouda_Oost_toren_gouda_oost_render_jpg__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Gemengde_toren_Gouda_Oost_toren_gouda_oost_render_jpg__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _img_Projects_Gemengde_toren_Gouda_Oost_torenGouda_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(53);
/* harmony import */ var _img_Projects_Gemengde_toren_Gouda_Oost_torenGouda_jpg__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Gemengde_toren_Gouda_Oost_torenGouda_jpg__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _img_Projects_Hotel_LEurope_hotel_l_europe_amsterdam_jpg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(54);
/* harmony import */ var _img_Projects_Hotel_LEurope_hotel_l_europe_amsterdam_jpg__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Hotel_LEurope_hotel_l_europe_amsterdam_jpg__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _img_Projects_Hotel_LEurope_hotel_de_leurope_amsterdam_by_night1_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(12);
/* harmony import */ var _img_Projects_Hotel_LEurope_hotel_de_leurope_amsterdam_by_night1_jpg__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Hotel_LEurope_hotel_de_leurope_amsterdam_by_night1_jpg__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _img_Projects_Hotel_LEurope_hotelleurope_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(55);
/* harmony import */ var _img_Projects_Hotel_LEurope_hotelleurope_jpg__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Hotel_LEurope_hotelleurope_jpg__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _img_Projects_Hotel_LEurope_spa_hotel_l_europe_jpg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(56);
/* harmony import */ var _img_Projects_Hotel_LEurope_spa_hotel_l_europe_jpg__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Hotel_LEurope_spa_hotel_l_europe_jpg__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _img_Projects_Koningshof_Gouda_koningshof_gouda_2_jpg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(57);
/* harmony import */ var _img_Projects_Koningshof_Gouda_koningshof_gouda_2_jpg__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Koningshof_Gouda_koningshof_gouda_2_jpg__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _img_Projects_Koningshof_Gouda_koningshof_gouda_jpg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(58);
/* harmony import */ var _img_Projects_Koningshof_Gouda_koningshof_gouda_jpg__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Koningshof_Gouda_koningshof_gouda_jpg__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _img_Projects_Land_van_Barendreght_land_van_barendrecht_2_jpg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(59);
/* harmony import */ var _img_Projects_Land_van_Barendreght_land_van_barendrecht_2_jpg__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Land_van_Barendreght_land_van_barendrecht_2_jpg__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _img_Projects_Land_van_Barendreght_land_van_barendreght_2_jpg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(60);
/* harmony import */ var _img_Projects_Land_van_Barendreght_land_van_barendreght_2_jpg__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Land_van_Barendreght_land_van_barendreght_2_jpg__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _img_Projects_Land_van_Barendreght_land_van_barendreght_3_jpg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(61);
/* harmony import */ var _img_Projects_Land_van_Barendreght_land_van_barendreght_3_jpg__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Land_van_Barendreght_land_van_barendreght_3_jpg__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _img_Projects_Land_van_Barendreght_land_van_barendreght_jpg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(62);
/* harmony import */ var _img_Projects_Land_van_Barendreght_land_van_barendreght_jpg__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Land_van_Barendreght_land_van_barendreght_jpg__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _img_Projects_Louis_Armstrongweg_Almere_LouisArmstrong_Almere1_jpg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(63);
/* harmony import */ var _img_Projects_Louis_Armstrongweg_Almere_LouisArmstrong_Almere1_jpg__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Louis_Armstrongweg_Almere_LouisArmstrong_Almere1_jpg__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _img_Projects_Louis_Armstrongweg_Almere_LouisArmstrong_Almere2_jpg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(64);
/* harmony import */ var _img_Projects_Louis_Armstrongweg_Almere_LouisArmstrong_Almere2_jpg__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Louis_Armstrongweg_Almere_LouisArmstrong_Almere2_jpg__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _img_Projects_MC_de_Grebbe_mc_de_grebbe_2_jpg__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(65);
/* harmony import */ var _img_Projects_MC_de_Grebbe_mc_de_grebbe_2_jpg__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_MC_de_Grebbe_mc_de_grebbe_2_jpg__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _img_Projects_MC_de_Grebbe_mc_de_grebbe_jpg__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(66);
/* harmony import */ var _img_Projects_MC_de_Grebbe_mc_de_grebbe_jpg__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_MC_de_Grebbe_mc_de_grebbe_jpg__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _img_Projects_Merlet_college_Cuijck_merlet_jpg__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(67);
/* harmony import */ var _img_Projects_Merlet_college_Cuijck_merlet_jpg__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Merlet_college_Cuijck_merlet_jpg__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _img_Projects_Merlet_college_Cuijck_merlet2_png__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(68);
/* harmony import */ var _img_Projects_Merlet_college_Cuijck_merlet2_png__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Merlet_college_Cuijck_merlet2_png__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _img_Projects_OWC_Noordwestcluster_owc_noordwestcluster_1_jpg__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(69);
/* harmony import */ var _img_Projects_OWC_Noordwestcluster_owc_noordwestcluster_1_jpg__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_OWC_Noordwestcluster_owc_noordwestcluster_1_jpg__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _img_Projects_OWC_Noordwestcluster_owc_noordwestcluster_2_jpg__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(70);
/* harmony import */ var _img_Projects_OWC_Noordwestcluster_owc_noordwestcluster_2_jpg__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_OWC_Noordwestcluster_owc_noordwestcluster_2_jpg__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var _img_Projects_OWC_Noordwestcluster_owc_jpg__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(71);
/* harmony import */ var _img_Projects_OWC_Noordwestcluster_owc_jpg__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_OWC_Noordwestcluster_owc_jpg__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _img_Projects_OWC_Noordwestcluster_owc2_jpg__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(72);
/* harmony import */ var _img_Projects_OWC_Noordwestcluster_owc2_jpg__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_OWC_Noordwestcluster_owc2_jpg__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var _img_Projects_OWC_Noordwestcluster_owc3_jpg__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(73);
/* harmony import */ var _img_Projects_OWC_Noordwestcluster_owc3_jpg__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_OWC_Noordwestcluster_owc3_jpg__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var _img_Projects_Sociale_werkplaats_Haegheflor_haegeflor_jpg__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(74);
/* harmony import */ var _img_Projects_Sociale_werkplaats_Haegheflor_haegeflor_jpg__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Sociale_werkplaats_Haegheflor_haegeflor_jpg__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var _img_Projects_Sociale_werkplaats_Haegheflor_sociale_werkplaats_haegeflor_jpg__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(75);
/* harmony import */ var _img_Projects_Sociale_werkplaats_Haegheflor_sociale_werkplaats_haegeflor_jpg__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Sociale_werkplaats_Haegheflor_sociale_werkplaats_haegeflor_jpg__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var _img_Projects_Villa_Augustus_Villa_Augustus_in_de_watertoren_is_het_hotel_gerealiseerd_jpg__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(76);
/* harmony import */ var _img_Projects_Villa_Augustus_Villa_Augustus_in_de_watertoren_is_het_hotel_gerealiseerd_jpg__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Villa_Augustus_Villa_Augustus_in_de_watertoren_is_het_hotel_gerealiseerd_jpg__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var _img_Projects_Villa_Augustus_villa_augustus_2_jpg__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(77);
/* harmony import */ var _img_Projects_Villa_Augustus_villa_augustus_2_jpg__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Villa_Augustus_villa_augustus_2_jpg__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var _img_Projects_Villa_Augustus_villa_augustus_jpg__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(78);
/* harmony import */ var _img_Projects_Villa_Augustus_villa_augustus_jpg__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Villa_Augustus_villa_augustus_jpg__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var _img_Projects_Villa_Bergen_villa_bergen_1_png__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(79);
/* harmony import */ var _img_Projects_Villa_Bergen_villa_bergen_1_png__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Villa_Bergen_villa_bergen_1_png__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var _img_Projects_Villa_Bergen_villa_bergen_2_png__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(80);
/* harmony import */ var _img_Projects_Villa_Bergen_villa_bergen_2_png__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Villa_Bergen_villa_bergen_2_png__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var _img_Projects_Villa_Bergen_villa_bergen_3_png__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(81);
/* harmony import */ var _img_Projects_Villa_Bergen_villa_bergen_3_png__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Villa_Bergen_villa_bergen_3_png__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var _img_Projects_Villa_Bergen_villabergen_png__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(82);
/* harmony import */ var _img_Projects_Villa_Bergen_villabergen_png__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Villa_Bergen_villabergen_png__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var _img_Projects_Villa_Kogelhof_kogelhof_jpg__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(13);
/* harmony import */ var _img_Projects_Villa_Kogelhof_kogelhof_jpg__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Villa_Kogelhof_kogelhof_jpg__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var _img_Projects_Villa_Kogelhof_villa_kogelhof_2_jpg__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(83);
/* harmony import */ var _img_Projects_Villa_Kogelhof_villa_kogelhof_2_jpg__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Villa_Kogelhof_villa_kogelhof_2_jpg__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var _img_Projects_Villa_Kogelhof_villa_kogelhof_3_jpg__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(84);
/* harmony import */ var _img_Projects_Villa_Kogelhof_villa_kogelhof_3_jpg__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Villa_Kogelhof_villa_kogelhof_3_jpg__WEBPACK_IMPORTED_MODULE_58__);
/* harmony import */ var _img_Projects_Villa_Kogelhof_villa_kogelhof_jpg__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(85);
/* harmony import */ var _img_Projects_Villa_Kogelhof_villa_kogelhof_jpg__WEBPACK_IMPORTED_MODULE_59___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Villa_Kogelhof_villa_kogelhof_jpg__WEBPACK_IMPORTED_MODULE_59__);
/* harmony import */ var _img_Projects_Vredehofplein_en_bibliotheek_Spijkenisse_BookMountain2_jpeg__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(86);
/* harmony import */ var _img_Projects_Vredehofplein_en_bibliotheek_Spijkenisse_BookMountain2_jpeg__WEBPACK_IMPORTED_MODULE_60___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Vredehofplein_en_bibliotheek_Spijkenisse_BookMountain2_jpeg__WEBPACK_IMPORTED_MODULE_60__);
/* harmony import */ var _img_Projects_Vredehofplein_en_bibliotheek_Spijkenisse_bibliotheek_mvrdv_spijkenisse_5_jpeg__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(87);
/* harmony import */ var _img_Projects_Vredehofplein_en_bibliotheek_Spijkenisse_bibliotheek_mvrdv_spijkenisse_5_jpeg__WEBPACK_IMPORTED_MODULE_61___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Vredehofplein_en_bibliotheek_Spijkenisse_bibliotheek_mvrdv_spijkenisse_5_jpeg__WEBPACK_IMPORTED_MODULE_61__);
/* harmony import */ var _img_Projects_Vredehofplein_en_bibliotheek_Spijkenisse_boekenberg_bibliotheek_spijkenisse_2_jpg__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(88);
/* harmony import */ var _img_Projects_Vredehofplein_en_bibliotheek_Spijkenisse_boekenberg_bibliotheek_spijkenisse_2_jpg__WEBPACK_IMPORTED_MODULE_62___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Vredehofplein_en_bibliotheek_Spijkenisse_boekenberg_bibliotheek_spijkenisse_2_jpg__WEBPACK_IMPORTED_MODULE_62__);
/* harmony import */ var _img_Projects_Vredehofplein_en_bibliotheek_Spijkenisse_boekenberg_bibliotheek_spijkenisse_jpg__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(89);
/* harmony import */ var _img_Projects_Vredehofplein_en_bibliotheek_Spijkenisse_boekenberg_bibliotheek_spijkenisse_jpg__WEBPACK_IMPORTED_MODULE_63___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Vredehofplein_en_bibliotheek_Spijkenisse_boekenberg_bibliotheek_spijkenisse_jpg__WEBPACK_IMPORTED_MODULE_63__);
/* harmony import */ var _img_Projects_Vredehofplein_en_bibliotheek_Spijkenisse_boekenberk_bookmountain_jpg__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(90);
/* harmony import */ var _img_Projects_Vredehofplein_en_bibliotheek_Spijkenisse_boekenberk_bookmountain_jpg__WEBPACK_IMPORTED_MODULE_64___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Vredehofplein_en_bibliotheek_Spijkenisse_boekenberk_bookmountain_jpg__WEBPACK_IMPORTED_MODULE_64__);
/* harmony import */ var _img_Projects_Vredehofplein_en_bibliotheek_Spijkenisse_spijkenisse_bibliotheek_jpg__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(91);
/* harmony import */ var _img_Projects_Vredehofplein_en_bibliotheek_Spijkenisse_spijkenisse_bibliotheek_jpg__WEBPACK_IMPORTED_MODULE_65___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Vredehofplein_en_bibliotheek_Spijkenisse_spijkenisse_bibliotheek_jpg__WEBPACK_IMPORTED_MODULE_65__);
/* harmony import */ var _img_Projects_Vredehofplein_en_bibliotheek_Spijkenisse_vredehofplein_bilbliotheek_spijkenisse_jpg__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(92);
/* harmony import */ var _img_Projects_Vredehofplein_en_bibliotheek_Spijkenisse_vredehofplein_bilbliotheek_spijkenisse_jpg__WEBPACK_IMPORTED_MODULE_66___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Vredehofplein_en_bibliotheek_Spijkenisse_vredehofplein_bilbliotheek_spijkenisse_jpg__WEBPACK_IMPORTED_MODULE_66__);
/* harmony import */ var _img_Projects_Waldorp_waldorp0001_jpg__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(93);
/* harmony import */ var _img_Projects_Waldorp_waldorp0001_jpg__WEBPACK_IMPORTED_MODULE_67___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Waldorp_waldorp0001_jpg__WEBPACK_IMPORTED_MODULE_67__);
/* harmony import */ var _img_Projects_Waldorp_waldorp0002_jpg__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(94);
/* harmony import */ var _img_Projects_Waldorp_waldorp0002_jpg__WEBPACK_IMPORTED_MODULE_68___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Waldorp_waldorp0002_jpg__WEBPACK_IMPORTED_MODULE_68__);
/* harmony import */ var _img_Projects_Waldorp_waldorp0003_jpg__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(95);
/* harmony import */ var _img_Projects_Waldorp_waldorp0003_jpg__WEBPACK_IMPORTED_MODULE_69___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Waldorp_waldorp0003_jpg__WEBPACK_IMPORTED_MODULE_69__);
/* harmony import */ var _img_Projects_Waldorp_waldorp0004_jpg__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(96);
/* harmony import */ var _img_Projects_Waldorp_waldorp0004_jpg__WEBPACK_IMPORTED_MODULE_70___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Waldorp_waldorp0004_jpg__WEBPACK_IMPORTED_MODULE_70__);
/* harmony import */ var _img_Projects_Waldorp_waldorp0005_jpg__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(97);
/* harmony import */ var _img_Projects_Waldorp_waldorp0005_jpg__WEBPACK_IMPORTED_MODULE_71___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Waldorp_waldorp0005_jpg__WEBPACK_IMPORTED_MODULE_71__);
/* harmony import */ var _img_Projects_Waldorp_waldorp0006_jpg__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(98);
/* harmony import */ var _img_Projects_Waldorp_waldorp0006_jpg__WEBPACK_IMPORTED_MODULE_72___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_Waldorp_waldorp0006_jpg__WEBPACK_IMPORTED_MODULE_72__);









































































var ProjectCategories = {
  all: 'All',
  hotelsSportEnZorg: 'Hotels sport en zorg',
  utiliteitbouw: 'Utiliteitbouw',
  woningbouw: 'Woningbouw'
};
var ProjectsContent = [{
  title: 'Woningen Louis Armstrongweg Almere',
  description: 'Studiobouwhaven verzorgd het projectmanagement en de kostenbegeleiding voor de transformatie van het kantoorgebouw naar woningen, aan de Louis Armstrongweg 2-16 in Almere. Start bouw is gepland oktober 2020.',
  images: [{
    src: _img_Projects_Louis_Armstrongweg_Almere_LouisArmstrong_Almere1_jpg__WEBPACK_IMPORTED_MODULE_36___default.a,
    alt: 'Louis Armstrongweg Almere'
  }, {
    src: _img_Projects_Louis_Armstrongweg_Almere_LouisArmstrong_Almere2_jpg__WEBPACK_IMPORTED_MODULE_37___default.a,
    alt: 'Louis Armstrongweg Almere'
  }],
  category: [ProjectCategories.woningbouw]
}, {
  title: 'Clubhuis Amsterdamsche Football Club',
  description: '',
  images: [{
    src: _img_Projects_Amsterdamsche_Football_Club_Clubhuis_afc_amsterdamsche_football_club_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
    alt: 'Amsterdamsche Football Club Clubhuis'
  }, {
    src: _img_Projects_Amsterdamsche_Football_Club_Clubhuis_afc_football_club_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: 'Amsterdamsche Football Club Clubhuis'
  }, {
    src: _img_Projects_Amsterdamsche_Football_Club_Clubhuis_afc_paul_de_ruiter_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: 'Amsterdamsche Football Club Clubhuis'
  }],
  category: [ProjectCategories.utiliteitbouw]
}, {
  title: 'Waldorp',
  description: 'Voor het project de Waldorp heeft Studiobouwhaven de Total Engineering verzorgd van haalbaarheidsstudie t/m omgevingsvergunning en werktekeningen.<br />Het project omvat 780 woningen en commerciële ruimten in de plint. Ook een het verzorgen van de bestemmingsplanwijziging en een spoorwegwetvergunning was onderdeel van de werkzaamheden.',
  images: [{
    src: _img_Projects_Waldorp_waldorp0001_jpg__WEBPACK_IMPORTED_MODULE_67___default.a,
    alt: 'Waldorp'
  }, {
    src: _img_Projects_Waldorp_waldorp0002_jpg__WEBPACK_IMPORTED_MODULE_68___default.a,
    alt: 'Waldorp'
  }, {
    src: _img_Projects_Waldorp_waldorp0003_jpg__WEBPACK_IMPORTED_MODULE_69___default.a,
    alt: 'Waldorp'
  }, {
    src: _img_Projects_Waldorp_waldorp0004_jpg__WEBPACK_IMPORTED_MODULE_70___default.a,
    alt: 'Waldorp'
  }, {
    src: _img_Projects_Waldorp_waldorp0005_jpg__WEBPACK_IMPORTED_MODULE_71___default.a,
    alt: 'Waldorp'
  }, {
    src: _img_Projects_Waldorp_waldorp0006_jpg__WEBPACK_IMPORTED_MODULE_72___default.a,
    alt: 'Waldorp'
  }],
  category: [ProjectCategories.woningbouw]
}, {
  title: 'Villa Kogelhof',
  description: '',
  images: [{
    src: _img_Projects_Villa_Kogelhof_kogelhof_jpg__WEBPACK_IMPORTED_MODULE_56___default.a,
    alt: 'Villa Kogelhof'
  }, {
    src: _img_Projects_Villa_Kogelhof_villa_kogelhof_2_jpg__WEBPACK_IMPORTED_MODULE_57___default.a,
    alt: 'Villa Kogelhof'
  }, {
    src: _img_Projects_Villa_Kogelhof_villa_kogelhof_3_jpg__WEBPACK_IMPORTED_MODULE_58___default.a,
    alt: 'Villa Kogelhof'
  }, {
    src: _img_Projects_Villa_Kogelhof_villa_kogelhof_jpg__WEBPACK_IMPORTED_MODULE_59___default.a,
    alt: 'Villa Kogelhof'
  }],
  category: [ProjectCategories.woningbouw]
}, {
  title: 'OWC Noordwestcluster',
  description: 'Ector Hoogstad architecten heeft het ontwerp gemaakt voor de nieuwe onderwijscluster voor onderwijs en wetenschappen te Utrecht. Hierbij verzorgd Studio bouwhaven de kostenbegeleiding en technische ondersteuning bij de verschillende hoogwaardige maar tegelijk budget gevoelige onderdelen van het gebouw. Ook het bestaande Minnaert gebouw wordt geheel verbouwd en deels gerenoveerd.',
  images: [{
    src: _img_Projects_OWC_Noordwestcluster_owc_noordwestcluster_1_jpg__WEBPACK_IMPORTED_MODULE_42___default.a,
    alt: 'OWC Noordwestcluster'
  }, {
    src: _img_Projects_OWC_Noordwestcluster_owc_noordwestcluster_2_jpg__WEBPACK_IMPORTED_MODULE_43___default.a,
    alt: 'OWC Noordwestcluster'
  }, {
    src: _img_Projects_OWC_Noordwestcluster_owc_jpg__WEBPACK_IMPORTED_MODULE_44___default.a,
    alt: 'OWC Noordwestcluster'
  }, {
    src: _img_Projects_OWC_Noordwestcluster_owc2_jpg__WEBPACK_IMPORTED_MODULE_45___default.a,
    alt: 'OWC Noordwestcluster'
  }, {
    src: _img_Projects_OWC_Noordwestcluster_owc3_jpg__WEBPACK_IMPORTED_MODULE_46___default.a,
    alt: 'OWC Noordwestcluster'
  }],
  category: [ProjectCategories.utiliteitbouw]
}, {
  title: 'Villa Augustus',
  description: '',
  images: [{
    src: _img_Projects_Villa_Augustus_Villa_Augustus_in_de_watertoren_is_het_hotel_gerealiseerd_jpg__WEBPACK_IMPORTED_MODULE_49___default.a,
    alt: 'Villa Augustus'
  }, {
    src: _img_Projects_Villa_Augustus_villa_augustus_2_jpg__WEBPACK_IMPORTED_MODULE_50___default.a,
    alt: 'Villa Augustus'
  }, {
    src: _img_Projects_Villa_Augustus_villa_augustus_jpg__WEBPACK_IMPORTED_MODULE_51___default.a,
    alt: 'Villa Augustus'
  }],
  category: [ProjectCategories.hotelsSportEnZorg]
}, {
  title: 'Koningshof Gouda',
  description: 'Voor het plan Koningshof te Gouda zijn 2 appartementenblokken en 6 rijen eengezinswoningen ontwikkeld. Blauwhoed heeft hiervoor een total engineering opdracht verstrekt waarin constructie installatie en geluid en brandadvies is opgenomen. Ook de budgettaire randvoorwaarden waren streng. Een uitgebreide zoektocht heeft uiteindelijk geleid tot een realistisch uitgangspunt voor de haalbaarheid . Momenteel zijn de werktekeningen geproduceerd en is de bouw gestart.',
  images: [{
    src: _img_Projects_Koningshof_Gouda_koningshof_gouda_2_jpg__WEBPACK_IMPORTED_MODULE_30___default.a,
    alt: 'Koningshof Gouda'
  }, {
    src: _img_Projects_Koningshof_Gouda_koningshof_gouda_jpg__WEBPACK_IMPORTED_MODULE_31___default.a,
    alt: 'Koningshof Gouda'
  }],
  category: [ProjectCategories.woningbouw]
}, {
  title: 'Elektrokern Schuurman',
  description: 'Op basis van het schetsontwerp van de architect Bekkering Adams, is een investeringsraming gemaakt en is de exploitatie bekeken. De gewenste architectonische uitwerking is onder druk komen te staan evenals de financiële haalbaarheid. Ook is een ecologische traject met betonkern activering en bodemopslag systeem door Schuurman vastgesteld. Door optimalisatie van het ontwerp en de uitvoering van met name de constructie en de gevel is het project haalbaar gemaakt.<br />Taken: projectmanagement, de ontwerpbegeleiding en directievoering van het plan.',
  images: [{
    src: _img_Projects_Elektrokern_Schuurman_elektrokern_schuurman_2_jpg__WEBPACK_IMPORTED_MODULE_19___default.a,
    alt: 'Elektrokern Schuurman'
  }, {
    src: _img_Projects_Elektrokern_Schuurman_elektrokern_schuurman_jpg__WEBPACK_IMPORTED_MODULE_20___default.a,
    alt: 'Elektrokern Schuurman'
  }],
  category: [ProjectCategories.utiliteitbouw]
}, {
  title: 'Spa hotel L’Europe',
  description: '',
  images: [{
    src: _img_Projects_Hotel_LEurope_hotel_l_europe_amsterdam_jpg__WEBPACK_IMPORTED_MODULE_26___default.a,
    alt: 'Hotel LEurope'
  }, {
    src: _img_Projects_Hotel_LEurope_hotel_de_leurope_amsterdam_by_night1_jpg__WEBPACK_IMPORTED_MODULE_27___default.a,
    alt: 'Hotel LEurope'
  }, {
    src: _img_Projects_Hotel_LEurope_hotelleurope_jpg__WEBPACK_IMPORTED_MODULE_28___default.a,
    alt: 'Hotel LEurope'
  }, {
    src: _img_Projects_Hotel_LEurope_spa_hotel_l_europe_jpg__WEBPACK_IMPORTED_MODULE_29___default.a,
    alt: 'Hotel LEurope'
  }],
  category: [ProjectCategories.hotelsSportEnZorg]
}, {
  title: 'Gemengde toren Gouda Oost',
  description: 'Het stedenbouwkundig ontwerp voor het zuidelijk stempel west en het structuurontwerp voor de Springerslocatie vormen samen een stedelijke ruimte met twee torens en ‘actieve’ plinten aan weerszijden van een plein en aan het uiteinde van de groene ruimte van de Oversteek. Dit is het zoekgebied voor een aantal niet-woonprogramma’s, maar ook voor bijzondere woonvormen. Concreet wordt gekeken naar de inpassingsmogelijkheden van begeleid wonen. In de plint komt een medisch centrum en commerciële ruimten.',
  images: [{
    src: _img_Projects_Gemengde_toren_Gouda_Oost_gemende_toren_gouda_oost_png__WEBPACK_IMPORTED_MODULE_21___default.a,
    alt: 'Gemengde toren Gouda Oost'
  }, {
    src: _img_Projects_Gemengde_toren_Gouda_Oost_gouda_toren_png__WEBPACK_IMPORTED_MODULE_22___default.a,
    alt: 'Gemengde toren Gouda Oost'
  }, {
    src: _img_Projects_Gemengde_toren_Gouda_Oost_gouda_oost_jpg__WEBPACK_IMPORTED_MODULE_23___default.a,
    alt: 'Gemengde toren Gouda Oost'
  }, {
    src: _img_Projects_Gemengde_toren_Gouda_Oost_toren_gouda_oost_render_jpg__WEBPACK_IMPORTED_MODULE_24___default.a,
    alt: 'Gemengde toren Gouda Oost'
  }, {
    src: _img_Projects_Gemengde_toren_Gouda_Oost_torenGouda_jpg__WEBPACK_IMPORTED_MODULE_25___default.a,
    alt: 'Gemengde toren Gouda Oost'
  }],
  category: [ProjectCategories.woningbouw]
}, {
  title: 'De Bolder',
  description: '',
  images: [{
    src: _img_Projects_De_Bolder_bolder_jpeg__WEBPACK_IMPORTED_MODULE_14___default.a,
    alt: 'De Bolder'
  }, {
    src: _img_Projects_De_Bolder_de_bolder_2_jpg__WEBPACK_IMPORTED_MODULE_15___default.a,
    alt: 'De Bolder'
  }, {
    src: _img_Projects_De_Bolder_de_bolder_3_jpg__WEBPACK_IMPORTED_MODULE_16___default.a,
    alt: 'De Bolder'
  }, {
    src: _img_Projects_De_Bolder_de_bolder_4_jpg__WEBPACK_IMPORTED_MODULE_17___default.a,
    alt: 'De Bolder'
  }, {
    src: _img_Projects_De_Bolder_de_bolder_jpg__WEBPACK_IMPORTED_MODULE_18___default.a,
    alt: 'De Bolder'
  }],
  category: [ProjectCategories.utiliteitbouw]
}, {
  title: 'Clubhuis tennisvereniging IJburg',
  description: '',
  images: [{
    src: _img_Projects_Clubhuis_tennisvereniging_IJburg_couch_tennisclub_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: 'Clubhuis tennisvereniging IJburg'
  }, {
    src: _img_Projects_Clubhuis_tennisvereniging_IJburg_couch_tennisclub_ijburg_m121113_m2_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: 'Clubhuis tennisvereniging IJburg'
  }, {
    src: _img_Projects_Clubhuis_tennisvereniging_IJburg_ijbur_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: 'Clubhuis tennisvereniging IJburg'
  }, {
    src: _img_Projects_Clubhuis_tennisvereniging_IJburg_ijburg_1140x500_jpeg__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: 'Clubhuis tennisvereniging IJburg'
  }, {
    src: _img_Projects_Clubhuis_tennisvereniging_IJburg_ijburg_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: 'Clubhuis tennisvereniging IJburg'
  }, {
    src: _img_Projects_Clubhuis_tennisvereniging_IJburg_mvrdv_pepijn_bakker_couch_5_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: 'Clubhuis tennisvereniging IJburg'
  }, {
    src: _img_Projects_Clubhuis_tennisvereniging_IJburg_tv_ijburg_jpeg__WEBPACK_IMPORTED_MODULE_13___default.a,
    alt: 'Clubhuis tennisvereniging IJburg'
  }],
  category: [ProjectCategories.utiliteitbouw]
}, {
  title: 'Land van Barendreght',
  description: 'Als ontwikkelend aannemer heeft Gebr. Blokland 221 woningen waarvan 91 appartementen ontwikkeld op de voormalige Haust hooimeier locatie in Barendrecht.<br />Het projectmanagement en sturing op de bouwsystemen en bouwkosten was de opdracht. Uiteindelijk is een zeer intensief overleg met de gemeente noodzakelijk geweest om alle s in goede banen te leiden. Met name faseringen ten gevolge van de crisis en overleg over d e de complete infrastructuur is zeer intensief geweest maar met succes afgerond.',
  images: [{
    src: _img_Projects_Land_van_Barendreght_land_van_barendrecht_2_jpg__WEBPACK_IMPORTED_MODULE_32___default.a,
    alt: 'Land van Barendreght'
  }, {
    src: _img_Projects_Land_van_Barendreght_land_van_barendreght_2_jpg__WEBPACK_IMPORTED_MODULE_33___default.a,
    alt: 'Land van Barendreght'
  }, {
    src: _img_Projects_Land_van_Barendreght_land_van_barendreght_3_jpg__WEBPACK_IMPORTED_MODULE_34___default.a,
    alt: 'Land van Barendreght'
  }, {
    src: _img_Projects_Land_van_Barendreght_land_van_barendreght_jpg__WEBPACK_IMPORTED_MODULE_35___default.a,
    alt: 'Land van Barendreght'
  }],
  category: [ProjectCategories.woningbouw]
}, {
  title: 'Vredehofplein & bibliotheek Spijkenisse',
  description: 'In 2005 begonnen met de engineering van de bibliotheek te Spijkenisse. Architect is Winny Maas van MVRDV, gevestigd te Rotterdam. Het gebouw kenmerkt zich door de toepassing van een glazen schil op houten spanten. Tussen de houten spanten en de glazen schil zijn tal van voorzieningen opgenomen (zonwering / sprinkler / verwarming). De openbare gebieden van de bibliotheek worden in het geheel uitgevoerd in steenstrips (vloeren / plafonds / wanden / trappen). De boekenkasten worden uitgevoerd in KLP (gerecycled kunststof).<br />Samen met architect MVRDV is het ambitieuze plan voor de boekenberg en 40 appartementen op de parkeergarage in het centrum van Spijkenisse uitgewerkt. De opdracht behelsde de ontwerp en kostenbegeleiding en het maken van de bouwaanvraag, bestek en werktekeningen. Het project is inmiddels opgeleverd.',
  images: [{
    src: _img_Projects_Vredehofplein_en_bibliotheek_Spijkenisse_BookMountain2_jpeg__WEBPACK_IMPORTED_MODULE_60___default.a,
    alt: 'Vredehofplein en bibliotheek Spijkenisse'
  }, {
    src: _img_Projects_Vredehofplein_en_bibliotheek_Spijkenisse_bibliotheek_mvrdv_spijkenisse_5_jpeg__WEBPACK_IMPORTED_MODULE_61___default.a,
    alt: 'Vredehofplein en bibliotheek Spijkenisse'
  }, {
    src: _img_Projects_Vredehofplein_en_bibliotheek_Spijkenisse_boekenberg_bibliotheek_spijkenisse_2_jpg__WEBPACK_IMPORTED_MODULE_62___default.a,
    alt: 'Vredehofplein en bibliotheek Spijkenisse'
  }, {
    src: _img_Projects_Vredehofplein_en_bibliotheek_Spijkenisse_boekenberg_bibliotheek_spijkenisse_jpg__WEBPACK_IMPORTED_MODULE_63___default.a,
    alt: 'Vredehofplein en bibliotheek Spijkenisse'
  }, {
    src: _img_Projects_Vredehofplein_en_bibliotheek_Spijkenisse_boekenberk_bookmountain_jpg__WEBPACK_IMPORTED_MODULE_64___default.a,
    alt: 'Vredehofplein en bibliotheek Spijkenisse'
  }, {
    src: _img_Projects_Vredehofplein_en_bibliotheek_Spijkenisse_spijkenisse_bibliotheek_jpg__WEBPACK_IMPORTED_MODULE_65___default.a,
    alt: 'Vredehofplein en bibliotheek Spijkenisse'
  }, {
    src: _img_Projects_Vredehofplein_en_bibliotheek_Spijkenisse_vredehofplein_bilbliotheek_spijkenisse_jpg__WEBPACK_IMPORTED_MODULE_66___default.a,
    alt: 'Vredehofplein en bibliotheek Spijkenisse'
  }],
  category: [ProjectCategories.woningbouw, ProjectCategories.utiliteitbouw]
}, {
  title: 'Clubhuis Rijswijkse Golfclub',
  description: 'Het nieuwe clubhuis van de Rijswijkse Golfclub is samen met architect Wolbrant van der Vlis ontworpen en in een total engineering constructie compleet uitgewerkt, aanbesteed en begeleid. De ambities van de golfclub stonden in grote spanning met de stedenbouwkundige randvoorwaarden. Toch is er een efficiënt, fraai en bijzonder clubhuis van gemaakt.',
  images: [{
    src: _img_Projects_Clubhuis_Rijswijkse_Golfclub_clubhuis_rijswijkse_golfclub_2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: 'Clubhuis Rijswijkse Golfclub'
  }, {
    src: _img_Projects_Clubhuis_Rijswijkse_Golfclub_clubhuis_rijswijkse_golfclub_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: 'Clubhuis Rijswijkse Golfclub'
  }],
  category: [ProjectCategories.utiliteitbouw]
}, {
  title: 'MC de Grebbe',
  description: 'Samen met Grassodenridder architecten werkt Studio Bouwhaven aan het ontwerp en realisatie van het medisch centrum De Grebbe te Bergen op Zoom. Door Studiobouwhaven worden de volgende werkzaamheden verricht:<br />Bouwkundige , constructieve en installatietechnische engineering in alle fasen van het bouwproces, bouwkosten begeleiding en aanbesteding, alsmede de directievoering tijdens de uitvoering. Het gebouw is inmiddels naar tevredenheid van de opdrachtgevers opgeleverd.',
  images: [{
    src: _img_Projects_MC_de_Grebbe_mc_de_grebbe_2_jpg__WEBPACK_IMPORTED_MODULE_38___default.a,
    alt: 'MC de Grebbe'
  }, {
    src: _img_Projects_MC_de_Grebbe_mc_de_grebbe_jpg__WEBPACK_IMPORTED_MODULE_39___default.a,
    alt: 'MC de Grebbe'
  }],
  category: [ProjectCategories.hotelsSportEnZorg]
}, {
  title: 'Merlet college Cuijck',
  description: '',
  images: [{
    src: _img_Projects_Merlet_college_Cuijck_merlet_jpg__WEBPACK_IMPORTED_MODULE_40___default.a,
    alt: 'Merlet college Cuijck'
  }, {
    src: _img_Projects_Merlet_college_Cuijck_merlet2_png__WEBPACK_IMPORTED_MODULE_41___default.a,
    alt: 'Merlet college Cuijck'
  }],
  category: [ProjectCategories.utiliteitbouw]
}, {
  title: 'Sociale werkplaats Haegheflor',
  description: 'De Haeghe groep heeft het voormalig kassencomplex van Valstar aan de Orberlaan in monster aangekocht om daar de nieuwe sociale werkplaats in te richten. Naast de verbouw en aanpassing van de kassen en de pootlijn moeten ook werkplaatsen, verwerkingsruimten en faciliteiten voor de medewerkers van Haeghe flor worden gemaakt. De bouw moet openbaar worden aanbesteed om te komen tot een design en build realisatie door een aannemer. Tevens is de planning bijzonder strak in verband met de oplevering van de oude locatie.<br />Taken: Ontwerp, TOTAL ENGINEERING met projectmanagement, kostenbegeleiding, ontwerp en bouwbegeleiding.',
  images: [{
    src: _img_Projects_Sociale_werkplaats_Haegheflor_haegeflor_jpg__WEBPACK_IMPORTED_MODULE_47___default.a,
    alt: 'Sociale werkplaats Haegheflor'
  }, {
    src: _img_Projects_Sociale_werkplaats_Haegheflor_sociale_werkplaats_haegeflor_jpg__WEBPACK_IMPORTED_MODULE_48___default.a,
    alt: 'Sociale werkplaats Haegheflor'
  }],
  category: [ProjectCategories.hotelsSportEnZorg]
}, {
  title: 'Villa Bergen',
  description: '',
  images: [{
    src: _img_Projects_Villa_Bergen_villa_bergen_1_png__WEBPACK_IMPORTED_MODULE_52___default.a,
    alt: 'Villa Bergen'
  }, {
    src: _img_Projects_Villa_Bergen_villa_bergen_2_png__WEBPACK_IMPORTED_MODULE_53___default.a,
    alt: 'Villa Bergen'
  }, {
    src: _img_Projects_Villa_Bergen_villa_bergen_3_png__WEBPACK_IMPORTED_MODULE_54___default.a,
    alt: 'Villa Bergen'
  }, {
    src: _img_Projects_Villa_Bergen_villabergen_png__WEBPACK_IMPORTED_MODULE_55___default.a,
    alt: 'Villa Bergen'
  }],
  category: [ProjectCategories.woningbouw]
}, {
  title: 'Baltic Tower - Poznan, Poland',
  description: '',
  images: [{
    src: _img_Projects_Baltic_Tower_Poznan_Poland_baltic_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: 'Baltic Tower - Poznan Poland'
  }, {
    src: _img_Projects_Baltic_Tower_Poznan_Poland_baltic2_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: 'Baltic Tower - Poznan Poland'
  }],
  category: [ProjectCategories.utiliteitbouw]
}];

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Router"]; });



/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(15);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(105);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(107);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(19);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(20);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(108);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(16);

var _helpers = __webpack_require__(109);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(104)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(16);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(106)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var getProductNameLink = function getProductNameLink(projetTitle) {
  return "project/".concat(projetTitle.replace(/ /g, '-').replace(/--/g, '-').replace(/,|&|(|)|!|'|"|`|’|‘|“|”|„|_/g, '').toLowerCase());
};

/* harmony default export */ __webpack_exports__["a"] = (getProductNameLink);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/de bolder.45d2120a.jpg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/hotel-de-leurope-amsterdam-by-night1.d827d1e9.jpg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/kogelhof.07908970.jpg";

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(7);

// EXTERNAL MODULE: /Users/philipghering/Documents/StudioBouwhaven/studiobouwhaven-react/src/components/Router.js
var Router = __webpack_require__(2);

// EXTERNAL MODULE: /Users/philipghering/Documents/StudioBouwhaven/studiobouwhaven-react/src/app.scss
var app = __webpack_require__(118);

// EXTERNAL MODULE: /Users/philipghering/Documents/StudioBouwhaven/studiobouwhaven-react/src/content/img/studio bouwhaven.png
var studio_bouwhaven = __webpack_require__(27);
var studio_bouwhaven_default = /*#__PURE__*/__webpack_require__.n(studio_bouwhaven);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(6);

// CONCATENATED MODULE: /Users/philipghering/Documents/StudioBouwhaven/studiobouwhaven-react/src/components/ScrollToTop.js



var ScrollToTop_ScrollToTop = function ScrollToTop() {
  var _useLocation = Object(router_["useLocation"])(),
      pathname = _useLocation.pathname;

  Object(external_react_["useEffect"])(function () {
    if (window) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
};

/* harmony default export */ var components_ScrollToTop = (ScrollToTop_ScrollToTop);
// CONCATENATED MODULE: /Users/philipghering/Documents/StudioBouwhaven/studiobouwhaven-react/src/components/Footer.js


var Footer_Footer = function Footer() {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "footer-container"
  }, /*#__PURE__*/external_react_default.a.createElement("p", null, "\xA9 ".concat(new Date().getFullYear(), ", Studio Bouwhaven")));
};

/* harmony default export */ var components_Footer = (Footer_Footer);
// CONCATENATED MODULE: /Users/philipghering/Documents/StudioBouwhaven/studiobouwhaven-react/src/App.js








var App_App = function App() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Root"], null, /*#__PURE__*/external_react_default.a.createElement(components_ScrollToTop, null), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "nav-container"
  }, /*#__PURE__*/external_react_default.a.createElement("nav", null, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    className: "nav-logo",
    to: "/"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: studio_bouwhaven_default.a,
    alt: "Studio Bouwhaven total engineering logo"
  })), /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/contact"
  }, 'Contact')))), /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: /*#__PURE__*/external_react_default.a.createElement("em", null, 'Loading...')
  }, /*#__PURE__*/external_react_default.a.createElement(Router["b" /* Router */], null, /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*"
  }))), /*#__PURE__*/external_react_default.a.createElement(components_Footer, null));
};

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App_App);

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(15);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(8);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("/Users/philipghering/Documents/StudioBouwhaven/studiobouwhaven-react/node_modules/react-static/lib/browser");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero not-found"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, 'Deze pagina is niet gevonden, wellicht is de pagina die u zocht verplaatst'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_1__[/* Link */ "a"], {
    to: "/"
  }, 'Ga naar de homepagina'));
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Contact = function Contact() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contact-page-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, 'Adres'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, 'Wilgenbos 20'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, '3311 JX  Dordrecht'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, 'Directeur'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, 'Ruud Ghering'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, 'ruud@studiobouwhaven.nl'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, '+31 6 53638631'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, 'Projectleider'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, 'Carlo Mijnders'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, 'carlo@studiobouwhaven.nl'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, '+31 6 24253973'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    title: "google map wilgenbos 20",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187765.9975979125!2d4.4920404331262835!3d51.80508875958671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c42eda883ce111%3A0x914a8872b3db9ca7!2sWilgenbos%2020%2C%203311%20JX%20Dordrecht!5e0!3m2!1sen!2snl!4v1593459613190!5m2!1sen!2snl",
    width: "600",
    height: "450",
    frameborder: "0",
    allowfullscreen: "",
    "aria-hidden": "false",
    tabindex: "0"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _content_ProjectsContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _utils_getProductNameLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);






var ProjectContainer = function ProjectContainer() {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_2__["useRouteData"])(),
      project = _useRouteData.project;

  var thisProject = _content_ProjectsContent__WEBPACK_IMPORTED_MODULE_3__[/* ProjectsContent */ "b"].find(function (projectInAll) {
    return project.title === projectInAll.title;
  });
  var prevProjectIndex = _content_ProjectsContent__WEBPACK_IMPORTED_MODULE_3__[/* ProjectsContent */ "b"].findIndex(function (projectInAll) {
    return project.title === projectInAll.title;
  }) - 1;

  if (prevProjectIndex < 0) {
    prevProjectIndex = _content_ProjectsContent__WEBPACK_IMPORTED_MODULE_3__[/* ProjectsContent */ "b"].length - 1;
  }

  var nextProjectIndex = _content_ProjectsContent__WEBPACK_IMPORTED_MODULE_3__[/* ProjectsContent */ "b"].findIndex(function (projectInAll) {
    return project.title === projectInAll.title;
  }) + 1;

  if (nextProjectIndex > _content_ProjectsContent__WEBPACK_IMPORTED_MODULE_3__[/* ProjectsContent */ "b"].length - 1) {
    nextProjectIndex = 0;
  }

  var createMarkup = function createMarkup() {
    return {
      __html: thisProject.description
    };
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-page-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, thisProject.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    dangerouslySetInnerHTML: createMarkup()
  }), thisProject.images.map(function (image) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      key: image.src,
      className: "project-page-image",
      src: image.src,
      alt: image.alt
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "other-projects-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Router__WEBPACK_IMPORTED_MODULE_1__[/* Link */ "a"], {
    to: Object(_utils_getProductNameLink__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_content_ProjectsContent__WEBPACK_IMPORTED_MODULE_3__[/* ProjectsContent */ "b"][prevProjectIndex].title)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, 'Vorig project'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, _content_ProjectsContent__WEBPACK_IMPORTED_MODULE_3__[/* ProjectsContent */ "b"][prevProjectIndex].title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Router__WEBPACK_IMPORTED_MODULE_1__[/* Link */ "a"], {
    to: Object(_utils_getProductNameLink__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_content_ProjectsContent__WEBPACK_IMPORTED_MODULE_3__[/* ProjectsContent */ "b"][nextProjectIndex].title)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, 'Volgend project'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, _content_ProjectsContent__WEBPACK_IMPORTED_MODULE_3__[/* ProjectsContent */ "b"][nextProjectIndex].title))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectContainer);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(9);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/philipghering/Documents/StudioBouwhaven/studiobouwhaven-react/src/content/img/Projects/De Bolder/de bolder.jpg
var de_bolder = __webpack_require__(11);
var de_bolder_default = /*#__PURE__*/__webpack_require__.n(de_bolder);

// EXTERNAL MODULE: /Users/philipghering/Documents/StudioBouwhaven/studiobouwhaven-react/src/content/img/Projects/Hotel LEurope/hotel-de-leurope-amsterdam-by-night1.jpg
var hotel_de_leurope_amsterdam_by_night1 = __webpack_require__(12);
var hotel_de_leurope_amsterdam_by_night1_default = /*#__PURE__*/__webpack_require__.n(hotel_de_leurope_amsterdam_by_night1);

// EXTERNAL MODULE: /Users/philipghering/Documents/StudioBouwhaven/studiobouwhaven-react/src/content/img/Projects/Villa Kogelhof/kogelhof.jpg
var kogelhof = __webpack_require__(13);
var kogelhof_default = /*#__PURE__*/__webpack_require__.n(kogelhof);

// CONCATENATED MODULE: /Users/philipghering/Documents/StudioBouwhaven/studiobouwhaven-react/src/content/HomeContent.js



var heroSlides = [{
  title: 'Studio Bouwhaven',
  tagline: 'Bouwkundig adviesbureau met total engineering aanpak. Alle adviesdiensten voor het begeleiden van uw bouwproject in één hand.',
  image: de_bolder_default.a,
  alt: 'De Bolder Mammut bouwbegeleiding'
}, {
  title: 'Studio Bouwhaven levert het totaalpakket',
  tagline: '',
  image: kogelhof_default.a,
  alt: 'Villa Kogelhof consultancy projectmanagement'
}, {
  title: 'Zo veel mogelijk waarde toevoegen aan de leefomgeving van de mens is ons doel.',
  tagline: '',
  image: hotel_de_leurope_amsterdam_by_night1_default.a,
  alt: 'Spa Hotel de L Europe total engineering'
}];
var USPs = [{
  title: 'Onze uitgangspunten',
  body: 'Bouwen is een maatschappelijk relevante en verantwoordelijke activiteit. Het draagt in belangrijke mate bij aan de kwaliteit van het woon- werk- en leefklimaat van mensen.',
  image: 'source',
  alt: ''
}, {
  title: 'Aanpak',
  body: 'Wij vormen één aanspreekpunt, hanteren één contract en één prijs. Wij vormen samen met de architect de brug tussen alle externe partijen en de klant. Studio Bouwhaven levert het totaalpakket.',
  image: 'source',
  alt: ''
}, {
  title: 'Werkzaamheden',
  body: 'Consultancy, het geven van bouwadvies. Management van het proces, kosten en directie. En engineering, bestaande uit tekenwerk, calculatie, bestekken en rapportages.',
  image: 'source',
  alt: ''
}];
// EXTERNAL MODULE: /Users/philipghering/Documents/StudioBouwhaven/studiobouwhaven-react/src/components/Router.js
var Router = __webpack_require__(2);

// EXTERNAL MODULE: external "react-masonry-css"
var external_react_masonry_css_ = __webpack_require__(28);
var external_react_masonry_css_default = /*#__PURE__*/__webpack_require__.n(external_react_masonry_css_);

// EXTERNAL MODULE: /Users/philipghering/Documents/StudioBouwhaven/studiobouwhaven-react/src/utils/getProductNameLink.js
var getProductNameLink = __webpack_require__(10);

// CONCATENATED MODULE: /Users/philipghering/Documents/StudioBouwhaven/studiobouwhaven-react/src/components/Projects/ProjectGrid.js





var ProjectGrid_ProjectGrid = function ProjectGrid(_ref) {
  var projects = _ref.projects;
  var amtColumns = typeof window !== 'undefined' ? window.screen.width < 670 ? 1 : 3 : 1;
  return /*#__PURE__*/external_react_default.a.createElement(external_react_masonry_css_default.a, {
    className: "project-list",
    columnClassName: "project-list-column",
    breakpointCols: amtColumns
  }, projects.map(function (project) {
    return /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
      to: Object(getProductNameLink["a" /* default */])(project.title),
      key: project.title
    }, /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "project-list-tile"
    }, /*#__PURE__*/external_react_default.a.createElement("img", {
      className: "project-list-tile-image",
      src: project.images[0].src,
      alt: project.images[0].alt
    }), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "project-title-container"
    }, /*#__PURE__*/external_react_default.a.createElement("h3", {
      className: "project-title"
    }, project.title))));
  }));
};

/* harmony default export */ var Projects_ProjectGrid = (ProjectGrid_ProjectGrid);
// EXTERNAL MODULE: /Users/philipghering/Documents/StudioBouwhaven/studiobouwhaven-react/src/content/ProjectsContent.js
var ProjectsContent = __webpack_require__(1);

// CONCATENATED MODULE: /Users/philipghering/Documents/StudioBouwhaven/studiobouwhaven-react/src/components/Projects/Projects.js





var Projects_Projects = function Projects() {
  var _useState = Object(external_react_["useState"])(ProjectsContent["a" /* ProjectCategories */].all),
      _useState2 = slicedToArray_default()(_useState, 2),
      activeCategory = _useState2[0],
      setActiveCategory = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(ProjectsContent["b" /* ProjectsContent */]),
      _useState4 = slicedToArray_default()(_useState3, 2),
      activeProjects = _useState4[0],
      setActiveProjects = _useState4[1];

  var handleClickCategory = function handleClickCategory(category) {
    setActiveCategory(category);

    if (category === ProjectsContent["a" /* ProjectCategories */].all) {
      setActiveProjects(ProjectsContent["b" /* ProjectsContent */]);
      return;
    }

    setActiveProjects(ProjectsContent["b" /* ProjectsContent */].filter(function (project) {
      return project.category.includes(category);
    }));
  };

  return /*#__PURE__*/external_react_default.a.createElement("section", {
    className: "projects-container",
    id: "projects"
  }, /*#__PURE__*/external_react_default.a.createElement("h2", null, 'Onze projecten'), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "project-categories"
  }, Object.values(ProjectsContent["a" /* ProjectCategories */]).map(function (category) {
    return /*#__PURE__*/external_react_default.a.createElement("button", {
      key: category,
      onClick: function onClick() {
        return handleClickCategory(category);
      }
    }, /*#__PURE__*/external_react_default.a.createElement("h4", {
      className: "project-category ".concat(category === activeCategory ? 'disabled' : '')
    }, category));
  })), /*#__PURE__*/external_react_default.a.createElement(Projects_ProjectGrid, {
    projects: activeProjects
  }));
};

/* harmony default export */ var components_Projects_Projects = (Projects_Projects);
// CONCATENATED MODULE: /Users/philipghering/Documents/StudioBouwhaven/studiobouwhaven-react/src/pages/index.js






var pages_Home = function Home() {
  var _useState = Object(external_react_["useState"])(0),
      _useState2 = slicedToArray_default()(_useState, 2),
      currentHeroIndex = _useState2[0],
      setCurrentHero = _useState2[1];

  Object(external_react_["useEffect"])(function () {
    var heroInterval = setTimeout(function () {
      setCurrentHero(currentHeroIndex === heroSlides.length - 1 ? 0 : currentHeroIndex + 1);
    }, 5000);
    return function () {
      clearTimeout(heroInterval);
    };
  }, [currentHeroIndex]);
  var currentHero = heroSlides[currentHeroIndex];
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    className: "hero-image",
    src: currentHero.image,
    alt: currentHero.alt
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "hero-text"
  }, /*#__PURE__*/external_react_default.a.createElement("h1", null, currentHero.title), /*#__PURE__*/external_react_default.a.createElement("h2", null, currentHero.tagline))), /*#__PURE__*/external_react_default.a.createElement("section", {
    className: "usp-container"
  }, USPs.map(function (usp) {
    return /*#__PURE__*/external_react_default.a.createElement("div", {
      key: usp.title,
      className: "usp"
    }, /*#__PURE__*/external_react_default.a.createElement("h3", null, usp.title), /*#__PURE__*/external_react_default.a.createElement("img", {
      className: "usp-icon",
      src: usp.image,
      alt: usp.alt
    }), /*#__PURE__*/external_react_default.a.createElement("p", null, usp.body));
  })), /*#__PURE__*/external_react_default.a.createElement(components_Projects_Projects, null));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Home);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(7);

var _router = __webpack_require__(6);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/studio bouwhaven.e389e6fc.png";

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-masonry-css");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/afc_amsterdamsche_football_club.8431407b.jpg";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/afc_football-club.2ecd43fc.jpg";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/afc_paul_de_ruiter.8abd3596.jpg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/baltic.b028211f.jpg";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/baltic2.f1910d20.png";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/clubhuis rijswijkse golfclub 2.84380c02.jpg";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/clubhuis rijswijkse golfclub.9dc7b473.jpg";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/couch tennisclub.be9581ef.jpg";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/couch-tennisclub-ijburg-m121113-m2.3b0eee5b.jpg";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ijbur.ae5e8561.jpg";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ijburg-1140x500.73fc83ce.jpeg";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ijburg.ff05d30a.jpg";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/mvrdv-pepijn-bakker-couch-5.8af7974f.jpg";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/tv-ijburg.2e2d56dc.jpeg";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/bolder.54aad5f6.jpeg";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/de bolder 2.210a51e9.jpg";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/de bolder 3.929aed91.jpg";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/de bolder 4.19ecb6d5.jpg";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/elektrokern schuurman 2.54924b5b.jpg";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/elektrokern schuurman.2c360a43.jpg";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/gemende toren gouda oost.8b5d2817.png";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/gouda toren.4844b66d.png";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/gouda-oost.dbbe096b.jpg";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/toren gouda oost render.2578f4c6.jpg";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/torenGouda.f02aebe3.jpg";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/hotel l europe amsterdam.54fbf662.jpg";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/hotelleurope.aeba4320.jpg";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/spa hotel l europe.01cb314f.jpg";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/koningshof gouda 2.850d2cec.jpg";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/koningshof gouda.0b8fb285.jpg";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/land van barendrecht 2.766483e5.jpg";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/land van barendreght 2.b6e01572.jpg";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/land van barendreght 3.3647f7b9.jpg";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/land van barendreght.155840a7.jpg";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/LouisArmstrong-Almere1.366a6b68.jpg";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/LouisArmstrong-Almere2.6af1ef31.jpg";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/mc de grebbe 2.0af4ba98.jpg";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/mc de grebbe.df914489.jpg";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/merlet.4b915ad3.jpg";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/merlet2.c083da0f.png";

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/owc noordwestcluster 1.3103c9bf.jpg";

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/owc noordwestcluster 2.7809c8c0.jpg";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/owc.cd07b11b.jpg";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/owc2.f73d5405.jpg";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/owc3.5399f1ae.jpg";

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/haegeflor.4160dacf.jpg";

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/sociale werkplaats haegeflor.9217acde.jpg";

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Villa-Augustus_in-de-watertoren-is-het-hotel-gerealiseerd.bb2dcbc1.jpg";

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/villa augustus 2.2e88f720.jpg";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/villa augustus.b56aad5b.jpg";

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/villa bergen 1.68e80f00.png";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/villa bergen 2.e6482431.png";

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/villa bergen 3.dbe9685a.png";

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/villabergen.81e23e39.png";

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/villa kogelhof 2.d7c35c77.jpg";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/villa kogelhof 3.b5365c5a.jpg";

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/villa-kogelhof.173f75bf.jpg";

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/BookMountain2.a5adea00.jpeg";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/bibliotheek-mvrdv-spijkenisse-5.1b4b8bae.jpeg";

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/boekenberg bibliotheek spijkenisse 2.6054c1d2.jpg";

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/boekenberg bibliotheek spijkenisse.895cf3ee.jpg";

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/boekenberk bookmountain.b5bb1210.jpg";

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/spijkenisse bibliotheek.593f6cce.jpg";

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vredehofplein bilbliotheek spijkenisse.45c50c70.jpg";

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/waldorp0001.ab721a51.jpg";

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/waldorp0002.94555f88.jpg";

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/waldorp0003.5f14d7fb.jpg";

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/waldorp0004.bcf6acfd.jpg";

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/waldorp0005.b611d9a5.jpg";

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/waldorp0006.b86d7155.jpg";

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(100);
__webpack_require__(102);
module.exports = __webpack_require__(110);


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(101)["default"];

var _require = __webpack_require__(18),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-sass",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(18),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(103),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);










Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404 */).then(__webpack_require__.bind(null, 21))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(21);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404.js';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/contact.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/contact */).then(__webpack_require__.bind(null, 22))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/contact.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(22);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/contact";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/pages/contact.js';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/index */).then(__webpack_require__.bind(null, 24))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(24);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/index";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/pages/index.js';
var t_3 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/ProjectContainer",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/components/ProjectContainer */).then(__webpack_require__.bind(null, 23))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/ProjectContainer');
  },
  resolve: function resolve() {
    return /*require.resolve*/(23);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/ProjectContainer";
  }
}), universalOptions);
t_3.template = '__react_static_root__/src/components/ProjectContainer'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404.js': t_0,
  '__react_static_root__/src/pages/contact.js': t_1,
  '__react_static_root__/src/pages/index.js': t_2,
  '__react_static_root__/src/components/ProjectContainer': t_3
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(16);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 8,
	"./": 8,
	"./index": 8,
	"./index.js": 8
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 106;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(15);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(19);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(20);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(5);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(111);

var _interopRequireDefault = __webpack_require__(112);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(113));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(114));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(115);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(116)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = require("/Users/philipghering/Documents/StudioBouwhaven/studiobouwhaven-react/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(117)(module)))

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(119)(false);
// Imports
var urlEscape = __webpack_require__(120);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(121));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(122));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(123));

// Module
exports.push([module.i, "*{scroll-behavior:smooth}@font-face{font-family:'OpenSans Light';src:url(" + ___CSS_LOADER_URL___0___ + ") format(\"woff\")}@font-face{font-family:'OpenSans Regular';src:url(" + ___CSS_LOADER_URL___1___ + ") format(\"woff\")}@font-face{font-family:'OpenSans Extra Bold';src:url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff\")}body{font-family:'OpenSans Regular', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;font-size:16px;margin:0;overflow-x:hidden;padding:0}a{color:inherit;text-decoration:none}img{max-width:100%;-o-object-fit:contain;object-fit:contain}button{background-color:unset;border:0;font:unset;padding:0;text-align:unset}button:hover{cursor:pointer}button:active,button:focus{border:0;outline:none}h1,h2,h3,h4,h5,h6{margin:0}.nav-container{left:0;margin:0 auto;position:absolute;top:0;width:100%;z-index:100}nav{box-sizing:border-box;max-width:1200px;padding:0 10px;width:100%;display:flex;justify-content:space-between;margin:0 auto;padding:20px 10px}nav a{display:inline-block;padding:1rem 0 1rem 1rem}nav a .active::after{background-color:black;content:'';display:block;height:1px;position:relative;width:100%}.nav-logo{align-content:center;display:flex;padding:0;width:150px}.hero{align-items:center;display:flex;height:100vh;justify-content:center;overflow:hidden;text-align:center;width:100%}.hero-text{background-color:rgba(0,0,0,0.3);color:white;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:20px;position:relative;width:50%}.hero-image{height:100vh;min-width:100%;-o-object-fit:cover;object-fit:cover;position:absolute}.usp-container{box-sizing:border-box;max-width:1200px;padding:0 10px;width:100%;display:flex;justify-content:space-around;margin:100px auto 200px}.usp{align-items:center;display:flex;flex-direction:column;height:200px;text-align:center;width:20%}.usp-icon{-o-object-fit:contain;object-fit:contain;width:70%}.projects-container{box-sizing:border-box;max-width:1200px;padding:0 10px;width:100%;margin:100px auto 200px}.project-categories{display:flex;flex-wrap:wrap;margin:0 0 20px}.project-category{margin:10px 20px 10px 0;position:relative}.project-category.disabled::after{background-color:#000;content:'';display:block;height:1px;position:absolute;width:100%}.project-list{display:flex;margin-left:-30px;width:auto}.project-list-column{background-clip:padding-box;padding-left:30px}.project-list-tile{margin-bottom:30px;position:relative}.project-list-tile-image{width:100%}.project-title-container{bottom:5px;box-sizing:border-box;color:white;font-family:'OpenSans Light', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;overflow:hidden;position:absolute;width:100%}.project-title{background-color:rgba(0,0,0,0.3);padding:15px;transform:translateY(100%);transition:all 100ms ease-in-out;width:100%}.project-list-tile:hover .project-title{transform:translateY(0)}.project-page-container{box-sizing:border-box;max-width:1200px;padding:0 10px;width:100%;margin:100px auto}.project-page-image{width:100%}.other-projects-wrapper{display:flex;justify-content:space-between;margin-top:100px;width:100%}.other-projects-wrapper a:last-child{text-align:right}.contact-page-container{box-sizing:border-box;max-width:1200px;padding:0 10px;width:100%;display:flex;justify-content:space-between;margin:100px auto 200px}.contact-page-container p{margin:5px 0}.footer-container{box-sizing:border-box;max-width:1200px;padding:0 10px;width:100%;margin:0 auto;padding-bottom:50px;padding-top:20px}.not-found{display:flex;flex-direction:column}.not-found a{border:2px solid #c3bd9a;margin-top:20px;padding:12px 32px}@media screen and (max-width: 670px){.hero-text{width:90%}.usp-container{flex-direction:column}.usp{margin:0 auto 50px;width:70%}}@media (hover: none){.project-title{transform:translateY(0)}}\n", ""]);



/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/OpenSans-Light.05c88e41.woff";

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/OpenSans-Regular.c8ffdeb3.woff";

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/OpenSans-ExtraBold.177b9a28.woff";

/***/ })
/******/ ]);
});