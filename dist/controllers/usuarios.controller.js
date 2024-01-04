"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUsuarios = exports.getUsuarios = exports.getUsuarioById = exports.getTotalUsuarios = exports.createUsuario = exports.DeleteUsuarioById = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../database");
var getUsuarios = exports.getUsuarios = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context.sent;
          _context.next = 6;
          return pool.request().query(_database.querys.getAllUsuarios);
        case 6:
          result = _context.sent;
          res.json(result.recordset);
          _context.next = 14;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          res.status(500);
          res.sender(_context.t0.message);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getUsuarios(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var createUsuario = exports.createUsuario = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, Nombre, Apaterno, Amaterno, IDPerfil, Alias, Contraseña, IDEstatus, ControlRespMov, ControlFecha, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, Nombre = _req$body.Nombre, Apaterno = _req$body.Apaterno, Amaterno = _req$body.Amaterno, IDPerfil = _req$body.IDPerfil, Alias = _req$body.Alias, Contraseña = _req$body.Contraseña, IDEstatus = _req$body.IDEstatus, ControlRespMov = _req$body.ControlRespMov, ControlFecha = _req$body.ControlFecha;
          console.log(Nombre, Apaterno, Amaterno, IDPerfil, Alias, Contraseña, IDEstatus, ControlRespMov, ControlFecha);
          _context2.prev = 2;
          _context2.next = 5;
          return (0, _database.getConnection)();
        case 5:
          pool = _context2.sent;
          _context2.next = 8;
          return pool.request().input("Nombre", _database.sql.VarChar, Nombre).input("Apaterno", _database.sql.VarChar, Apaterno).input("Amaterno", _database.sql.VarChar, Amaterno).input("IDPerfil", _database.sql.Int, IDPerfil).input("Alias", _database.sql.VarChar, Alias).input("Contraseña", _database.sql.VarChar, Contraseña).input("IDEstatus", _database.sql.Int, IDEstatus).input("AltaUnidades", _database.sql.VarChar, "").input("ProyectosAsignados", _database.sql.VarChar, "").input("FacturacionIndependiente", _database.sql.Bit, 0).input("ControlRespMov", _database.sql.Int, ControlRespMov).input("ControlFecha", _database.sql.VarChar, ControlFecha).query(_database.querys.createUsuario);
        case 8:
          res.json("Nuevo usuario");
          _context2.next = 15;
          break;
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](2);
          res.status(500);
          res.sender(_context2.t0.message);
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 11]]);
  }));
  return function createUsuario(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getUsuarioById = exports.getUsuarioById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.prev = 1;
          _context3.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context3.sent;
          _context3.next = 7;
          return pool.request().input('ID', id).query(_database.querys.getUsuarioById);
        case 7:
          result = _context3.sent;
          console.log(result);
          res.send(result.recordset[0]);
          _context3.next = 16;
          break;
        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](1);
          res.status(500);
          res.send(_context3.t0.message);
        case 16:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 12]]);
  }));
  return function getUsuarioById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var DeleteUsuarioById = exports.DeleteUsuarioById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context4.sent;
          _context4.next = 7;
          return pool.request().input('ID', id).query(_database.querys.deleteUsuario);
        case 7:
          result = _context4.sent;
          res.sendStatus(204);
          _context4.next = 15;
          break;
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](1);
          res.status(500);
          res.send(_context4.t0.message);
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 11]]);
  }));
  return function DeleteUsuarioById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getTotalUsuarios = exports.getTotalUsuarios = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context5.sent;
          _context5.next = 6;
          return pool.request().query(_database.querys.getTotalUsuarios);
        case 6:
          result = _context5.sent;
          res.json(result.recordset[0]['']);
          _context5.next = 14;
          break;
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          res.status(500);
          res.send(_context5.t0.message);
        case 14:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 10]]);
  }));
  return function getTotalUsuarios(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var updateUsuarios = exports.updateUsuarios = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body2, Nombre, Apaterno, Amaterno, IDPerfil, Alias, Contraseña, IDEstatus, ControlRespMov, ControlFecha, id, pool;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _req$body2 = req.body, Nombre = _req$body2.Nombre, Apaterno = _req$body2.Apaterno, Amaterno = _req$body2.Amaterno, IDPerfil = _req$body2.IDPerfil, Alias = _req$body2.Alias, Contraseña = _req$body2.Contraseña, IDEstatus = _req$body2.IDEstatus, ControlRespMov = _req$body2.ControlRespMov, ControlFecha = _req$body2.ControlFecha;
          id = req.params.id;
          _context6.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context6.sent;
          _context6.next = 7;
          return pool.request().input("Nombre", _database.sql.VarChar, Nombre).input("Apaterno", _database.sql.VarChar, Apaterno).input("Amaterno", _database.sql.VarChar, Amaterno).input("IDPerfil", _database.sql.Int, IDPerfil).input("Alias", _database.sql.VarChar, Alias).input("Contraseña", _database.sql.VarChar, Contraseña).input("IDEstatus", _database.sql.Int, IDEstatus).input("AltaUnidades", _database.sql.VarChar, "").input("ProyectosAsignados", _database.sql.VarChar, "").input("FacturacionIndependiente", _database.sql.Bit, 0).input("ControlRespMov", _database.sql.Int, ControlRespMov).input("ControlFecha", _database.sql.VarChar, ControlFecha).input("ID", _database.sql.Int, id).query(_database.querys.updateUsuario);
        case 7:
          res.json("Usuario actualizado correctamente");
        case 8:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function updateUsuarios(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();